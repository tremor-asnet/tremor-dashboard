import { fireEvent, render } from "@testing-library/react";

// Types
import { ColumnType, Product } from "@/types";

// Constants
import { DIRECTION } from "@/constants/common";

// Components
import DataGridHeader from "./DataGridHeader";

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

// Mocking handleSorting function
const mockHandleSorting = jest.fn();

describe("DataGridHeader component", () => {
  it("Should matches snapshot", () => {
    const { container } = render(
      <table>
        <DataGridHeader
          columns={mockColumns}
          handleSorting={mockHandleSorting}
        />
      </table>,
    );

    // Take a snapshot of the rendered component
    expect(container).toMatchSnapshot();
  });

  it("Should be call handleSorting function when sortable column header is clicked", () => {
    const { getByText } = render(
      <table>
        <DataGridHeader
          columns={mockColumns}
          handleSorting={mockHandleSorting}
        />
      </table>,
    );

    // Click on a sortable column header
    fireEvent.click(getByText(mockColumns[0].title));
    expect(mockHandleSorting).toHaveBeenCalledWith(
      mockColumns[0].key,
      DIRECTION.ASC,
    );

    // Click on a sortable column header again
    fireEvent.click(getByText(mockColumns[0].title));
    expect(mockHandleSorting).toHaveBeenCalledWith(
      mockColumns[0].key,
      DIRECTION.DESC,
    );
  });

  it("Should not call handleSorting function when non-sortable column header is clicked", () => {
    const { getByText } = render(
      <table>
        <DataGridHeader
          columns={mockColumns}
          handleSorting={mockHandleSorting}
        />
      </table>,
    );

    // Click on a non-sortable column header
    fireEvent.click(getByText(mockColumns[1].title));
    expect(mockHandleSorting).not.toHaveBeenCalledWith();
  });
});
