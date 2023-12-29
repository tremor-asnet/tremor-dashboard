import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "@tremor/react";
import FormInput from "./FormInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const PrimaryDefault: Story = {
  render: () => (
    <FormInput
      variant="primary"
      type="text"
      id="primary_default"
      placeholder=""
      label="User Name"
    />
  ),
};

export const SecondaryDefault: Story = {
  render: () => (
    <FormInput
      variant="secondary"
      type="text"
      id="secondary_default"
      placeholder=""
      label="User Name"
    />
  ),
};

export const PrimaryError: Story = {
  render: () => (
    <FormInput
      variant="primary"
      type="text"
      id="primary_error"
      aria-describedby="primary_error_help"
      placeholder=""
      label="Email"
      htmlFor="primary_error"
      errorMessage="Oh, snoop! Some error messages."
    />
  ),
};

export const SecondaryError: Story = {
  render: () => (
    <FormInput
      variant="secondary"
      type="text"
      id="secondary_error"
      aria-describedby="secondary_error_help"
      placeholder=""
      label="Email"
      htmlFor="primary_error"
      errorMessage="Oh, snoop! Some error messages."
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormInput
      disabled
      variant="primary"
      type="text"
      id="primary_default"
      placeholder=""
      label="User Name"
    />
  ),
};
