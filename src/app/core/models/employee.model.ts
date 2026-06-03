export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'FINANCIAL' | 'SUPPORT' | 'EMPLOYEE' | 'PARTNER';

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  companyId: string; // Vínculo com a Empresa Associada
  partnerId?: string; // Vínculo opcional se o usuário gerencia um parceiro comercial
  status: 'ACTIVE' | 'INACTIVE';
  createdAt?: any;
}
