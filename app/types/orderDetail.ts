import { ReactNode } from "react";

export interface StepOrderProps {
  iconInfo: ReactNode;
  titleInfo: string;
  descriptionInfo?: string;
  className?: string;
  backgroundColor?: string;
}
