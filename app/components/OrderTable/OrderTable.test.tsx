import { render } from "@testing-library/react";
import OrderTable from ".";
import { TABLE_LIST_DATA } from "@/mocks";

describe("Order Table Testing", () => {
  it("should match snapshot", () => {
    const container = render(<OrderTable data={TABLE_LIST_DATA} />);
    expect(container).toMatchSnapshot();
  });
});
