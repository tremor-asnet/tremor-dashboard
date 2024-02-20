import dynamic from "next/dynamic";

// Components
import { Card, Col, Flex, Grid } from "@tremor/react";
const InvoiceFooter = dynamic(
  () => import("@/components/Invoice/InvoiceFooter/InvoiceFooter"),
);
const InvoiceBody = dynamic(
  () => import("@/components/Invoice/InvoiceBody/InvoiceBody"),
);
const InvoiceHeader = dynamic(
  () => import("@/components/Invoice/InvoiceHeader/InvoiceHeader"),
);

// Services
import { getInvoiceDetails } from "@/services/invoiceServices";

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
      <Card className="w-full lg:w-2/3 dark:bg-dark_blue p-4 ring-0 rounded-xl shadow-md">
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
