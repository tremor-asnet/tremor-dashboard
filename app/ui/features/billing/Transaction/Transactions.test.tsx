// Libs
import { render } from "@testing-library/react";

// Components
import Transactions from "./Transactions";

// Mocks
import { MOCK_TRANSACTIONS } from "@/mocks/transaction";

const mockJson = jest.fn().mockReturnValue(Promise.resolve([]));
const mockFetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: mockJson,
    ok: true,
  }),
);

global.fetch = mockFetch;

describe("Transactions Component Testing", () => {
  it("should match snapshot", async () => {
    const { container } = render(
      await Transactions({
        newest: MOCK_TRANSACTIONS,
        date: "23 - 30 March 2020",
      }),
    );

    expect(container).toMatchSnapshot();
  });
});
