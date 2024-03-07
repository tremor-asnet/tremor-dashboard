import type { Meta, StoryObj } from "@storybook/react";

// Libs
import { useForm } from "react-hook-form";

// Components
import Media from "./Media";

// Types
import { IMedia } from "@/types";

const meta = {
  title: "Components/Products/AddProduct/Media",
  component: Media,
  tags: ["autodocs"],
  argTypes: {
    control: {
      description:
        "This is control from useForm of react-hook-form with type IMedia({image: string;})",
    },
    onUpload: {
      description: "This is a hook func from useImageUploader",
    },
  },
} as Meta<typeof Media>;

export default meta;

type Story = StoryObj<typeof meta>;

const MediaFormProvider = () => {
  const { control } = useForm<IMedia>();
  return <Media control={control} onUpload={() => {}} />;
};

export const Default: Story = {
  render: () => <MediaFormProvider />,
};
