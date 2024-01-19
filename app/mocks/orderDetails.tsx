import { FaBell } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { BillingInfoProps, StepOrderProps } from "@/types";

export const mockInvoiceHeader = {
  id: 241342,
  createdAt: "2024-01-11T01:48:52Z",
  orderCode: "KF332",
};

export const mockTrackOrder: StepOrderProps[] = [
  {
    iconInfo: <FaBell />,
    titleInfo: "Order received",
  },
  {
    iconInfo: <MdInventory />,
    titleInfo: "Generate order id",
  },
  {
    iconInfo: <IoCart />,
    titleInfo: "Order transmited to courier",
  },
];

export const mockBillingInfo: BillingInfoProps = {
  owner_name: "Oliver Liam",
  company_name: "Viking Burrito",
  email: "oliver@burrito.com",
  vat: "FRB1235476",
};
