import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { OffersComponent } from './components/offers/offers.component';
import { CtaComponent } from './components/cta/cta.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    BenefitsComponent,
    HowItWorksComponent,
    OffersComponent,
    CtaComponent,
    FooterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent { }
