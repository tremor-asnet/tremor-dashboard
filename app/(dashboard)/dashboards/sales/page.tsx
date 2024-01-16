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
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-5">
      {saleData.header_info?.map((item: TSalesStatistical) => (
        <div className="col-span-6 sm:col-span-2" key={item.type}>
          <SalesStatisticCard statisticsData={item} />
        </div>
      ))}
      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <ChannelChart title="Channels" channelChartData={saleData.channels} />
      </div>
      <div className="grid grid-cols-subgrid col-span-6 sm:col-span-3 lg:col-span-4">
        <SalesRevenueChart
          dataChart={REVENUE_CHART_DATA.data}
          revenueType="Revenue"
        />
      </div>
      <div className="grid grid-cols-subgrid col-span-6 lg:col-span-4">
        <SalesByAge title="Sales by age" data={saleData.sales_by_age} />
      </div>
      <div className="col-span-6 lg:col-span-2">
        <SalesByCountry
          title="Sales by Country"
          isAnalytics={false}
          data={analyticsData.sale_by_country}
        />
      </div>
      <div className="grid grid-cols-subgrid col-span-6">
        <TopSellingProducts
          title="Top Selling Products"
          data={saleData.top_selling_products}
        />
      </div>
    </div>
  );
};

export default Sales;
