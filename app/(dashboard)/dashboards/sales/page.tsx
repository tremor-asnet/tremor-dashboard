import { SalesRevenueChart } from "@/components";
import ChannelsChart from "@/components/ChannelsChart/ChannelsChart";
import SalesByCountry from "@/components/SalesByCountry/SalesByCountry";
import SalesStatisticCard from "@/components/SalesStatisticCard/SalesStatisticCard";
import TopSellingProducts from "@/components/TopSellingProducts/TopSellingProducts";
import { CHANNELS_CHART_DATA, REVENUE_CHART_DATA } from "@/mocks";
import { getAnalytics } from "@/services";
import { getSales } from "@/services/salesServices";
import { Flex } from "@tremor/react";

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
  console.log("saleData: ", saleData.revenue);

  return (
    <Flex className="flex-col">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-6 pb-6">
        {saleData.header_info?.map((item: TSalesStatistical) => (
          <SalesStatisticCard key={item.type} statisticsData={item} />
        ))}
      </div>
      <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 py-6">
        <div className="group flex items-end overflow-hidden rounded-lg shadow-lg">
          <ChannelsChart
            title="Channels"
            channelChartData={saleData.channels}
          />
        </div>
        <div className="group relative flex items-end overflow-hidden rounded-lg shadow-lg md:col-span-2">
          <SalesRevenueChart
            revenueType="Revenue"
            dataChart={REVENUE_CHART_DATA.data}
          />
        </div>
      </div>
      <SalesByCountry
        title="Sales by Country"
        isAnalytics={false}
        data={analyticsData.sale_by_country}
      />
      <TopSellingProducts
        title="Top Selling Products"
        data={saleData.top_selling_products}
      />
    </Flex>
  );
};

export default Sales;
