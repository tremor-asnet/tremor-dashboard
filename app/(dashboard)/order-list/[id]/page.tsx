// Components
import { InvoiceHeader } from "@/components/OrderDetails/InvoiceHeader";
import { OrderSummary } from "@/components/OrderDetails/OrderSummary";
import { Card, Col, Divider, Flex, Grid } from "@tremor/react";
import { OrderContact, TrackOrder } from "@/components";
import PaymentDetails from "@/components/OrderDetails/PaymentDetails";
import BillingInfo from "@/components/OrderDetails/BillingInfo";

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

  const monies = {
    productPrice: productPrice,
    delivery: orderDeliverPrice,
    taxes: orderTax,
  };

  return (
    <Flex justifyContent="center" className="w-full bg-transparent">
      <Card className="w-full md:w-2/3 dark:bg-dark_blue">
        <Grid numItems={1} numItemsMd={2} numItemsLg={3} className="gap-2">
          <Col numColSpan={1} numColSpanMd={2} numColSpanLg={3}>
            <InvoiceHeader
              id={id}
              createdAt={createdAt}
              orderCode={orderCode}
            />
            <Divider />
          </Col>
          <Col numColSpan={1} numColSpanMd={2} numColSpanLg={3}>
            <OrderContact name={firstProduct.name} url={firstProduct.url} />
            <Divider />
          </Col>
          <Col numColSpan={1} numColSpanMd={2} numColSpanLg={3}>
            <Grid numItems={1} numItemsMd={2} numItemsLg={3} className="gap-4">
              <div className="w-full">
                <TrackOrder
                  id={trackOrderInfo.id}
                  transmitedToCourierAt={transmitedToCourierAt}
                  deliveredAt={deliveredAt}
                  generateOrderAt={generateOrderAt}
                  generateOrderId={generateOrderId}
                />
              </div>
              <div className="w-full">
                <div className="mb-4">
                  <PaymentDetails cardLast4Digit={billingInfo.cardLast4Digit} />
                </div>
                <BillingInfo billingData={billingInfo} />
              </div>
              <Col numColSpanMd={2} numColSpanLg={1}>
                <div className="w-full lg:pl-20">
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
