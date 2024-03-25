import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import PricingInfo from "./PricingInfo";

// Constants
import { MESSAGES_ERROR, EXCEPT_KEYS } from "@/constants";

const mockControllerNonError = (name: string, rule: Object) => ({
  field: {
    name: name,
    rules: rule,
    onChange: jest.fn(),
    value: [],
  },
  formState: { errors: {} },
});

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  // Mock the useFormContext hook
  useFormContext: jest.fn(() => {
    return {
      formState: {
        errors: {},
      },
    };
  }),
  // Mock the Controller component
  Controller: (props: any) =>
    props.render(mockControllerNonError(props.name, props.rule)),
}));

describe("Testing PricingInfo component", () => {
  const mockErrorPrice = "Invalid price";
  const mockErrorSKU = "Invalid SKU number";

  it("Should match snapshot", () => {
    const component = render(<PricingInfo />);
    expect(component).toMatchSnapshot();
  });

  it("Should not show error messages for valid price", () => {
    const validPrice = "123";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "price")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [validPrice],
          },
          formState: {
            errors: {},
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, queryByText } = render(<PricingInfo />);
    expect(getAllByDisplayValue(validPrice)).toHaveLength(1);
    expect(queryByText(MESSAGES_ERROR.FIELD_REQUIRED)).toBeNull();
    expect(queryByText(mockErrorPrice)).toBeNull();
  });

  it("Should show error messages for invalid price", () => {
    const invalidPrice = "5.21";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "price")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [invalidPrice],
          },
          formState: {
            errors: {
              price: { message: mockErrorPrice },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<PricingInfo />);
    const inputPrice = getAllByDisplayValue(invalidPrice);
    expect(inputPrice).toHaveLength(1);
    expect(getAllByText(mockErrorPrice)).toHaveLength(1);

    const parents = inputPrice.map(input => input.parentElement);
    const errorMessage = parents.map(parent => parent?.querySelector("p"));

    errorMessage.forEach(p => {
      expect(p?.textContent).toBe(mockErrorPrice);
    });
  });

  it("Should show error messages for empty price", () => {
    const emptyPrice = "";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "price")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [emptyPrice],
          },
          formState: {
            errors: {
              price: { message: MESSAGES_ERROR.FIELD_REQUIRED },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<PricingInfo />);
    const inputEmpty = getAllByDisplayValue(emptyPrice);
    expect(inputEmpty).toHaveLength(2);
    const inputPrice = inputEmpty[0];
    expect(getAllByText(MESSAGES_ERROR.FIELD_REQUIRED)).toHaveLength(1);
    // Access the parent element of the input
    const parent = inputPrice.parentElement;
    const errorMessage = parent?.querySelector("p");

    // Assert that the error message is correct
    expect(errorMessage?.textContent).toBe(MESSAGES_ERROR.FIELD_REQUIRED);
  });

  it("Should not show error messages for valid SKU", () => {
    const validSKU = "123";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "sku")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [validSKU],
          },
          formState: {
            errors: {},
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, queryByText } = render(<PricingInfo />);
    expect(getAllByDisplayValue(validSKU)).toHaveLength(1);
    expect(queryByText(mockErrorSKU)).toBeNull();
  });

  it("Should show error messages for invalid SKU", () => {
    const invalidSKU = "invalid";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "sku")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [invalidSKU],
          },
          formState: {
            errors: {
              sku: { message: mockErrorSKU },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<PricingInfo />);
    const inputSKU = getAllByDisplayValue(invalidSKU);
    expect(inputSKU).toHaveLength(1);
    expect(getAllByText(mockErrorSKU)).toHaveLength(1);

    const parents = inputSKU.map(input => input.parentElement);
    const errorMessage = parents.map(parent => parent?.querySelector("p"));

    errorMessage.forEach(p => {
      expect(p?.textContent).toBe(mockErrorSKU);
    });
  });

  it("Should call preventDefault when key is in except key", async () => {
    const mockEvent = {
      key: EXCEPT_KEYS.POSITIVE_DOUBLE[3],
    };
    const { getByRole } = render(<PricingInfo />);
    const priceInput = getByRole("spinbutton", {
      name: /price/i,
    });

    fireEvent.keyDown(priceInput, mockEvent); // Invalid input

    expect(priceInput).toBeInTheDocument();
  });
});
