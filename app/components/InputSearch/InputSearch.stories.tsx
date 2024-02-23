import type { Meta, StoryObj } from "@storybook/react";

// Components
import InputSearch from "./InputSearch";

const meta = {
  title: "Components/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
  argTypes: {
    id: { description: "Id of input search" },
    className: { description: "Class name of input search" },
    onChange: { description: "Handle input search" },
    placeholder: { description: "Placeholder input search" },
  },
} as Meta<typeof InputSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputSearchDefault: Story = {
  render: () => (
    <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
      <InputSearch />
    </div>
  ),
};
