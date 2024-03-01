import type { Meta, StoryObj } from "@storybook/react";

// Components
import StarRating from "./StarRating";

const meta = {
  title: "Components/StarRating",
  component: StarRating,
  tags: ["autodocs"],
  argTypes: {
    numberStar: { description: "Number star of star rating" },
    isFullRaring: { description: "Star rating is full or not" },
    size: { description: "Size of star rating" },
  },
} as Meta<typeof StarRating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StarRatingDefault: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <StarRating />
    </div>
  ),
};

export const FullStarRating: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <StarRating isFullRaring={true} />
    </div>
  ),
};

export const NumberStarRating: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <StarRating numberStar={3} />
    </div>
  ),
};
