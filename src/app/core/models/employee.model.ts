export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'EMPLOYEE' | 'PARTNER' | 'COMPANY_ADMIN';

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  companyId: string; // Vínculo com a Empresa Associada
  partnerId?: string; // Vínculo opcional se o usuário gerencia um parceiro comercial
  whatsapp?: string; // Para contato com o funcionário
  status: 'ACTIVE' | 'INACTIVE';
  createdAt?: any;
}
