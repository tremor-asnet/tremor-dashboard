import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
    "@storybook/addon-knobs",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  typescript: {
    reactDocgen: false,
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    if (!config.resolve) {
      return config;
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };

    return config;
  },
};
export default config;
