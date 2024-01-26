import type { Meta, StoryObj } from "@storybook/react";

// Components
import Socials from "./Socials";

const meta = {
  title: "Components/Socials",
  component: Socials,
  tags: ["autodocs"],
} as Meta<typeof Socials>;

export default meta;

type Story = StoryObj<typeof meta>;

const propsDefault = {
  handleSocials: () => {},
};

export const Primary: Story = {
  render: () => <Socials {...propsDefault} />,
};
