// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import StepperBodyItem from "./StepperBodyItem";

// Types
import { Step } from "@/types";

const meta = {
  title: "Components/common/StepperBodyItem",
  tags: ["autodocs"],
  component: StepperBodyItem,
} as Meta<typeof StepperBodyItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StepperBodyItemDefault: Story = {
  render: () => (
    <ul className="grid grid-cols-4 pt-6 pb-4 bg-zinc-700 dark:stepper-dark-bg rounded-lg new-product-stepper">
      <li>
        <StepperBodyItem
          step={{ index: 2, content: "Media" }}
          currentStep={2}
        />
      </li>
    </ul>
  ),
};
