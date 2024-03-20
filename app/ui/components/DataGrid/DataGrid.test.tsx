import {
  RenderResult,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";

// Types
import { ColumnType, Order } from "@/types";

// Constants
import { MOCK_ORDERS } from "@/mocks";

// Components
import DataGrid from "./DataGrid";

// Mock next
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: () => ({ replace: jest.fn() }),
}));

const columns: ColumnType<Order>[] = [
  {
    key: "id",
    title: "Id",
    sortable: false,
  },
  {
    key: "createdAt",
    title: "Date",
    sortable: true,
  },
  {
    key: "status",
    title: "Status",
    sortable: true,
  },
  {
    key: "customerName",
    title: "Customer",
    sortable: true,
  },
  {
    key: "productName",
    title: "Products",
    sortable: true,
  },
  {
    key: "count",
    title: "quantity",
    sortable: true,
  },
  {
    key: "revenue",
    title: "Revenue",
    sortable: true,
  },
];

describe("DataGrid", () => {
  const mockProps = {
    data: MOCK_ORDERS,
    columns: columns,
    pageSize: 2,
    currentPageNumber: 1,
    total: MOCK_ORDERS.length,
  };

  let renderResult: RenderResult;
  const dataGridComponent = <DataGrid {...mockProps} />;

  beforeEach(() => {
    renderResult = render(dataGridComponent);
  });

  it("Should matches snapshot", async () => {
    const { container } = render(
      <DataGrid {...mockProps} pageSize={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("Calls handlePageChange correctly on next button click", async () => {
    const { container, rerender, getByTestId } = renderResult;

    fireEvent.click(getByTestId("next-page-button"));
    await waitFor(() => {
      rerender(<DataGrid {...mockProps} currentPageNumber={2} />);
    });

    expect(container).toMatchSnapshot();
  });

  it("Calls handlePageChange correctly on prev button click", async () => {
    const { container, rerender, getByTestId } = renderResult;

    fireEvent.click(getByTestId("next-page-button"));
    await waitFor(() => {
      rerender(<DataGrid {...mockProps} currentPageNumber={2} />);
    });

    fireEvent.click(getByTestId("prev-page-button"));
    await waitFor(() => {
      rerender(dataGridComponent);
    });

    expect(container).toMatchSnapshot();
  });

  it("Calls handlePageChange correctly on page button click", async () => {
    const { container, rerender, getByLabelText } = renderResult;

    fireEvent.click(getByLabelText("Page button 2"));

    await waitFor(() => {
      rerender(<DataGrid {...mockProps} currentPageNumber={2} />);
    });

    expect(container).toMatchSnapshot();
  });
});
