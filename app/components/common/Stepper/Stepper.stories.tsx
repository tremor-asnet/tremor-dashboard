// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Stepper from "./Stepper";

// Types
import { Step } from "@/types";

const meta = {
  title: "Components/common/Stepper",
  tags: ["autodocs"],
  component: Stepper,
} as Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

const steps: Step[] = [
  { index: 1, content: "Product Info" },
  { index: 2, content: "Media" },
  { index: 3, content: "Social" },
  { index: 4, content: "Pricing" },
];

export const StepperDefault: Story = {
  args: {
    steps: steps,
    currentStep: 2,
    total: steps.length,
  },
};
