import type { Meta, StoryObj } from "@storybook/react";

// Libs
import { useForm } from "react-hook-form";

// Components
import Socials from "./Socials";

// Types
import { NewSocial } from "@/types";

const meta = {
  title: "Components/Products/AddProduct/Socials",
  component: Socials,
  tags: ["autodocs"],
  argTypes: {
    control: {
      description:
        "This is control from useForm of react-hook-form with type NewSocial(shopifyUrl: string, facebookUrl: string, instagramUrl: string)",
    },
    errors: {
      description:
        "This is errors from FieldErrors of react-hook-form with type NewSocial()",
    },
  },
} as Meta<typeof Socials>;

export default meta;

type Story = StoryObj<typeof meta>;

const SocialsFormProvider = () => {
  const {
    control,
    formState: { errors },
  } = useForm<NewSocial>({
    defaultValues: {
      shopifyUrl: "https://shoppify-url.com",
      facebookUrl: "https://facebook-url.com",
      instagramUrl: "https://instagra-url.com",
    },
  });

  return <Socials control={control} errors={errors} />;
};

export const Default: Story = {
  render: () => <SocialsFormProvider />,
};
