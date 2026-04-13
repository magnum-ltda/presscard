import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferCardComponent } from '../../../../shared/components/offer-card/offer-card.component';
import { OffersService, Offer } from '../../../../core/services/offers.service';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, OfferCardComponent],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers: Offer[] = [];
  private offersService = inject(OffersService);

  ngOnInit(): void {
    this.offersService.getOffers().subscribe(data => {
      this.offers = data;
    });
  }
}
