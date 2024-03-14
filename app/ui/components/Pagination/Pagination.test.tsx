import { fireEvent, render } from "@testing-library/react";

// Components
import Pagination from ".";

describe("Pagination component", () => {
  const props = {
    onPageChange: jest.fn(),
    totalCount: 100,
    currentPage: 1,
    pageSize: 10,
  };

  beforeEach(() => {
    props.onPageChange.mockClear();
  });

  it("Should match snapshot", () => {
    const { container } = render(<Pagination {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("Should match total count less than page size", () => {
    const { container } = render(
      <Pagination {...props} totalCount={9} currentPage={1} pageSize={10} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("Calls onPageChange correctly on next button click", () => {
    const { getByTestId } = render(<Pagination {...props} />);

    fireEvent.click(getByTestId("next-page-button"));
    expect(props.onPageChange).toHaveBeenCalledWith(2);
  });

  it("Calls onPageChange correctly on previous button click", () => {
    const { getByTestId } = render(<Pagination {...props} currentPage={2} />);

    fireEvent.click(getByTestId("prev-page-button"));
    expect(props.onPageChange).toHaveBeenCalledWith(1);
  });

  it("Calls onPageChange with correct page number when a page button is clicked", () => {
    const { getByLabelText } = render(<Pagination {...props} />);
    const pageButton = getByLabelText("Page button 2");

    fireEvent.click(pageButton);
    expect(props.onPageChange).toHaveBeenCalledWith(2);
  });

  it("Disables next button on last page", () => {
    const { getByTestId } = render(<Pagination {...props} currentPage={10} />);
    const nextButton = getByTestId("next-page-button");

    expect(nextButton.classList.contains("hidden")).toBeTruthy();
  });
});
