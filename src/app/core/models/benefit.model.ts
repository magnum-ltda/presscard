import { ExecutionType, PartnerCategory } from './partner.model';

export interface Benefit {
  id: string;
  title: string;
  description: string;
  category: PartnerCategory;
  associatedCompanyId: string; // ID da Empresa Associada (ou 'ALL' para todas)
  commercialPartnerId: string; // ID do Parceiro Comercial
  discountPercentage: number;  // Desconto nominal total do benefício (ex: 18%)
  employeeDiscount: number;    // Porcentagem que o funcionário recebe (ex: 15%)
  platformCommission: number;  // Porcentagem que a plataforma recebe (ex: 3%)
  rules: string;
  validity?: string;           // Data de validade (YYYY-MM-DD)
  usageLimit?: number;         // Limite de usos por funcionário (null = sem limite)
  executionType: ExecutionType;
  active: boolean;
  createdAt?: any;
}
