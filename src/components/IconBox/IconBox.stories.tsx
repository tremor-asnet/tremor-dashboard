import type { Meta, StoryObj } from "@storybook/react";
import { MdLanguage } from "react-icons/md";

// Components
import IconBox from "./IconBox";

const meta = {
  title: "Components/ IconBox",
  component: IconBox,
  tags: ["autodocs"],
} as Meta<typeof IconBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconBoxDefault: Story = {
  render: () => <IconBox />,
};

export const IconBoxSizeProps: Story = {
  render: () => (
    <IconBox
      icon={<MdLanguage color="white" size="24px" />}
      sizeBox={{ width: "20", height: "20" }}
    />
  ),
};

export const IconBoxBgProps: Story = {
  render: () => (
    <IconBox
      icon={<MdLanguage color="white" size="24px" />}
      bgBox="bg-[linear-gradient(195deg,_#66BB6A,_#43A047)]"
    />
  ),
};
