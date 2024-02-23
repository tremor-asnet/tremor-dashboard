import type { Meta, StoryObj } from "@storybook/react";

// Components
import StepperLastItem from "./StepperLastItem";

const meta = {
  title: "Components/common/StepperLastItem",
  component: StepperLastItem,
  tags: ["autodocs"],
  argTypes: {
    index: { description: "Index of step. (4)" },
    content: { description: "Content of step 4. (Pricing)" },
    isFirstStep: { description: "Check if it is last step." },
  },
} as Meta<typeof StepperLastItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StepperLastItemDefault: Story = {
  render: () => (
    <ul className="grid grid-cols-4 pt-6 pb-4 bg-zinc-700 dark:stepper-dark-bg rounded-lg new-product-stepper">
      <li>
        <StepperLastItem
          isLastStep={true}
          step={{ index: 4, content: "Pricing" }}
        />
      </li>
    </ul>
  ),
};
