// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import CustomImage from "./CustomImage";

import { mockBillingCard, mockSalaryData } from "@/mocks/billing";

const meta = {
  title: "Components/CustomImage",
  tags: ["autodocs"],
  component: CustomImage,
  argTypes: {
    className: {
      description: "Class of custom image",
    },
    src: {
      description: "Source of custom image",
    },
    width: {
      description: "Width of custom image",
    },
    height: {
      description: "Height of custom image",
    },
    alt: {
      description: "Alt text of custom image",
    },
    priority: {
      description: "Fetch priority of custom image",
    },
  },
} as Meta<typeof CustomImage>;

export default meta;

type Story = StoryObj<typeof meta>;

const imgSrc =
  "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/product-details-1.f79d1e89.jpg";

export const Default: Story = {
  render: () => (
    <CustomImage
      className="rounded-md"
      src={imgSrc}
      width={400}
      height={300}
      alt="Product Image"
      priority
    />
  ),
};
