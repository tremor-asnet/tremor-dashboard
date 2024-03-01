import { render } from "@testing-library/react";

// Componenents
import StarRating from "./StarRating";

describe("StarRating Testing", () => {
  it("should match snapshot", () => {
    const component = render(<StarRating />);
    expect(component).toMatchSnapshot();
  });
});
