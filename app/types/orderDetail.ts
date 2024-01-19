export interface TrackOrderProps {
  id: string;
  generateOrderAt: string;
  deliveredAt: string;
  transmitedToCourierAt: string;
  generateOrderId: string;
}

export interface BillingInfoProps {
  owner_name: string;
  company_name: string;
  email: string;
  vat: string;
}
