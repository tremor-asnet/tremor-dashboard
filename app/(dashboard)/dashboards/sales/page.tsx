import SalesByCountry from "@/components/SalesByCountry/SalesByCountry";
import SalesStatisticCard from "@/components/SalesStatisticCard/SalesStatisticCard";
import TopSellingProducts from "@/components/TopSellingProducts/TopSellingProducts";
import { getAnalytics } from "@/services";
import { getSales } from "@/services/salesServices";
import { TSalesStatistic } from "@/types";
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

  return (
    <Flex className="flex-col">
      <Flex className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0 lg:gap-y-6 md:gap-x-6">
        {analyticsData.header_info?.map((item: TSalesStatistical) => (
          <SalesStatisticCard key={item.type} statisticsData={item} />
        ))}
      </Flex>
      <TopSellingProducts
        title="Top Selling Products"
        data={saleData.top_selling_products}
      />
      <SalesByCountry
        title="Sales by Country"
        isAnalytics={false}
        data={analyticsData.sale_by_country}
      />
    </Flex>
  );
};

export default Sales;
