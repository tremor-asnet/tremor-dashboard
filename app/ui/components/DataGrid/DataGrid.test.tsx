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
  },
  {
    key: "createdAt",
    title: "Date",
    isSortable: true,
  },
  {
    key: "status",
    title: "Status",
    isSortable: true,
  },
  {
    key: "customerName",
    title: "Customer",
    isSortable: true,
  },
  {
    key: "productName",
    title: "Products",
    isSortable: true,
  },
  {
    key: "count",
    title: "quantity",
    isSortable: true,
  },
  {
    key: "revenue",
    title: "Revenue",
    isSortable: true,
  },
];

describe("DataGrid", () => {
  const mockProps = {
    data: MOCK_ORDERS,
    columns: columns,
    pageSize: 2,
    total: MOCK_ORDERS.length,
  };

  let renderResult: RenderResult;
  const dataGridComponent = <DataGrid {...mockProps} />;

  beforeEach(() => {
    jest.resetAllMocks();
    renderResult = render(dataGridComponent);
  });

  it("Should matches snapshot", async () => {
    jest.spyOn(URLSearchParams.prototype, "get").mockReturnValue("1");

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
