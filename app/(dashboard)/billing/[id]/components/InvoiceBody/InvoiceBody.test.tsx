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
        dueAt={INVOICE_DATA.dueAt}
        products={INVOICE_DATA.products}
        totalCost={INVOICE_DATA.totalCost}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
