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
  it("Should show error message when has error message and focus to it", async () => {
    // Override the mock implementation of Controller
    jest.requireMock("react-hook-form").Controller = (props: any) => {
      if (props.name === "price")
        return props.render({
          field: {
            name: props.name,
            rules: props.rule,
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
            <div className="w-full mb-2 md:mb-0">
              <InputField
                id="edit-price"
                data-testid="edit-price"
                type="number"
                label="Price"
                errorMessage={priceErrorMessage}
                {...field}
              />
            </div>
          );
        }}
        name="price"
      />,
    );

    renderHook(() => useFocusFieldError(formState));

    expect(getAllByText(MESSAGES_ERROR.FIELD_REQUIRED)).toHaveLength(1);

    // Assert that input with id focused the is correct
    const focusedInput = document.activeElement;
    expect(focusedInput?.id).toBe("edit-price");
  });
});
