// Libs
import { render } from "@testing-library/react";

// Components
import Transactions from "./Transactions";

// Mocks
import { MOCK_TRANSACTIONS } from "@/mocks/transaction";

describe("Transactions Component Testing", () => {
  const newest = MOCK_TRANSACTIONS;

  it("should match snapshot", () => {
    const { container } = render(
      <Transactions newest={newest} date="23 - 30 March 2020" />,
    );

    expect(container).toMatchSnapshot();
  });
});
