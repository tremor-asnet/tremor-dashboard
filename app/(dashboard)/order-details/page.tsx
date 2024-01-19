// Components
import { InvoiceHeader } from "@/components/OrderDetails/InvoiceHeader";
import { Card, Flex } from "@tremor/react";

// Mocks
import { mockInvoiceHeader, mockTrackOrder } from "@/mocks/orderDetails";
import { TrackOrder } from "@/components";

const OrderDetailsPage = () => {
  return (
    <Flex justifyContent="center" className="w-full bg-transparent">
      <Card className="w-2/3 dark:bg-dark_blue">
        <InvoiceHeader {...mockInvoiceHeader} />
      </Card>
      <TrackOrder />
    </Flex>
  );
};

export default OrderDetailsPage;
