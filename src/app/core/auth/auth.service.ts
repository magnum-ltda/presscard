import { Injectable, signal, computed } from '@angular/core';
import { Employee, UserRole } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Mock users list for quick selector login in MVP
  public readonly mockUsers: Employee[] = [
    {
      id: 'usr-superadmin',
      name: 'Magnum de Oliveira',
      email: 'superadmin@presscard.com',
      role: 'SUPER_ADMIN',
      companyId: 'presscard-corp',
      status: 'ACTIVE'
    },
    {
      id: 'usr-admin',
      name: 'Clara Silva',
      email: 'admin@presscard.com',
      role: 'ADMIN',
      companyId: 'presscard-corp',
      status: 'ACTIVE'
    },
    {
      id: 'usr-financial',
      name: 'Bruno Costa',
      email: 'financial@presscard.com',
      role: 'FINANCIAL',
      companyId: 'presscard-corp',
      status: 'ACTIVE'
    },
    {
      id: 'usr-support',
      name: 'Daniel Santos',
      email: 'support@presscard.com',
      role: 'SUPPORT',
      companyId: 'presscard-corp',
      status: 'ACTIVE'
    },
    {
      id: 'usr-employee-1',
      name: 'João Silva (Funcionário)',
      email: 'joao.silva@acme.com',
      role: 'EMPLOYEE',
      companyId: 'company-acme',
      status: 'ACTIVE'
    },
    {
      id: 'usr-partner-1',
      name: 'Gerente Resort Paradiso',
      email: 'gerente@paradiso.com',
      role: 'PARTNER',
      companyId: 'none',
      partnerId: 'partner-resort-paradiso',
      status: 'ACTIVE'
    }
  ];

  // Current logged in user State
  private currentUserSignal = signal<Employee | null>(null);

  // Expose read-only signals
  public readonly currentUser = computed(() => this.currentUserSignal());
  public readonly isAuthenticated = computed(() => this.currentUserSignal() !== null);
  public readonly userRole = computed(() => this.currentUserSignal()?.role || null);

  constructor() {
    this.loadSession();
  }

  /**
   * Log in with a specific role / mock user
   */
  public loginWithMockUser(email: string): boolean {
    const user = this.mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (user) {
      this.currentUserSignal.set(user);
      localStorage.setItem('presscard_session', JSON.stringify(user));
      return true;
    }
    return false;
  }

  /**
   * Logout and clear session
   */
  public logout(): void {
    this.currentUserSignal.set(null);
    localStorage.removeItem('presscard_session');
  }

  /**
   * Check if user has specific roles
   */
  public hasRole(roles: UserRole[]): boolean {
    const current = this.currentUser();
    return current ? roles.includes(current.role) : false;
  }

  /**
   * Load session from localStorage on startup
   */
  private loadSession(): void {
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
