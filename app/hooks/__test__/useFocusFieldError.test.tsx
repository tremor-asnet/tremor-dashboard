// Libs
import { render, renderHook } from "@testing-library/react";
import { useFormContext, Controller } from "react-hook-form";

// Components
import { InputField } from "@/ui/components";

// Hooks
import useFocusFieldError from "@/hooks/useFocusFieldError";

// Constants
import { MESSAGES_ERROR } from "@/constants";

const mockControllerHasError = (name: string, rule: Object) => ({
  field: {
    name: name,
    rules: rule,
    onChange: jest.fn(),
    value: "",
  },
  formState: {
    errors: {
      price: { message: MESSAGES_ERROR.FIELD_REQUIRED },
    },
  },
});

const mockControllerNoneError = (name: string, rule: Object) => ({
  field: {
    name: name,
    rules: rule,
    onChange: jest.fn(),
    value: "",
  },
  formState: {
    errors: {
      price: { message: "" },
    },
  },
});

// Mock react-hook-form module
jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  // Mock the useFormContext hook
  useFormContext: jest.fn(() => ({
    formState: {
      errors: {
        price: { message: MESSAGES_ERROR.FIELD_REQUIRED },
      },
    },
  })),
}));

describe("Test useFocusFieldError hook", () => {
  it("Should check none error message and no focus to input filed", async () => {
    // Override the mock implementation of Controller
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      const { name, rule } = props;
      if (name === "nameProduct")
        return props.render({
          field: {
            name: name,
            rules: rule,
            onChange: jest.fn(),
            value: "",
          },
          formState: {
            errors: { message: "" },
          },
        });
      return props.render(mockControllerNoneError(props.name, props.rule));
    };

    const { control, formState } = useFormContext();

    const { queryByText } = render(
      <Controller
        control={control}
        rules={{
          required: MESSAGES_ERROR.FIELD_REQUIRED,
        }}
        render={({ field, formState: { errors } }) => {
          const errorMessage = errors.message || "";

          return (
            <InputField
              id="name-product"
              data-testid="name-product"
              type="string"
              label="Name Product"
              errorMessage={errorMessage}
              {...field}
            />
          );
        }}
        name="nameProduct"
      />,
    );

    renderHook(() => useFocusFieldError(formState));

    expect(queryByText(MESSAGES_ERROR.FIELD_REQUIRED)).toBeNull();

    // Assert that document have element focused the is incorrect
    const focusedElement = document.hasFocus();
    expect(focusedElement).toEqual(false);

    // Assert that input with id focused the is incorrect
    const focusedInput = document.activeElement;
    expect(focusedInput?.id).toHaveLength(0);
  });

  it("Should show error message when has error message and focus to it", async () => {
    // Override the mock implementation of Controller
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      const { name, rule } = props;
      if (name === "price")
        return props.render({
          field: {
            name: name,
            rules: rule,
            onChange: jest.fn(),
            value: "",
          },
          formState: {
            errors: { message: MESSAGES_ERROR.FIELD_REQUIRED },
          },
        });
      return props.render(mockControllerHasError(props.name, props.rule));
    };

    const { control, formState } = useFormContext();

    const { getAllByText } = render(
      <Controller
        control={control}
        rules={{
          required: MESSAGES_ERROR.FIELD_REQUIRED,
        }}
        render={({ field, formState: { errors } }) => {
          const priceErrorMessage = errors.message || "";

          return (
            <InputField
              id="edit-price"
              data-testid="edit-price"
              type="number"
              label="Price"
              errorMessage={priceErrorMessage}
              {...field}
            />
          );
        }}
        name="price"
      />,
    );

    renderHook(() => useFocusFieldError(formState));

    expect(getAllByText(MESSAGES_ERROR.FIELD_REQUIRED)).toHaveLength(1);

    //Assert that document have element focused the is correct
    const focusedElement = document.hasFocus();
    expect(focusedElement).toEqual(true);

    // Assert that input with id focused the is correct
    const focusedInput = document.activeElement;
    expect(focusedInput?.id).toBe("edit-price");
  });
});
