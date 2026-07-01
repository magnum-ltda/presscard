import { Injectable, computed, signal } from '@angular/core';
import { collection, doc, setDoc, getDocs, updateDoc, query, where } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  private readonly collectionName = 'coupons';
  private readonly STORAGE_KEY = 'presscard_coupons';
  
  private couponsSignal = signal<Coupon[]>([]);
  public coupons = computed(() => this.couponsSignal());

  constructor(private firebase: FirebaseService) {}

  async loadCouponsForEmployee(employeeId: string) {
    if (!this.firebase.isEnabled) {
      const localCoupons = this.getLocalCoupons().filter(c => c.employeeId === employeeId);
      localCoupons.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      this.couponsSignal.set(localCoupons);
      return;
    }
    try {
      const q = query(
        collection(this.firebase.db, this.collectionName),
        where('employeeId', '==', employeeId)
      );
      const querySnapshot = await getDocs(q);
      const coupons = querySnapshot.docs.map(doc => doc.data() as Coupon);
      coupons.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      this.couponsSignal.set(coupons);
    } catch (e) {
      console.error('Error loading coupons', e);
    }
  }

  async generateCoupon(couponData: Omit<Coupon, 'id' | 'code' | 'status' | 'createdAt'>, fixedCode?: string): Promise<Coupon | null> {
    const newCoupon: Coupon = {
      ...couponData,
      id: crypto.randomUUID(),
      code: fixedCode || `PRSC-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      status: 'CREATED',
      createdAt: new Date().toISOString()
    };

    if (!this.firebase.isEnabled) {
      const all = this.getLocalCoupons();
      all.unshift(newCoupon);
      this.saveLocalCoupons(all);
      this.couponsSignal.update(c => [newCoupon, ...c]);
      return newCoupon;
    }
    
    try {
      await setDoc(doc(this.firebase.db, this.collectionName, newCoupon.id), newCoupon);
      this.couponsSignal.update(c => [newCoupon, ...c]);
      return newCoupon;
    } catch (e) {
      console.error('Error generating coupon', e);
      return null;
    }
  }

  async validateCoupon(code: string, partnerId: string): Promise<{ success: boolean; message: string; coupon?: Coupon }> {
    if (!this.firebase.isEnabled) {
      const all = this.getLocalCoupons();
      const couponIndex = all.findIndex(c => c.code === code);
      if (couponIndex === -1) return { success: false, message: 'Cupom não encontrado' };

      const couponData = all[couponIndex];
      if (couponData.partnerId !== partnerId) {
        return { success: false, message: 'Cupom não pertence a este estabelecimento' };
      }
      if (couponData.status !== 'CREATED') {
        return { success: false, message: 'Cupom já foi utilizado ou expirou', coupon: couponData };
      }

      const updatedCoupon = { ...couponData, status: 'VALIDATED' as const, validatedAt: new Date().toISOString() };
      all[couponIndex] = updatedCoupon;
      this.saveLocalCoupons(all);
      return { success: true, message: 'Cupom validado com sucesso!', coupon: updatedCoupon };
    }

    try {
      const q = query(
        collection(this.firebase.db, this.collectionName),
        where('code', '==', code)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) return { success: false, message: 'Cupom não encontrado' };

      const couponDoc = querySnapshot.docs[0];
      const couponData = couponDoc.data() as Coupon;

      if (couponData.partnerId !== partnerId) {
        return { success: false, message: 'Cupom não pertence a este estabelecimento' };
      }

      if (couponData.status !== 'CREATED') {
        return { success: false, message: 'Cupom já foi utilizado ou expirou', coupon: couponData };
      }

      await updateDoc(couponDoc.ref, {
        status: 'VALIDATED',
        validatedAt: new Date().toISOString()
      });
      
      const updatedCoupon = { ...couponData, status: 'VALIDATED', validatedAt: new Date().toISOString() } as Coupon;
      return { success: true, message: 'Cupom validado com sucesso!', coupon: updatedCoupon };
    } catch (e) {
      console.error('Error validating coupon', e);
      return { success: false, message: 'Erro interno ao validar cupom' };
    }
  }

  async getCouponsByPartner(partnerId: string): Promise<Coupon[]> {
    if (!this.firebase.isEnabled) {
      const all = this.getLocalCoupons().filter(c => c.partnerId === partnerId);
      all.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      return all;
    }
    try {
      const q = query(
        collection(this.firebase.db, this.collectionName),
        where('partnerId', '==', partnerId)
      );
      const querySnapshot = await getDocs(q);
      const coupons = querySnapshot.docs.map(doc => doc.data() as Coupon);
      coupons.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      return coupons;
    } catch (e) {
      console.error('Error loading partner coupons', e);
      return [];
    }
  }

  async getAllCoupons(): Promise<Coupon[]> {
    if (!this.firebase.isEnabled) {
      return this.getLocalCoupons();
    }
    try {
      const querySnapshot = await getDocs(collection(this.firebase.db, this.collectionName));
      return querySnapshot.docs.map(doc => doc.data() as Coupon);
    } catch (e) {
      console.error('Error loading all coupons', e);
      return [];
    }
  }

  private generateRandomCode(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  private getLocalCoupons(): Coupon[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveLocalCoupons(coupons: Coupon[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(coupons));
  }
}
