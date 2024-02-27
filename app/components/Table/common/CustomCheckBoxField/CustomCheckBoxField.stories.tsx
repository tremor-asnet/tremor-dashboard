import type { Meta, StoryObj } from "@storybook/react";

// Components
import { CustomCheckBoxField } from ".";

// Constants
import { ROUTES } from "@/constants";

const meta = {
  title: "Components/CustomCheckBoxField",
  component: CustomCheckBoxField,
  tags: ["autodocs"],
  argTypes: {
    id: { description: "Id of checkbox field" },
    link: { description: "Link to another place by Id" },
    onChange: { description: "Handle checkbox change" },
  },
} as Meta<typeof CustomCheckBoxField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomCheckBoxFieldDefault: Story = {
  render: () => (
    <CustomCheckBoxField
      id={12356}
      link={`${ROUTES.PRODUCT_LIST}/${12356}`}
      onChange={() => {}}
    />
  ),
};
