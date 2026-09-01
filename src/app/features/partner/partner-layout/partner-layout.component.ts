import { Component, inject, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-partner-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './partner-layout.component.html',
  styleUrl: './partner-layout.component.scss'
})
export class PartnerLayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private eRef = inject(ElementRef);

  user = this.authService.currentUser;
  isMenuOpen = signal(false);

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen.update(val => !val);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isMenuOpen.set(false);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
