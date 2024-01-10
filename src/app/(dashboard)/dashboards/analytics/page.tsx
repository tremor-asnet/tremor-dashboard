import { lazy } from "react";

// Components
import { Card, Flex } from "@tremor/react";

const AnalyticsInfo = lazy(
  () => import("@/components/AnalyticsInfo/AnalyticsInfo"),
);
const AnalyticsStatisticCard = lazy(
  () => import("@/components/AnalyticsStatisticCard/AnalyticsStatisticCard"),
);
const ColumnChart = lazy(() => import("@/components/ColumnChart/ColumnChart"));
const AnalyticsLineChart = lazy(
  () => import("@/components/AnalyticsLineChart/AnalyticsLineChart"),
);
const SalesByCountry = lazy(
  () => import("@/components/SalesByCountry/SalesByCountry"),
);

//Types
import { IAnalyticsInfo, CHART_TYPE, LINE_CHART } from "@/types";

// Services
import { getAnalytics } from "@/app/services";

type TAnalyticsStatistical = {
  id: string;
  type: string;
  amount: string;
  totalAmount: string;
  duration: string;
};

// Mock data
import { LINE_CHART_DATA, WEBSITE_CHART } from "@/mocks";

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
    <Flex className="flex-col flex-wrap justify-start">
      {/* Sales card  */}
      <SalesByCountry
        title="Sales by Country"
        chart="/assets/images/analytics/analytics-sales-chart.webp"
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
        {dataLineCharts?.map((item: LINE_CHART) => (
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
        {sale_statistical?.map((item: TAnalyticsStatistical) => (
          <AnalyticsStatisticCard key={item.type} statisticalData={item} />
        ))}
      </Flex>
      {/* Info cards */}
      <Flex className="justify-start flex-wrap lg:flex-nowrap flex-col md:flex-row items-start mt-12">
        {apartment_statistic?.map((item: IAnalyticsInfo) => (
          <AnalyticsInfo key={item.id} infoData={item} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Analytics;
