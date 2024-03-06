import type { Meta, StoryObj } from "@storybook/react";

// Components
import ImagePreview from "./ImagePreview";

const meta = {
  title: "Components/Products/ImagePreview",
  component: ImagePreview,
  tags: ["autodocs"],
  argTypes: {
    filename: {
      description: "This is name file an image with type is string",
    },
    url: {
      description: "This is link of an image with type is string",
    },
    width: {
      description: "This is width of an image with type is number",
    },
    height: {
      description: "This is height of an image with type is number",
    },
    onRemove: {
      description: "This is func to handle remove an image",
    },
  },
} as Meta<typeof ImagePreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  args: {
    filename: "0daa97f4b0dbe9a9686984982977da86-1.png",
    url: "https://i.ibb.co/2WyPpQQ/0daa97f4b0dbe9a9686984982977da86-1.png",
    width: 300,
    height: 200,
    onRemove: () => {},
  },
};
