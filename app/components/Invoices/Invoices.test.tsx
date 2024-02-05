// Libs
import { render } from "@testing-library/react";

// Components
import Invoices from "@/components/Invoices/Invoices";

// Mocks
import { MOCK_INVOICES } from "@/mocks/invoices";

describe("Invoices Testing", () => {
  it("should match snapshot", () => {
    const { container } = render(<Invoices invoices={MOCK_INVOICES} />);

    expect(container).toMatchSnapshot();
  });
});
