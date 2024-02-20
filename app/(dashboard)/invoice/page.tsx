import dynamic from "next/dynamic";

// Components
import { Card, Col, Flex, Grid } from "@tremor/react";
const InvoiceHeader = dynamic(
  () => import("@/components/Invoice/InvoiceHeader/InvoiceHeader"),
);
import { InvoiceBody } from "@/components";

// Constants
import { INVOICE_DATA } from "@/mocks";

const InvoiceFooter = dynamic(
  () => import("@/components/Invoice/InvoiceFooter/InvoiceFooter"),
);

const Invoice = () => {
  return (
    <Flex justifyContent="center" className="w-full bg-transparent">
      <Card className="w-full lg:w-2/3 dark:bg-dark_blue p-4 ring-0 rounded-xl shadow-md">
        <Grid numItems={1} className="gap-2">
          <Col numColSpan={1}>
            <InvoiceHeader />
          </Col>
          <Col numColSpan={1}>
            <InvoiceBody
              id={INVOICE_DATA.id}
              createdAt={INVOICE_DATA.createdAt}
              dueDate={INVOICE_DATA.dueDate}
              details={INVOICE_DATA.details}
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

export default Invoice;
