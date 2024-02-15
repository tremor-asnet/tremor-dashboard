import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProductImage from "./ProductImage";

const propsDefault = {
  name: "Minimal Bar Stool 3",
  desc: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to “Naviglio” where you can enjoy the main night life in Barcelona.`,
  image:
    "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/product-11.b01b2346.jpg",
  onRemoveImage: () => {},
  onUpload: (file: File) => {},
};

const meta = {
  title: "Components/ProductImage",
  component: ProductImage,
  tags: ["autodocs"],
} as Meta<typeof ProductImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <ProductImage {...propsDefault} />,
};
