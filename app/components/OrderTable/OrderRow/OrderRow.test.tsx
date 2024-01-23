import { render } from "@testing-library/react";

// Components
import OrderRow from ".";

// Types
import { TProductTable } from "@/types";

describe("Order Row Testing", () => {
  const data: TProductTable = {
    id: 1,
    createdAt: "2023-11-22",
    status: 1,
    customer: {
      id: 1,
      full_name: "Customer 001",
      avatar:
        "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/team-2.1593fb7f.jpg",
    },
    products: [
      {
        id: 230019,
        name: "Christopher Knight Home",
        count: 1,
      },
      {
        id: 87120,
        name: "Bar Height Swivel Barstool",
        count: 2,
      },
    ],
    revenue: "revenue",
  };

  it("should match snapshot", () => {
    const container = render(<OrderRow item={data} />);
    expect(container).toMatchSnapshot();
  });
});
