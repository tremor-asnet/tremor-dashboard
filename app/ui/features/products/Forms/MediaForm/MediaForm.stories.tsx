import type { Meta, StoryObj } from "@storybook/react";

// Components
import MediaForm from "./MediaForm";

const meta = {
  title: "Components/Products/Forms/MediaForm",
  component: MediaForm,
  tags: ["autodocs"],
  argTypes: {
    onBack: {
      description: "This is func to back step prev",
    },
    onSubmit: {
      description: "This is func to submit data",
    },
  },
} as Meta<typeof MediaForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <MediaForm onBack={() => {}} onSubmit={() => {}} />,
};
