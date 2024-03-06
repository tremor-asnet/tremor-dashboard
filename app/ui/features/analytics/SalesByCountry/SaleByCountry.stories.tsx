import type { Meta, StoryObj } from "@storybook/react";

// Components
import SalesByCountry from "./SalesByCountry";

// Mock data
import { SALES_BY_COUNTRY } from "@/mocks/analytics";

const meta = {
  title: "Components/Common/SalesByCountry",
  component: SalesByCountry,
  tags: ["autodocs"],
  argTypes: {
    title: { description: "Id of sales by country" },
    isAnalytics: { description: "Class name of sales by country" },
    data: [
      {
        id: { description: "Id of sales" },
        flag: { description: "Flag image of sales by country" },
        country: { description: "Country of sales" },
        sales: { description: "Sales quantities" },
        value: { description: "Value of sales by country" },
        bounce: { description: "Bounce of sales by country" },
      },
    ],
  },
} as Meta<typeof SalesByCountry>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnalyticsSalesByCountry: Story = {
  args: {
    title: "Sales by Country",
    isAnalytics: true,
    data: SALES_BY_COUNTRY,
  },
};

export const SalesByCountryComponent: Story = {
  args: {
    title: "Sales by Country",
    isAnalytics: false,
    data: SALES_BY_COUNTRY,
  },
};
