import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserRole } from '../models/employee.model';

export const authGuard = (allowedRoles?: UserRole[]): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isAuthenticated()) {
      router.navigate(['/auth/login']);
      return false;
    }

    const role = authService.userRole();
    if (allowedRoles && allowedRoles.length > 0) {
      if (!role || !allowedRoles.includes(role)) {
        // Redirecionamento inteligente com base nas permissões do usuário
        if (role === 'SUPER_ADMIN' || role === 'ADMIN') {
          router.navigate(['/admin']);
        } else if (role === 'PARTNER') {
          router.navigate(['/parceiro']);
        } else {
          router.navigate(['/portal']);
        }
        return false;
      }
    }

    return true;
  };
};
