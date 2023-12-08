import type { Meta, StoryObj } from "@storybook/react";

// Components
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";

// Constants
import { ROUTES } from "../constants";

const meta = {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
  tags: ["autodocs"],
} as Meta<typeof BreadCrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Analytics: Story = {
  render: () => (
    <BreadCrumb
      links={[
        {
          id: "1",
          name: "dashboards",
          url: `${ROUTES.ANALYTICS}`,
        },
      ]}
      title="analytics"
    />
  ),
};

export const Sales: Story = {
  render: () => (
    <BreadCrumb
      links={[
        {
          id: "2",
          name: "dashboards",
          url: `${ROUTES.ANALYTICS}`,
        },
      ]}
      title="sales"
    />
  ),
};

export const Profile: Story = {
  render: () => (
    <BreadCrumb
      links={[
        {
          id: "3",
          name: "pages",
          url: `${ROUTES.PROFILE}`,
        },
        {
          id: "4",
          name: "profile",
          url: `${ROUTES.PROFILE}`,
        },
      ]}
      title="profile overview"
    />
  ),
};

export const Projects: Story = {
  render: () => (
    <BreadCrumb
      links={[
        {
          id: "5",
          name: "pages",
          url: `${ROUTES.PROFILE}`,
        },
        {
          id: "6",
          name: "profile",
          url: `${ROUTES.PROFILE}`,
        },
      ]}
      title="all projects"
    />
  ),
};

export const Settings: Story = {
  render: () => (
    <BreadCrumb
      links={[
        {
          id: "7",
          name: "account",
          url: `${ROUTES.SETTING}`,
        },
        {
          id: "8",
          name: "settings",
          url: `${ROUTES.SETTING}`,
        },
      ]}
      title="settings"
    />
  ),
};
