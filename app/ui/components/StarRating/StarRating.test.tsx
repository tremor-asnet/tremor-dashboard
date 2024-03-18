import { render } from "@testing-library/react";

// Components
import StarRating from "./StarRating";

describe("StarRating Testing", () => {
  it("should match snapshot", () => {
    const component = render(<StarRating />);
    expect(component).toMatchSnapshot();
  });
});
