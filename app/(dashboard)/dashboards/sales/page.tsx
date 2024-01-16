// Components
import { SalesRevenueChart } from "@/components";
import ChannelChart from "@/components/ChannelsChart/ChannelsChart";
import SalesByAge from "@/components/SalesByAge";
import SalesByCountry from "@/components/SalesByCountry/SalesByCountry";
import SalesStatisticCard from "@/components/SalesStatisticCard/SalesStatisticCard";
import TopSellingProducts from "@/components/TopSellingProducts/TopSellingProducts";

// Mocks
import {
  CHANNELS_CHART_DATA,
  REVENUE_CHART_DATA,
  SALES_AGE_CHART,
  SALES_BY_COUNTRY,
  STATISTICS_DATA,
  TOP_SELLING_PRODUCTS_DATA,
} from "@/mocks";

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

const Sales = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-5">
      {STATISTICS_DATA.map((item: TSalesStatistical) => (
        <div className="col-span-6 sm:col-span-2" key={item.type}>
          <SalesStatisticCard statisticsData={item} />
        </div>
      ))}
      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <ChannelChart title="Channels" channelChartData={CHANNELS_CHART_DATA} />
      </div>
      <div className="grid grid-cols-subgrid col-span-6 sm:col-span-3 lg:col-span-4">
        <SalesRevenueChart dataChart={REVENUE_CHART_DATA.data} />
      </div>
      <div className="grid grid-cols-subgrid col-span-6 lg:col-span-4">
        <SalesByAge title="Sales by age" data={SALES_AGE_CHART} />
      </div>
      <div className="col-span-6 lg:col-span-2">
        <SalesByCountry
          title="Sales by Country"
          isAnalytics={false}
          data={SALES_BY_COUNTRY}
        />
      </div>
      <div className="grid grid-cols-subgrid col-span-6">
        <TopSellingProducts
          title="Top Selling Products"
          data={TOP_SELLING_PRODUCTS_DATA}
        />
      </div>
    </div>
  );
};

export default Sales;
