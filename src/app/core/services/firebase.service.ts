import { Injectable } from '@angular/core';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp | null = null;
  private dbInstance: Firestore | null = null;
  private isEnabledFlag = false;

  constructor() {
    this.initFirebase();
  }

  private initFirebase() {
    const config: any = environment.firebase;
    if (config && config.apiKey && config.projectId) {
      try {
        this.app = getApps().length === 0 ? initializeApp(config) : getApp();
        this.dbInstance = getFirestore(this.app);
        this.isEnabledFlag = true;
        console.log('Firebase SDK initialized successfully on project:', config.projectId);
      } catch (e) {
        console.error('Failed to initialize Firebase, using LocalStorage fallback:', e);
        this.isEnabledFlag = false;
      }
    } else {
      console.warn('Firebase config is empty. Active fallback: LocalStorage.');
      this.isEnabledFlag = false;
    }
  }

  public get isEnabled(): boolean {
    return this.isEnabledFlag;
  }

  public get db(): Firestore {
    if (!this.dbInstance) {
      throw new Error('Firestore not initialized.');
    }
    return this.dbInstance;
  }
}
