import { render } from "@testing-library/react";

// Componenents
import InvoiceBody from "./InvoiceBody";

// Constants
import { INVOICE_DATA } from "@/mocks";

describe("InvoiceBody Testing", () => {
  it("should match snapshot", () => {
    const component = render(
      <InvoiceBody
        id={INVOICE_DATA.id}
        createdAt={INVOICE_DATA.createdAt}
        dueDate={INVOICE_DATA.dueDate}
        details={INVOICE_DATA.details}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
