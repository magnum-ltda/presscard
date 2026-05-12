export type OfferType = 'hotel' | 'carro';

export interface Offer {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  address: string;
  type: OfferType;
  externalUrl: string;
  discountBadge?: string;
}
