import type { Meta, StoryObj } from "@storybook/react";

// Components
import StepperFirstItem from "./StepperFirstItem";

const meta = {
  title: "Components/common/StepperFirstItem",
  component: StepperFirstItem,
  tags: ["autodocs"],
} as Meta<typeof StepperFirstItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StepperFirstItemDefault: Story = {
  render: () => (
    <ul className="grid grid-cols-4 pt-6 pb-4 bg-zinc-700 dark:stepper-dark-bg rounded-lg new-product-stepper">
      <li>
        <StepperFirstItem
          isFirstStep={true}
          step={{ index: 1, content: "Product Info" }}
        />
      </li>
    </ul>
  ),
};