import dynamic from "next/dynamic";

// Components
import { Card, Col, Flex, Grid } from "@tremor/react";
import { InvoiceHeader } from "@/ui/features";
const InvoiceBody = dynamic(
  () => import("@/ui/features/invoices/InvoiceBody/InvoiceBody"),
);
const InvoiceFooter = dynamic(
  () => import("@/ui/features/invoices/InvoiceFooter/InvoiceFooter"),
);

// Services
import { getInvoiceDetails } from "@/services";

const InvoiceDetailsPage = async ({ params }: { params: { id: number } }) => {
  const invoiceDetails = await getInvoiceDetails(params.id);

  const { id, createdAt, dueAt, products, totalCost, bankInfo, customer } =
    invoiceDetails;
  const {
    address: addressBank,
    city: cityBank,
    state: stateBank,
    phone: phoneBank,
  } = bankInfo;
  const {
    fullName,
    address: addressCustomer,
    city: cityCustomer,
    stateCode,
    state: stateCustomer,
  } = customer;

  return (
    <Flex justifyContent="center" className="w-full bg-transparent">
      <Card
        className="w-full lg:w-2/3 dark:bg-dark_blue px-6 py-7 ring-0 rounded-xl shadow-md print:shadow-none dark:print:shadow-none"
        id="print-content">
        <Grid numItems={1} className="gap-2">
          <Col numColSpan={1}>
            <InvoiceHeader
              addressBank={addressBank}
              cityBank={cityBank}
              stateBank={stateBank}
              phoneBank={phoneBank}
              fullName={fullName}
              addressCustomer={addressCustomer}
              cityCustomer={cityCustomer}
              stateCode={stateCode}
              stateCustomer={stateCustomer}
            />
          </Col>
          <Col numColSpan={1}>
            <InvoiceBody
              id={id}
              createdAt={createdAt}
              dueAt={dueAt}
              products={products}
              totalCost={totalCost}
            />
          </Col>
          <Col numColSpan={1}>
            <InvoiceFooter />
          </Col>
        </Grid>
      </Card>
    </Flex>
  );
};

export default InvoiceDetailsPage;
