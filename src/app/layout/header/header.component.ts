import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { WhatsappButtonComponent } from '../../shared/components/whatsapp-button/whatsapp-button.component';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule, WhatsappButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private router = inject(Router);
  public authService = inject(AuthService);
  
  user = this.authService.currentUser;

  scrollTo(id: string): void {
    if (this.router.url !== '/' && this.router.url !== '/#hero') {
      this.router.navigate(['/'], { fragment: id });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.router.navigate(['/'], { fragment: id });
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  
  goToAdmin() {
    this.router.navigate(['/admin']);
  }
  
  goToCoupons() {
    this.router.navigate(['/meus-cupons']);
  }
  
  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
