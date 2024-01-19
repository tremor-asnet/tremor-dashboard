// Components
import { InvoiceHeader } from "@/components/OrderDetails/InvoiceHeader";
import { Card, Flex } from "@tremor/react";

// Mocks
import { mockInvoiceHeader } from "@/mocks/orderDetails";

const OrderDetailsPage = () => {
  return (
    <Flex justifyContent="center" className="w-full bg-transparent">
      <Card className="w-2/3 dark:bg-dark_blue">
        <InvoiceHeader {...mockInvoiceHeader} />
      </Card>
    </Flex>
  );
};

export default OrderDetailsPage;
