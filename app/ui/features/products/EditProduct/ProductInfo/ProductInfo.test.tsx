import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Constants
import { MESSAGES_ERROR, EXCEPT_KEYS } from "@/constants";

// Components
import ProductInfo from "./ProductInfo";

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

describe("Testing ProductInfo component", () => {
  it("Should match snapshot", () => {
    const component = render(<ProductInfo />);
    expect(component).toMatchSnapshot();
  });

  it("Should call preventDefault when key is in except key", async () => {
    const mockEvent = {
      key: EXCEPT_KEYS.POSITIVE_DOUBLE[0],
    };
    const { getByRole } = render(<ProductInfo />);
    const weightInput = getByRole("spinbutton", {
      name: /weight/i,
    });

    fireEvent.keyDown(weightInput, mockEvent); // Invalid input

    expect(weightInput).toBeInTheDocument();
  });

  it("Should not show error messages for valid name product", () => {
    const validName = "Mac 12 Pro";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "productName")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [validName],
          },
          formState: {
            errors: {},
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, queryByText } = render(<ProductInfo />);
    expect(getAllByDisplayValue(validName)).toHaveLength(1);
    expect(queryByText(MESSAGES_ERROR.NAME_REQUIRED)).toBeNull();
    expect(queryByText(MESSAGES_ERROR.NAME_MIN_LENGTH)).toBeNull();
  });

  it("Should show error messages for empty name", () => {
    const emptyName = "";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "productName")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [emptyName],
          },
          formState: {
            errors: {
              productName: { message: MESSAGES_ERROR.NAME_REQUIRED },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<ProductInfo />);
    const inputEmpty = getAllByDisplayValue(emptyName);
    const inputName = inputEmpty[0];
    expect(getAllByText(MESSAGES_ERROR.NAME_REQUIRED)).toHaveLength(1);
    // Access the parent element of the input
    const parent = inputName.parentElement;
    const errorMessage = parent?.querySelector("p");

    // Assert that the error message is correct
    expect(errorMessage?.textContent).toBe(MESSAGES_ERROR.NAME_REQUIRED);
  });

  it("Should show error messages for invalid name", () => {
    const invalidName = "ABC";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "productName")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [invalidName],
          },
          formState: {
            errors: {
              productName: { message: MESSAGES_ERROR.NAME_MIN_LENGTH },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<ProductInfo />);
    const inputName = getAllByDisplayValue(invalidName);
    expect(inputName).toHaveLength(1);
    expect(getAllByText(MESSAGES_ERROR.NAME_MIN_LENGTH)).toHaveLength(1);

    const parents = inputName.map(input => input.parentElement);
    const errorMessage = parents.map(parent => parent?.querySelector("p"));

    errorMessage.forEach(p => {
      expect(p?.textContent).toBe(MESSAGES_ERROR.NAME_MIN_LENGTH);
    });
  });

  const mockErrorWeight = "Invalid weight";

  it("Should not show error messages for valid weight", () => {
    const validWeight = "123";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "weight")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [validWeight],
          },
          formState: {
            errors: {},
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, queryByText } = render(<ProductInfo />);
    expect(getAllByDisplayValue(validWeight)).toHaveLength(1);
    expect(queryByText(MESSAGES_ERROR.FIELD_REQUIRED)).toBeNull();
    expect(queryByText(mockErrorWeight)).toBeNull();
  });

  it("Should show error messages for invalid weight", () => {
    const invalidWeight = "5.21";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "weight")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [invalidWeight],
          },
          formState: {
            errors: {
              weight: { message: mockErrorWeight },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<ProductInfo />);
    const inputWeight = getAllByDisplayValue(invalidWeight);
    expect(inputWeight).toHaveLength(1);
    expect(getAllByText(mockErrorWeight)).toHaveLength(1);

    const parents = inputWeight.map(input => input.parentElement);
    const errorMessage = parents.map(parent => parent?.querySelector("p"));

    errorMessage.forEach(p => {
      expect(p?.textContent).toBe(mockErrorWeight);
    });
  });

  it("Should show error messages for empty weight", () => {
    const emptyWeight = "";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "weight")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [emptyWeight],
          },
          formState: {
            errors: {
              weight: { message: MESSAGES_ERROR.FIELD_REQUIRED },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<ProductInfo />);
    const inputEmpty = getAllByDisplayValue(emptyWeight);
    const inputWeight = inputEmpty[2];
    expect(getAllByText(MESSAGES_ERROR.FIELD_REQUIRED)).toHaveLength(1);
    // Access the parent element of the input
    const parent = inputWeight.parentElement;
    const errorMessage = parent?.querySelector("p");

    // Assert that the error message is correct
    expect(errorMessage?.textContent).toBe(MESSAGES_ERROR.FIELD_REQUIRED);
  });

  it("Should not show error messages for valid quantity", () => {
    const validQuantity = "123";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "quantity")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [validQuantity],
          },
          formState: {
            errors: {},
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, queryByText } = render(<ProductInfo />);
    expect(getAllByDisplayValue(validQuantity)).toHaveLength(1);
    expect(queryByText(MESSAGES_ERROR.FIELD_REQUIRED)).toBeNull();
    expect(queryByText(MESSAGES_ERROR.NEGATIVE_NUMBER)).toBeNull();
  });

  it("Should show error messages for invalid quantity", () => {
    const invalidQuantity = "0";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "quantity")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [invalidQuantity],
          },
          formState: {
            errors: {
              quantity: { message: MESSAGES_ERROR.NEGATIVE_NUMBER },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<ProductInfo />);
    const inputQuantity = getAllByDisplayValue(invalidQuantity);
    expect(inputQuantity).toHaveLength(1);
    expect(getAllByText(MESSAGES_ERROR.NEGATIVE_NUMBER)).toHaveLength(1);

    const parents = inputQuantity.map(input => input.parentElement);
    const errorMessage = parents.map(parent => parent?.querySelector("p"));

    errorMessage.forEach(p => {
      expect(p?.textContent).toBe(MESSAGES_ERROR.NEGATIVE_NUMBER);
    });
  });

  it("Should show error messages for empty quantity", () => {
    const emptyQuantity = "";
    // Override the mock implementation of Controller for this test case
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "quantity")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
            onChange: jest.fn(),
            value: [emptyQuantity],
          },
          formState: {
            errors: {
              quantity: { message: MESSAGES_ERROR.FIELD_REQUIRED },
            },
          },
        });
      return props.render(mockControllerNonError(props.name, props.rule));
    };

    const { getAllByDisplayValue, getAllByText } = render(<ProductInfo />);
    const inputEmpty = getAllByDisplayValue(emptyQuantity);
    const inputQuantity = inputEmpty[3];
    expect(getAllByText(MESSAGES_ERROR.FIELD_REQUIRED)).toHaveLength(1);
    // Access the parent element of the input
    const parent = inputQuantity.parentElement;
    const errorMessage = parent?.querySelector("p");

    // Assert that the error message is correct
    expect(errorMessage?.textContent).toBe(MESSAGES_ERROR.FIELD_REQUIRED);
  });
});
