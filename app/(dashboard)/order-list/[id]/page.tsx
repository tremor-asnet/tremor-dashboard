import dynamic from "next/dynamic";

// Components
const InvoiceHeader = dynamic(
  () => import("@/components/OrderDetails/InvoiceHeader"),
);
const OrderSummary = dynamic(
  () => import("@/components/OrderDetails/OrderSummary/OrderSummary"),
);
const PaymentDetails = dynamic(
  () => import("@/components/OrderDetails/PaymentDetails/PaymentDetails"),
);
const BillingInfo = dynamic(
  () => import("@/components/OrderDetails/BillingInfo/BillingInfo"),
);
const OrderContact = dynamic(
  () => import("@/components/OrderDetails/OrderContact/OrderContact"),
);
const TrackOrder = dynamic(
  () => import("@/components/OrderDetails/TrackOrder/TrackOrder"),
);
import { Bold, Card, Col, Flex, Grid } from "@tremor/react";

// Services
import { getOrderDetails } from "@/services/ordersServices";

const OrderDetailsPage = async ({ params }: { params: { id: number } }) => {
  const orderDetails = await getOrderDetails(params.id);
  const {
    id,
    orderCode,
    orderDeliverPrice,
    orderTax,
    trackOrderInfo,
    billingInfo,
    createdAt,
    products,
    status,
  } = orderDetails;

  const {
    transmitedToCourierAt,
    generateOrderId,
    deliveredAt,
    generateOrderAt,
  } = trackOrderInfo;

  const productPrice = products.reduce(
    (total: number, item: any) => total + item.count * item.price,
    0,
  );

  const firstProduct = products.length > 0 ? products[0] : null;

  const firstDay = new Date().getTime();
  const lastDay = new Date(deliveredAt).getTime();
  const period = Math.round((firstDay - lastDay) / (1000 * 3600 * 24));

  return (
    <Flex justifyContent="center" className="w-full bg-transparent">
      <Card className="w-full lg:w-2/3 dark:bg-dark_blue p-4 ring-0 rounded-xl shadow-md">
        <Grid numItems={1} numItemsMd={2} numItemsLg={3} className="gap-2">
          <Col numColSpan={1} numColSpanMd={2} numColSpanLg={3}>
            <InvoiceHeader
              id={id}
              createdAt={createdAt}
              orderCode={orderCode}
            />
            <div className="w-full h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] opacity-25 my-6" />
          </Col>
          <Col numColSpan={1} numColSpanMd={2} numColSpanLg={3}>
            <OrderContact
              name={firstProduct.name}
              url={firstProduct.url}
              date={period}
              status={status}
            />
            <div className="w-full h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] opacity-25 my-6" />
          </Col>
          <Col numColSpan={1} numColSpanMd={2} numColSpanLg={3}>
            <Grid numItems={1} numItemsMd={4} numItemsLg={9}>
              <Col numColSpan={1} numColSpanMd={2} numColSpanLg={2}>
                <TrackOrder
                  id={id}
                  transmitedToCourierAt={transmitedToCourierAt}
                  deliveredAt={deliveredAt}
                  generateOrderAt={generateOrderAt}
                  generateOrderId={generateOrderId}
                  status={status}
                />
              </Col>
              <Col numColSpan={1} numColSpanMd={2} numColSpanLg={4}>
                <div className="mb-6">
                  <PaymentDetails cardLast4Digit={billingInfo.cardLast4Digit} />
                </div>
                <div>
                  <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
                    Billing Information
                  </Bold>
                  <BillingInfo billingData={billingInfo} />
                </div>
              </Col>
              <Col numColSpan={1} numColSpanMd={4} numColSpanLg={3}>
                <div className="lg:pl-20 pt-6 lg:pt-0">
                  <OrderSummary
                    productPrice={productPrice}
                    delivery={orderDeliverPrice}
                    taxes={orderTax}
                  />
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
