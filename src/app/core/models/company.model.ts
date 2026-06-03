export interface AssociatedCompany {
  id: string;
  name: string;
  cnpj: string;
  plan: string; // Ex: 'Bronze', 'Silver', 'Gold', 'Platinum'
  active: boolean;
  createdAt?: any;
}
