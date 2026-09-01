import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../layout/header/header.component';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { CouponsService } from '../../../core/services/coupons.service';
import { AuthService } from '../../../core/auth/auth.service';
import { PartnersService } from '../../../core/services/partners.service';
import { CommercialPartner } from '../../../core/models/partner.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-my-coupons',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MatIconModule],
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.scss']
})
export class MyCouponsComponent implements OnInit {
  private couponsService = inject(CouponsService);
  private authService = inject(AuthService);
  private partnersService = inject(PartnersService);

  coupons = this.couponsService.coupons;
  partners = this.partnersService.partners;

  ngOnInit() {
    const user = this.authService.currentUser();
    if (user) {
      this.couponsService.loadCouponsForEmployee(user.id);
    }
  }

  getPartnerData(partnerId: string): CommercialPartner | undefined {
    return this.partners().find(p => p.id === partnerId);
  }

  openPartnerWhatsapp(partnerId: string, couponCode: string): void {
    const p = this.getPartnerData(partnerId);
    if (!p) return;
    
    const phone = p.whatsapp || p.contact;
    if (phone) {
      const cleanNum = phone.replace(/\D/g, '');
      const text = `Olá! Gostaria de utilizar meu benefício do Clube. Meu cupom de resgate é: ${couponCode}`;
      window.open(`https://wa.me/55${cleanNum}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    }
  }

  openPartnerLink(partnerId: string): void {
    const p = this.getPartnerData(partnerId);
    if (p && p.externalLink) {
      window.open(p.externalLink, '_blank', 'noopener,noreferrer');
    }
  }
}
