import dynamic from "next/dynamic";

// Components
import { Flex } from "@tremor/react";
import {
  AnalyticsInfo,
  AnalyticsStatisticCard,
  ColumnChart,
  SalesByCountry,
} from "@/ui/features/analytics";

const AnalyticsLineChart = dynamic(
  () => import("@/ui/features/analytics/AnalyticsLineChart/AnalyticsLineChart"),
);

//Types
import { AnalyticsInfoData, LineChart } from "@/types";

// Actions
import { getAnalytics } from "@/services";

// Mock data
import { LINE_CHART_DATA, WEBSITE_CHART } from "@/mocks";

// Constants
import { CHART_TYPE } from "@/constants";

export const metadata = {
  title: "Analytics - Tremor Dashboard",
};

interface AnalyticsStatistical {
  id: string;
  type: string;
  amount: number;
  amountChange: number;
  duration: string;
  amountChangeType: number;
}

const Analytics = async () => {
  const analyticsData = await getAnalytics();
  const {
    performance_statistic,
    daily_sale_statistic,
    sale_by_country,
    sale_statistical,
    apartment_statistic,
    web_statistic,
  } = analyticsData;

  const dataLineCharts =
    [daily_sale_statistic, performance_statistic] || LINE_CHART_DATA;

  return (
    <Flex
      justifyContent="start"
      flexDirection="col"
      className="flex-wrap analytics-page">
      {/* Sales card  */}
      <SalesByCountry
        title="Sales by Country"
        isAnalytics={true}
        data={sale_by_country}
      />
      {/* Charts */}
      <Flex className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-6">
        {/* Website Views chart */}
        <Flex>
          <ColumnChart webChartData={web_statistic || WEBSITE_CHART} />
        </Flex>
        {/* Line chart */}
        {dataLineCharts?.map((item: LineChart) => (
          <Flex key={item.id}>
            <AnalyticsLineChart
              dataChart={item.data}
              type={item.id}
              title={item.display}
              subTitle={item.desc}
              scheduleText={item.modified}
              descValue={item.descValue}
              isDailyChart={item.id === CHART_TYPE.SALE}
            />
          </Flex>
        ))}
      </Flex>
      {/* Statistic cards */}
      <Flex className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-0 lg:gap-y-6 md:gap-x-6">
        {sale_statistical?.map((item: AnalyticsStatistical) => (
          <AnalyticsStatisticCard key={item.type} statisticalData={item} />
        ))}
      </Flex>
      {/* Info cards */}
      <Flex
        justifyContent="start"
        alignItems="start"
        flexDirection="col"
        className="flex-wrap lg:flex-nowrap md:flex-row mt-12">
        {apartment_statistic?.map((item: AnalyticsInfoData) => (
          <AnalyticsInfo key={item.id} infoData={item} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Analytics;
