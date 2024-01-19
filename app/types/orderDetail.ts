import { ReactNode } from "react";

export interface StepOrderProps {
  iconInfo: ReactNode;
  titleInfo: string;
  descriptionInfo?: string;
  className?: string;
  backgroundColor?: string;
}

export interface BillingInfoProps {
  owner_name: string;
  company_name: string;
  email: string;
  vat: string;
}
