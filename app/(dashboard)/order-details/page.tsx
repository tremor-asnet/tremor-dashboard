// Components
import { InvoiceHeader } from "@/components/OrderDetails/InvoiceHeader";
import { OrderSummary } from "@/components/OrderDetails/OrderSummary";
import { Card, Flex } from "@tremor/react";

// Mocks
import { mockInvoiceHeader, mockOderSummary } from "@/mocks/orderDetails";

const OrderDetailsPage = () => {
  return (
    <Flex justifyContent="center" className="w-full bg-transparent">
      <Card className="w-2/3 dark:bg-dark_blue">
        <InvoiceHeader {...mockInvoiceHeader} />
        <div className="mt-4">
          <OrderSummary {...mockOderSummary} />
        </div>
      </Card>
    </Flex>
  );
};

export default OrderDetailsPage;
