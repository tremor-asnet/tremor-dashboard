import { SalesRevenueChart } from "@/components";
import SalesByCountry from "@/components/SalesByCountry/SalesByCountry";
import SalesStatisticCard from "@/components/SalesStatisticCard/SalesStatisticCard";
import TopSellingProducts from "@/components/TopSellingProducts/TopSellingProducts";
import { REVENUE_CHART_DATA } from "@/mocks";
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

type TRevenueChart = {};

export const metadata = {
  title: "Sales - Tremor Dashboard",
};

const Sales = async () => {
  const saleData = await getSales();
  const analyticsData = await getAnalytics();
  console.log("saleData: ", saleData.header_info);

  return (
    <Flex className="flex-col">
      {saleData.header_info?.map((item: TSalesStatistical) => (
        <SalesStatisticCard key={item.type} statisticsData={item} />
      ))}
      <TopSellingProducts
        title="Top Selling Products"
        data={saleData.top_selling_products}
      />
      <SalesByCountry
        title="Sales by Country"
        isAnalytics={false}
        data={analyticsData.sale_by_country}
      />
      <SalesRevenueChart dataChart={REVENUE_CHART_DATA.data} />,
    </Flex>
  );
};

export default Sales;
