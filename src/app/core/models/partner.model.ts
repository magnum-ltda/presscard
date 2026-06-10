export type PartnerCategory =
  | 'HOTEL'
  | 'RESTAURANT'
  | 'CAR_RENTAL'
  | 'GYM'
  | 'PHARMACY'
  | 'CINEMA'
  | 'EDUCATION'
  | 'STORE'
  | 'SERVICES';

export interface Location {
  address: string;
  number: string;
  district: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  googleMapsLink?: string;
}

export type ExecutionType =
  | 'COUPON'
  | 'EXTERNAL_REDIRECT'
  | 'PAYMENT_LINK'
  | 'API_INTEGRATION'
  | 'MANUAL_VALIDATION';

export interface CommercialPartner {
  id: string;
  companyName: string;
  tradeName: string;
  category: PartnerCategory;
  description: string;
  imageUrl?: string; // Mantido para compatibilidade simples
  images: string[];
  contact: string;
  whatsapp?: string;
  externalLink: string;
  executionType: ExecutionType;
  commissionType: 'PERCENTAGE' | 'FIXED';
  commissionValue: number; // Valor ou porcentagem da comissão
  active: boolean;
  location: Location;
  createdAt?: any;
}
