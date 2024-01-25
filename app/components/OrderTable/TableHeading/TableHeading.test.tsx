import { render } from "@testing-library/react";
import TableHeading from ".";

describe("Table Heading testing", () => {
  it("should match snapshot", () => {
    const container = render(<TableHeading />);
    expect(container).toMatchSnapshot();
  });
});
