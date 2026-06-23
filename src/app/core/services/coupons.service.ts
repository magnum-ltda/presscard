import { Injectable, computed, signal } from '@angular/core';
import { collection, doc, setDoc, getDocs, updateDoc, query, where } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  private readonly collectionName = 'coupons';
  
  private couponsSignal = signal<Coupon[]>([]);
  public coupons = computed(() => this.couponsSignal());

  constructor(private firebase: FirebaseService) {}

  async loadCouponsForEmployee(employeeId: string) {
    if (!this.firebase.isEnabled) return;
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

  async generateCoupon(couponData: Omit<Coupon, 'id' | 'code' | 'status' | 'createdAt'>): Promise<Coupon | null> {
    if (!this.firebase.isEnabled) return null;
    const newCoupon: Coupon = {
      ...couponData,
      id: crypto.randomUUID(),
      code: `PRSC-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      status: 'CREATED',
      createdAt: new Date().toISOString()
    };
    
    try {
      await setDoc(doc(this.firebase.db, this.collectionName, newCoupon.id), newCoupon);
      this.couponsSignal.update(c => [newCoupon, ...c]);
      return newCoupon;
    } catch (e) {
      console.error('Error generating coupon', e);
      return null;
    }
  }

  async validateCoupon(code: string): Promise<boolean> {
    if (!this.firebase.isEnabled) return false;
    try {
      const q = query(
        collection(this.firebase.db, this.collectionName),
        where('code', '==', code),
        where('status', '==', 'CREATED')
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) return false;

      const couponDoc = querySnapshot.docs[0];
      await updateDoc(couponDoc.ref, {
        status: 'VALIDATED',
        validatedAt: new Date().toISOString()
      });
      return true;
    } catch (e) {
      console.error('Error validating coupon', e);
      return false;
    }
  }

  private generateRandomCode(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }
}
