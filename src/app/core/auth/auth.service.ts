import { Injectable, signal, computed, inject } from '@angular/core';
import { Employee, UserRole } from '../models/employee.model';
import { FirebaseService } from '../services/firebase.service';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private firebaseService = inject(FirebaseService);
  
  // Current logged in user State
  private currentUserSignal = signal<Employee | null>(null);

  // Expose read-only signals
  public readonly currentUser = computed(() => this.currentUserSignal());
  public readonly isAuthenticated = computed(() => this.currentUserSignal() !== null);
  public readonly userRole = computed(() => this.currentUserSignal()?.role || null);

  constructor() {
    this.initAuthListener();
  }

  private initAuthListener() {
    if (!this.firebaseService.isEnabled) {
      this.loadLocalSession();
      return;
    }
    
    // Listen to Firebase Auth state
    onAuthStateChanged(this.firebaseService.auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(this.firebaseService.db, 'employees', user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const emp = docSnap.data() as Employee;
            this.currentUserSignal.set(emp);
            localStorage.setItem('presscard_session', JSON.stringify(emp));
          } else {
            // Fallback de segurança para o dono se o documento não existir
            if (user.email === 'magnum.oliveira.ltda@gmail.com') {
              const emp: Employee = {
                id: user.uid,
                name: 'Magnum de Oliveira',
                email: user.email,
                role: 'SUPER_ADMIN',
                companyId: 'presscard-corp',
                status: 'ACTIVE'
              };
              this.currentUserSignal.set(emp);
              localStorage.setItem('presscard_session', JSON.stringify(emp));
            } else {
              console.error('Perfil não encontrado no Firestore para este usuário.');
              this.logout();
            }
          }
        } catch (e) {
          console.error('Erro ao buscar perfil do Firebase:', e);
          this.logout();
        }
      } else {
        this.currentUserSignal.set(null);
        localStorage.removeItem('presscard_session');
      }
    });
  }

  public async login(email: string, password: string): Promise<boolean> {
    if (!this.firebaseService.isEnabled) {
      // Fallback for local development if Firebase is off
      if (email === 'magnum.oliveira.ltda@gmail.com') {
        const emp: Employee = {
          id: 'local-dev-id',
          name: 'Magnum de Oliveira (Local)',
          email: email,
          role: 'SUPER_ADMIN',
          companyId: 'presscard-corp',
          status: 'ACTIVE'
        };
        this.currentUserSignal.set(emp);
        localStorage.setItem('presscard_session', JSON.stringify(emp));
        return true;
      }
      return false;
    }

    try {
      await signInWithEmailAndPassword(this.firebaseService.auth, email, password);
      // Wait a bit so the onAuthStateChanged has time to fetch the Firestore document
      await new Promise(resolve => setTimeout(resolve, 1500));
      return !!this.currentUser();
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  public async recoverPassword(email: string): Promise<boolean> {
    if (!this.firebaseService.isEnabled) return false;
    try {
      await sendPasswordResetEmail(this.firebaseService.auth, email);
      return true;
    } catch (error) {
      console.error('Recovery error:', error);
      return false;
    }
  }

  public logout(): void {
    if (this.firebaseService.isEnabled) {
      signOut(this.firebaseService.auth);
    }
    this.currentUserSignal.set(null);
    localStorage.removeItem('presscard_session');
  }

  public hasRole(roles: UserRole[]): boolean {
    const current = this.currentUser();
    return current ? roles.includes(current.role) : false;
  }

  private loadLocalSession(): void {
    const sessionStr = localStorage.getItem('presscard_session');
    if (sessionStr) {
      try {
        const user: Employee = JSON.parse(sessionStr);
        this.currentUserSignal.set(user);
      } catch (e) {
        localStorage.removeItem('presscard_session');
      }
    }
  }
}
