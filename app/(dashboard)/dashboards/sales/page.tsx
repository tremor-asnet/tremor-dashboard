import { Col, Grid } from "@tremor/react";

// Components
import {
  SalesRevenueChart,
  ChannelChart,
  SalesByAge,
  SalesByCountry,
  SalesStatisticCard,
  TopSellingProducts,
} from "@/components";

import { REVENUE_CHART_DATA } from "@/mocks";

// Services
import { getAnalytics, getSales } from "@/services";

type TSalesStatistical = {
  id: string;
  type: string;
  amount: string;
  totalAmount: string;
  duration: string;
};

export const metadata = {
  title: "Sales - Tremor Dashboard",
};

const Sales = async () => {
  const saleData = await getSales();
  const analyticsData = await getAnalytics();

  return (
    <Grid numItems={1} numItemsMd={3} className="gap-5 sale-page">
      <Col numColSpan={1} numColSpanMd={3}>
        <Grid className="gap-5" numItemsMd={3}>
          {saleData.header_info?.map((item: TSalesStatistical) => (
            <div key={item.type}>
              <SalesStatisticCard statisticsData={item} />
            </div>
          ))}
        </Grid>
      </Col>

      <ChannelChart title="Channels" channelChartData={saleData.channels} />

      <Col numColSpan={1} numColSpanMd={2}>
        <SalesRevenueChart
          dataChart={REVENUE_CHART_DATA.data}
          revenueType="Revenue"
        />
      </Col>
      <Col numColSpan={1} numColSpanMd={2}>
        <SalesByAge title="Sales by age" data={saleData.sales_by_age} />
      </Col>

      <SalesByCountry
        title="Sales by Country"
        isAnalytics={false}
        data={analyticsData.sale_by_country}
      />

      <Col numColSpan={1} numColSpanMd={3}>
        <TopSellingProducts
          title="Top Selling Products"
          data={saleData.top_selling_products}
        />
      </Col>
    </Grid>
  );
};

export default Sales;
