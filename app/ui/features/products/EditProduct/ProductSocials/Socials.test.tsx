import { render } from "@testing-library/react";

// Constants
import { MESSAGES_ERROR } from "@/constants";

// Components
import Socials from "./Socials";
import { useForm } from "react-hook-form";

// Types
import { NewSocial } from "@/types";

const mockControllerNonError = (name: string, rule: Object) => ({
  field: {
    name: name,
    rules: rule,
  },
  formState: { errors: {} },
});

// Mock react-hook-form module
jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  // Mock the useFormContext hook
  useFormContext: jest.fn(() => ({
    formState: {
      errors: {},
    },
  })),
  // Mock the Controller component
  Controller: (props: any) => {
    return props.render(mockControllerNonError(props.name, props.rule));
  },
}));

describe("Socials Component", () => {
  it("Should match snapshot", () => {
    const { container } = render(<Socials />);
    expect(container).toMatchSnapshot();
  });

  it("Should show error message when all field has invalid URL", () => {
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      return props.render({
        formState: {
          field: {
            name: props.name,
            rules: props.rule,
          },
          errors: {
            shopifyUrl: { message: MESSAGES_ERROR.INVALID_URL },
            facebookUrl: { message: MESSAGES_ERROR.INVALID_URL },
            instagramUrl: { message: MESSAGES_ERROR.INVALID_URL },
          },
        },
      });
    };

    const { getAllByText } = render(<Socials />);
    expect(getAllByText(MESSAGES_ERROR.INVALID_URL)).toHaveLength(3);
  });

  it("Should not show error messages for valid Shopify url", () => {
    const validShopifyURL = "https://valid.shopify.url";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "shopifyUrl")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [validShopifyURL],
          },
          formState: {
            errors: {},
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, queryByText } = render(<Socials />);
    expect(getAllByDisplayValue(validShopifyURL)).toHaveLength(1);
    expect(queryByText(MESSAGES_ERROR.INVALID_URL)).toBeNull();
  });

  it("Should not show error messages for valid Facebook url", () => {
    const validFacebookURL = "https://valid.facebook.url";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "facebookUrl")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [validFacebookURL],
          },
          formState: {
            errors: {},
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, queryByText } = render(<Socials />);
    expect(getAllByDisplayValue(validFacebookURL)).toHaveLength(1);
    expect(queryByText(MESSAGES_ERROR.INVALID_URL)).toBeNull();
  });

  it("Should not show error messages for valid Instagram url", () => {
    const validInstagramURL = "https://valid.instagram.url";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "instagramUrl")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [validInstagramURL],
          },
          formState: {
            errors: {},
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, queryByText } = render(<Socials />);
    expect(getAllByDisplayValue(validInstagramURL)).toHaveLength(1);
    expect(queryByText(MESSAGES_ERROR.INVALID_URL)).toBeNull();
  });

  it("Should show error messages for invalid Shopify url", () => {
    const invalidShopifyURL = "invalid.shopify.url";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "shopifyUrl")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [invalidShopifyURL],
          },
          formState: {
            errors: {
              shopifyUrl: { message: MESSAGES_ERROR.INVALID_URL },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<Socials />);
    const inputShopifyUrl = getAllByDisplayValue(invalidShopifyURL);
    expect(inputShopifyUrl).toHaveLength(1);
    expect(getAllByText(MESSAGES_ERROR.INVALID_URL)).toHaveLength(1);

    const parents = inputShopifyUrl.map(input => input.parentElement);
    const errorMessage = parents.map(parent => parent?.querySelector("p"));

    errorMessage.forEach(p => {
      expect(p?.textContent).toBe(MESSAGES_ERROR.INVALID_URL);
    });
  });

  it("Should show error messages for invalid Facebook url", () => {
    const invalidFacebookURL = "invalid.facebook.url";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "facebookUrl")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [invalidFacebookURL],
          },
          formState: {
            errors: {
              facebookUrl: { message: MESSAGES_ERROR.INVALID_URL },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<Socials />);
    const inputShopifyUrl = getAllByDisplayValue(invalidFacebookURL);
    expect(inputShopifyUrl).toHaveLength(1);
    expect(getAllByText(MESSAGES_ERROR.INVALID_URL)).toHaveLength(1);

    const parents = inputShopifyUrl.map(input => input.parentElement);
    const errorMessage = parents.map(parent => parent?.querySelector("p"));

    errorMessage.forEach(p => {
      expect(p?.textContent).toBe(MESSAGES_ERROR.INVALID_URL);
    });
  });

  it("Should show error messages for invalid Instagram url", () => {
    const invalidInstagramURL = "invalid.instagram.url";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "instagramUrl")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [invalidInstagramURL],
          },
          formState: {
            errors: {
              instagramUrl: { message: MESSAGES_ERROR.INVALID_URL },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<Socials />);
    const inputShopifyUrl = getAllByDisplayValue(invalidInstagramURL);
    expect(inputShopifyUrl).toHaveLength(1);
    expect(getAllByText(MESSAGES_ERROR.INVALID_URL)).toHaveLength(1);

    const parents = inputShopifyUrl.map(input => input.parentElement);
    const errorMessage = parents.map(parent => parent?.querySelector("p"));

    errorMessage.forEach(p => {
      expect(p?.textContent).toBe(MESSAGES_ERROR.INVALID_URL);
    });
  });
});
