export interface Coupon {
  id: string;
  code: string;
  employeeId: string;
  employeeName: string;
  companyName: string;
  benefitId: string;
  benefitTitle: string;
  partnerId: string;
  partnerName: string;
  status: 'CREATED' | 'VALIDATED' | 'EXPIRED';
  createdAt: any;
  validatedAt?: any;
}
