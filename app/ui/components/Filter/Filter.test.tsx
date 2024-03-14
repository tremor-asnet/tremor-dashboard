import { fireEvent, render, waitFor } from "@testing-library/react";
import { useState } from "react";

// Constants
import { orderListOption } from "@/constants";

// Components
import Filter from "./Filter";

let mockSearchParam = "";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  useSearchParams: () => {
    const [params, setParams] = useState(new URLSearchParams(mockSearchParam));
    return [
      params,
      (newParams: string) => {
        mockSearchParam = newParams;
        setParams(new URLSearchParams(newParams));
      },
    ];
  },
  usePathname: jest.fn(),
}));

describe("Testing Filter component", () => {
  const propsDefault = {
    title: "Status",
    listOption: orderListOption,
  };

  const renderWrapper = () => render(<Filter {...propsDefault} />);

  it("Should match snapshot", () => {
    const component = render(
      <Filter title="Status" listOption={orderListOption} />,
    );
    expect(component).toMatchSnapshot();
  });

  it("Should toggle list-option when fillter is clicked", async () => {
    const { findByTestId } = renderWrapper();

    fireEvent.click(await findByTestId("toggle-filter"));

    expect(await findByTestId("list-option")).toBeTruthy();
  });

  it("Should close list-option when clicking outside the component", async () => {
    const renderWrapperWithOutSide = () =>
      render(
        <div data-testid="outside">
          <Filter {...propsDefault} />
        </div>,
      );
    const { findByTestId } = renderWrapperWithOutSide();

    fireEvent.click(await findByTestId("toggle-filter"));
    fireEvent.click(await findByTestId("outside"));

    waitFor(() => expect(findByTestId("list-option")).toBeFalsy());
  });

  it("Should toggle list-option when fillter is clicked next click remove filter and close list-option", async () => {
    const { findByTestId } = renderWrapper();

    fireEvent.click(await findByTestId("toggle-filter"));

    expect(await findByTestId("list-option")).toBeTruthy();
    fireEvent.click(await findByTestId("remove-filter"));
    waitFor(() => expect(findByTestId("list-option")).toBeFalsy());
  });

  it("Should toggle list-option when fillter is clicked next click item filter and close list-option", async () => {
    const { findByTestId } = renderWrapper();

    fireEvent.click(await findByTestId("toggle-filter"));

    expect(await findByTestId("list-option")).toBeTruthy();
    fireEvent.click(await findByTestId("item-filter-1"));
    waitFor(() => expect(findByTestId("list-option")).toBeFalsy());
  });
});
