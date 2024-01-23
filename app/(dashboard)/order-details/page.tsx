// Components
import { InvoiceHeader } from "@/components/OrderDetails/InvoiceHeader";
import { OrderSummary } from "@/components/OrderDetails/OrderSummary";
import { Card, Col, Divider, Flex, Grid } from "@tremor/react";
import { OrderContact, TrackOrder } from "@/components";
import PaymentDetails from "@/components/OrderDetails/PaymentDetails";
import BillingInfo from "@/components/OrderDetails/BillingInfo";

// Mocks
import {
  mockBillingInfo,
  mockInvoiceHeader,
  mockOrderSummary,
  mockTrackOrder,
} from "@/mocks/orderDetails";
import { ORDER_DATA } from "@/mocks";

const OrderDetailsPage = () => {
  return (
    <Flex justifyContent="center" className="w-full bg-transparent">
      <Card className="w-full md:w-2/3 dark:bg-dark_blue p-4 ring-0 rounded-xl shadow-md">
        <Grid numItems={1} numItemsMd={2} numItemsLg={3} className="gap-2">
          <Col numColSpan={1} numColSpanMd={2} numColSpanLg={3}>
            <InvoiceHeader {...mockInvoiceHeader} />
            <div className="w-full h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] opacity-25 my-6" />
          </Col>
          <Col numColSpan={1} numColSpanMd={2} numColSpanLg={3}>
            <OrderContact data={ORDER_DATA} />
            <div className="w-full h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] opacity-25 my-6" />
          </Col>
          <Col numColSpan={1} numColSpanMd={2} numColSpanLg={3}>
            <Grid numItems={1} numItemsMd={2} numItemsLg={3} className="gap-4">
              <div className="w-full">
                <TrackOrder
                  id={mockTrackOrder.id}
                  generateOrderAt={mockTrackOrder.generateOrderId}
                  deliveredAt={mockTrackOrder.deliveredAt}
                  transmitedToCourierAt={mockTrackOrder.transmitedToCourierAt}
                  generateOrderId={mockTrackOrder.generateOrderId}
                />
              </div>
              <div className="w-full">
                <div className="mb-6">
                  <PaymentDetails />
                </div>

                <BillingInfo
                  ownerName={mockBillingInfo.ownerName}
                  companyName={mockBillingInfo.companyName}
                  email={mockBillingInfo.email}
                  vat={mockBillingInfo.vat}
                />
              </div>
              <Col numColSpanMd={2} numColSpanLg={1}>
                <div className="w-full lg:pl-20">
                  <OrderSummary {...mockOrderSummary} />
                </div>
              </Col>
            </Grid>
          </Col>
        </Grid>
      </Card>
    </Flex>
  );
};

export default OrderDetailsPage;
