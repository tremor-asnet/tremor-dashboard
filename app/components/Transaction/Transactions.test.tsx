// Libs
import { render } from "@testing-library/react";

// Components
import Transactions from "@/components/Transaction/Transactions";

// Mocks
import { MOCK_TRANSACTIONS } from "@/mocks/transaction";

describe("Transactions Component Testing", () => {
  const newest = MOCK_TRANSACTIONS.slice(0, 2);
  const yesterday = MOCK_TRANSACTIONS.slice(2);

  it("should match snapshot", () => {
    const { container } = render(
      <Transactions
        newest={newest}
        yesterday={yesterday}
        date="23 - 30 March 2020"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
