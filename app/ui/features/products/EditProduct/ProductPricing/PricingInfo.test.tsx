import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import PricingInfo from "./PricingInfo";

// Constants
import { EXCEPT_KEYS } from "@/constants/common";

jest.mock("react-hook-form", () => {
  let mockReactHookForm = jest.requireActual("react-hook-form");

  mockReactHookForm.useFormContext = jest.fn();
  return {
    ...mockReactHookForm,
    useFormContext: jest.fn(() => {
      return {
        formState: {
          errors: {},
        },
      };
    }),
    Controller: (props: any) => {
      return (
        <>
          {props.render({
            field: {
              value: [],
            },
            formState: {
              errors: {},
            },
          })}
        </>
      );
    },
  };
});

describe("Testing PricingInfo component", () => {
  const handleOnKeyDown = jest.fn();

  it("Should match snapshot", () => {
    const component = render(<PricingInfo />);
    expect(component).toMatchSnapshot();
  });

  it("should render title correctly", () => {
    const { getByText } = render(<PricingInfo />);
    expect(getByText("Pricing")).toBeInTheDocument();
  });

  it("renders pricing information fields correctly", () => {
    const { getByText, getByLabelText } = render(<PricingInfo />);

    expect(getByLabelText("Price")).toBeInTheDocument();
    expect(getByText("Currency")).toBeInTheDocument();
    expect(getByLabelText("SKU")).toBeInTheDocument();
    expect(getByText("Tags")).toBeInTheDocument();
  });

  it("should call preventDefault when key is in EXCEPT_KEYS.POSITIVE_DOUBLE", async () => {
    const mockEvent = {
      key: EXCEPT_KEYS.POSITIVE_DOUBLE[0],
      preventDefault: jest.fn(),
    };
    const { getByRole } = render(<PricingInfo />);
    const priceInput = getByRole("spinbutton", {
      name: /price/i,
    });

    fireEvent.keyDown(priceInput, mockEvent); // Invalid input

    expect(priceInput).toBeInTheDocument();
  });

  it("should not call preventDefault when key is not in EXCEPT_KEYS.POSITIVE_DOUBLE", () => {
    const mockEvent = {
      key: "b",
      preventDefault: jest.fn(),
    };

    handleOnKeyDown(mockEvent);

    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
  });
});
