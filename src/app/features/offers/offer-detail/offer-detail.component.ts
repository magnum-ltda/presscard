import {
  Component, OnInit, OnDestroy, AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef, signal
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { switchMap, tap, debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { OffersService } from '../../../core/services/offers.service';
import { Offer } from '../../../core/models/offer.model';
import * as L from 'leaflet';

@Component({
  selector: 'app-offer-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  offer = signal<Offer | null>(null);
  relatedOffers = signal<Offer[]>([]);
  searchQuery = signal('');
  loading = signal(true);
  imageLoaded = signal(false);

  private map: L.Map | null = null;
  private marker: L.Marker | null = null;
  private destroy$ = new Subject<void>();
  private searchSubject = new Subject<string>();
  private mapInitialized = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offersService: OffersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      takeUntil(this.destroy$),
      switchMap(params => {
        const id = Number(params.get('id'));
        this.loading.set(true);
        this.imageLoaded.set(false);
        return this.offersService.getOfferById(id);
      })
    ).subscribe(offer => {
      this.offer.set(offer ?? null);
      this.loading.set(false);
      this.cdr.markForCheck();
      if (offer) {
        this.loadRelated();
        setTimeout(() => this.updateMap(), 100);
      }
    });

    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$),
      switchMap(q => this.offersService.searchOffers(q))
    ).subscribe(offers => {
      const currentId = this.offer()?.id;
      this.relatedOffers.set(offers.filter(o => o.id !== currentId));
      this.cdr.markForCheck();
    });
  }

  ngAfterViewInit(): void {
    if (this.offer()) {
      this.initMap();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroyMap();
  }

  private loadRelated(): void {
    this.offersService.getOffers().subscribe(offers => {
      const currentId = this.offer()?.id;
      this.relatedOffers.set(offers.filter(o => o.id !== currentId));
      this.cdr.markForCheck();
    });
  }

  private initMap(): void {
    const offer = this.offer();
    if (!offer || this.mapInitialized) return;

    const mapEl = document.getElementById('offer-map');
    if (!mapEl) return;

    this.destroyMap();

    // Fix Leaflet default icon
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
      center: [offer.latitude, offer.longitude],
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(this.map);

    this.marker = L.marker([offer.latitude, offer.longitude], { icon: iconDefault })
      .addTo(this.map)
      .bindPopup(`<strong>${offer.title}</strong><br>${offer.address}`)
      .openPopup();

    this.mapInitialized = true;
  }

  private updateMap(): void {
    const offer = this.offer();
    if (!offer) return;

    if (!this.mapInitialized) {
      this.initMap();
      return;
    }

    if (this.map && this.marker) {
      const latlng: L.LatLngExpression = [offer.latitude, offer.longitude];
      this.map.setView(latlng, 15);
      this.marker.setLatLng(latlng);
      this.marker.setPopupContent(`<strong>${offer.title}</strong><br>${offer.address}`);
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

  onSearchChange(value: string): void {
    this.searchQuery.set(value);
    this.searchSubject.next(value);
  }

  openExternalUrl(): void {
    const url = this.offer()?.externalUrl;
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  }

  openDirections(): void {
    const offer = this.offer();
    if (!offer) return;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${offer.latitude},${offer.longitude}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  navigateToOffer(id: number): void {
    this.mapInitialized = false;
    this.destroyMap();
    this.router.navigate(['/ofertas', id]);
  }

  getActionLabel(): string {
    return this.offer()?.type === 'hotel' ? 'Reservar Hotel' : 'Alugar Carro';
  }

  getActionIcon(): string {
    return this.offer()?.type === 'hotel' ? '🏨' : '🚗';
  }

  getBadgeLabel(): string {
    return this.offer()?.type === 'hotel' ? 'Hotel' : 'Aluguel de Carro';
  }

  onImageLoad(): void {
    this.imageLoaded.set(true);
    this.cdr.markForCheck();
  }
}
