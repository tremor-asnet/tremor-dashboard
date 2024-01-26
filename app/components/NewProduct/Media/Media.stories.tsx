import type { Meta, StoryObj } from "@storybook/react";

// Components
import Media from "./Media";

const propsDefault = {
  name: "Gold Glasses",
  url: "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/product-12.0b55635d.jpg",
  path: "product-12.0b55635d.jpg",
  size: "71.4",
  isUploaded: false,
};

const meta = {
  title: "Components/Media",
  component: Media,
  tags: ["autodocs"],
} as Meta<typeof Media>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Media {...propsDefault} />,
};

export const Secondary: Story = {
  render: () => <Media {...propsDefault} isUploaded={true} />,
};
