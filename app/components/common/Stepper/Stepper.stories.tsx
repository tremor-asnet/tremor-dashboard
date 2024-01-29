// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Stepper from "./Stepper";

const meta = {
  title: "Components/common/Stepper",
  tags: ["autodocs"],
  component: Stepper,
} as Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

const steps = ["Product Info", "Media", "Social", "Pricing"];

export const StepperDefault: Story = {
  args: {
    steps: steps,
    currentStep: 2,
    total: steps.length,
  },
};
