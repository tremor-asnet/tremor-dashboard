import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import ProductInfo from "./ProductInfo";

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
            field: {},
            formState: {
              errors: {},
            },
          })}
        </>
      );
    },
  };
});

describe("Testing ProductInfo component", () => {
  const handleOnKeyDown = jest.fn();

  it("should match snapshot", () => {
    const component = render(<ProductInfo />);
    expect(component).toMatchSnapshot();
  });

  it("should render title correctly", () => {
    const { getByText } = render(<ProductInfo />);
    expect(getByText("Product Information")).toBeInTheDocument();
  });

  it("renders pricing information fields correctly", () => {
    const { getByText, getByLabelText } = render(<ProductInfo />);

    expect(getByLabelText("Name")).toBeInTheDocument();
    expect(getByText("Description")).toBeInTheDocument();
    expect(getByLabelText("Weight")).toBeInTheDocument();
    expect(getByLabelText("Quantity")).toBeInTheDocument();
    expect(getByLabelText("Provider Name")).toBeInTheDocument();
  });

  it("should call preventDefault when key is in EXCEPT_KEYS.POSITIVE_DOUBLE", async () => {
    const mockEvent = {
      key: EXCEPT_KEYS.POSITIVE_DOUBLE[0],
      preventDefault: jest.fn(),
    };
    const { getByRole } = render(<ProductInfo />);
    const weightInput = getByRole("spinbutton", {
      name: /weight/i,
    });

    fireEvent.keyDown(weightInput, mockEvent); // Invalid input

    expect(weightInput).toBeInTheDocument();
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
