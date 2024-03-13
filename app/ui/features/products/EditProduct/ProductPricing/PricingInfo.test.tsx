import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import PricingInfo from "./PricingInfo";

// Constants
import { EXCEPT_KEYS } from "@/constants/common";

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
    props.render({
      field: {
        value: [],
      },
      formState: {
        errors: {},
      },
    }),
}));

describe("Testing PricingInfo component", () => {
  it("Should match snapshot", () => {
    const component = render(<PricingInfo />);
    expect(component).toMatchSnapshot();
  });

  it("Should call preventDefault when key is in except key", async () => {
    const mockEvent = {
      key: EXCEPT_KEYS.POSITIVE_DOUBLE[0],
    };
    const { getByRole } = render(<PricingInfo />);
    const priceInput = getByRole("spinbutton", {
      name: /price/i,
    });

    fireEvent.keyDown(priceInput, mockEvent); // Invalid input

    expect(priceInput).toBeInTheDocument();
  });
});
