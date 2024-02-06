import type { Meta, StoryObj } from "@storybook/react";

// Components
import StarRating from "./StarRating";

const meta = {
  title: "Components/StarRating",
  component: StarRating,
  tags: ["autodocs"],
} as Meta<typeof StarRating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StarRatingDefault: Story = {
  render: () => <StarRating />,
};

export const FullStarRating: Story = {
  render: () => <StarRating isFullRaring={true} />,
};

export const NumberStarRating: Story = {
  render: () => <StarRating numberStar={3} />,
};
