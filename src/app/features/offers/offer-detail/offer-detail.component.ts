import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../layout/header/header.component';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { BenefitsService } from '../../../core/services/benefits.service';
import { PartnersService } from '../../../core/services/partners.service';
import { AuthService } from '../../../core/auth/auth.service';
import { CouponsService } from '../../../core/services/coupons.service';
import { Benefit } from '../../../core/models/benefit.model';
import { CommercialPartner } from '../../../core/models/partner.model';
import * as L from 'leaflet';

@Component({
  selector: 'app-offer-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private benefitsService = inject(BenefitsService);
  private partnersService = inject(PartnersService);
  private authService = inject(AuthService);
  private couponsService = inject(CouponsService);
  private cdr = inject(ChangeDetectorRef);

  benefit = signal<Benefit | null>(null);
  partner = computed(() => {
    const b = this.benefit();
    if (!b) return null;
    return this.partnersService.partners().find(p => p.id === b.commercialPartnerId) || null;
  });
  
  loading = signal(true);
  imageLoaded = signal(false);
  generatedCouponCode = signal<string | null>(null);

  private map: L.Map | null = null;
  private marker: L.Marker | null = null;
  private mapInitialized = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loading.set(true);
        this.imageLoaded.set(false);
        // Espera os dados estarem disponíveis nos signals
        setTimeout(() => {
          const b = this.benefitsService.benefits().find(x => x.id === id);
          this.benefit.set(b || null);
          this.loading.set(false);
          this.cdr.markForCheck();
          if (b) {
            setTimeout(() => this.updateMap(), 100);
          }
        }, 500);
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.benefit()) {
      this.initMap();
    }
  }

  ngOnDestroy(): void {
    this.destroyMap();
  }

  private initMap(): void {
    const p = this.partner();
    if (!p || !p.location || this.mapInitialized) return;

    const mapEl = document.getElementById('offer-map');
    if (!mapEl) return;

    this.destroyMap();

    const iconDefault = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    this.map = L.map('offer-map', {
      center: [p.location.latitude, p.location.longitude],
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 19
    }).addTo(this.map);

    this.marker = L.marker([p.location.latitude, p.location.longitude], { icon: iconDefault })
      .addTo(this.map)
      .bindPopup(`<strong>${p.tradeName}</strong><br>${p.location.address}`)
      .openPopup();

    this.mapInitialized = true;
  }

  private updateMap(): void {
    const p = this.partner();
    if (!p || !p.location) return;

    if (!this.mapInitialized) {
      this.initMap();
      return;
    }

    if (this.map && this.marker) {
      const latlng: L.LatLngExpression = [p.location.latitude, p.location.longitude];
      this.map.setView(latlng, 15);
      this.marker.setLatLng(latlng);
      this.marker.setPopupContent(`<strong>${p.tradeName}</strong><br>${p.location.address}`);
      this.map.invalidateSize();
    }
  }

  private destroyMap(): void {
    if (this.map) {
      this.map.remove();
      this.map = null;
      this.marker = null;
      this.mapInitialized = false;
    }
  }

  onImageLoad(): void {
    this.imageLoaded.set(true);
    this.cdr.markForCheck();
  }

  openDirections(): void {
    const p = this.partner();
    if (!p || !p.location) return;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${p.location.latitude},${p.location.longitude}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  async onResgatar() {
    const user = this.authService.currentUser();
    if (!user) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    
    const b = this.benefit();
    const p = this.partner();
    if (!b || !p) return;

    // Bloqueia acesso a benefícios exclusivos de outras empresas
    // (aplica-se a EMPLOYEE e COMPANY_ADMIN — SUPER_ADMIN e ADMIN têm acesso total)
    const isRestrictedRole = user.role === 'EMPLOYEE' || user.role === 'COMPANY_ADMIN';
    if (isRestrictedRole && b.associatedCompanyId !== 'ALL' && b.associatedCompanyId !== user.companyId) {
      alert('Este benefício é exclusivo para funcionários de outra empresa associada.');
      return;
    }

    if (b.executionType === 'EXTERNAL_REDIRECT' || b.executionType === 'PAYMENT_LINK') {
      window.open(p.externalLink || '#', '_blank', 'noopener,noreferrer');
    } else {
      const fixedCode = b.couponType === 'FIXED' ? b.fixedCouponCode : undefined;
      const coupon = await this.couponsService.generateCoupon({
        employeeId: user.id,
        employeeName: user.name,
        companyName: user.companyId,
        benefitId: b.id,
        benefitTitle: b.title,
        partnerId: p.id,
        partnerName: p.tradeName
      }, fixedCode);
      if (coupon) {
        this.generatedCouponCode.set(coupon.code);
      } else {
        alert('Erro ao gerar cupom. Tente novamente mais tarde.');
      }
    }
  }

  closeCouponModal(): void {
    this.generatedCouponCode.set(null);
  }

  openPartnerLink(): void {
    const link = this.partner()?.externalLink;
    if (link) window.open(link, '_blank', 'noopener,noreferrer');
  }

  openPartnerWhatsapp(): void {
    const p = this.partner();
    if (!p) return;
    
    // Tenta pegar o whatsapp, se não tiver, usa o contact (telefone)
    const phone = p.whatsapp || p.contact;
    if (phone) {
      const cleanNum = phone.replace(/\D/g, '');
      const text = `Olá! Gostaria de utilizar meu benefício do Clube. Meu cupom de resgate é: ${this.generatedCouponCode()}`;
      window.open(`https://wa.me/55${cleanNum}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    }
  }
}
