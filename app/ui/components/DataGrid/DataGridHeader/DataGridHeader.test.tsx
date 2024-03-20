import { RenderResult, fireEvent, render } from "@testing-library/react";

// Types
import { ColumnType, Product } from "@/types";

// Components
import DataGridHeader from "./DataGridHeader";

// Mock next
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: () => ({ replace: jest.fn() }),
}));

const mockColumns: ColumnType<Product>[] = [
  {
    key: "id",
    title: "Id",
    sortable: true,
  },
  {
    key: "productName",
    title: "Product",
    sortable: false,
  },
];

describe("DataGridHeader component", () => {
  let renderedComponent: RenderResult;

  beforeEach(() => {
    renderedComponent = render(
      <table>
        <DataGridHeader columns={mockColumns} />
      </table>,
    );
  });

  it("Should matches snapshot", () => {
    const { container } = renderedComponent;
    // Take a snapshot of the rendered component
    expect(container).toMatchSnapshot();
  });

  it("Should be call handleSorting function when sortable column header is clicked", () => {
    const { container, getByText } = renderedComponent;
    // Click on a sortable column header
    fireEvent.click(getByText(mockColumns[0].title));

    // Click on a sortable column header again
    fireEvent.click(getByText(mockColumns[0].title));
    expect(container).toMatchSnapshot();
  });
});
