import type { Meta, StoryObj } from "@storybook/react";

// Components
import SocialForm from "./SocialForm";

const meta = {
  title: "Components/Products/Forms/SocialForm",
  component: SocialForm,
  tags: ["autodocs"],
  argTypes: {
    shopifyUrl: {
      description: "This is shopifyUrl type string",
    },
    facebookUrl: {
      description: "This is facebookUrl type string",
    },
    instagramUrl: {
      description: "This is instagramUrl type string",
    },
    onBack: {
      description: "This is func to back step prev",
    },
    onSubmit: {
      description: "This is func to submit data",
    },
  },
} as Meta<typeof SocialForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shopifyUrl: "https://shoppify-url.com",
    facebookUrl: "https://facebook-url.com",
    instagramUrl: "https://instagra-url.com",
    onBack: () => {},
    onSubmit: () => {},
  },
};
