// Components
import { Flex } from "@tremor/react";
import AnalyticsSalesCard from "@/components/AnalyticsSalesCard/AnalyticsSalesCard";
import AnalyticsInfo from "@/components/AnalyticsInfo/AnalyticsInfo";
import AnalyticsStatisticCard from "@/components/AnalyticsStatisticCard/AnalyticsStatisticCard";
import ColumnChart from "@/components/ColumnChart/ColumnChart";
import AnalyticsLineChart from "@/components/AnalyticsLineChart/AnalyticsLineChart";

//Types
import { IAnalyticsInfo, CHART_TYPE, LINE_CHART } from "@/types";

// Actions
import { getAnalytics } from "@/app/actions/analyticsActions";

type AnalyticsStatistical = {
  type: string;
  amount: string;
  totalAmount: string;
  duration: string;
};

// Mock data
import {
  ANALYTIC_SALES_CARD,
  STATISTICAL_DATA,
  ANALYTIC_INFO,
  WEBSITE_CHART,
} from "@/mocks/analytics";
import { LINE_CHART_DATA } from "@/mocks/charts";

const Analytics = async () => {
  const AnalyticsData = await getAnalytics();

  const { performance_statistic, daily_sale_statistic } = AnalyticsData;

  const DataLineCharts =
    [performance_statistic, daily_sale_statistic] || LINE_CHART_DATA;

  return (
    <Flex className="flex-col flex-wrap justify-start">
      {/* Sales card  */}
      <AnalyticsSalesCard
        title="Sales by Country"
        chart="/assets/images/analytics/analytics-sales-chart.webp"
        isAnalytics={true}
        data={ANALYTIC_SALES_CARD}
      />
      {/* Charts */}
      <Flex className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-6">
        {/* Website Views chart */}
        <Flex>
          <ColumnChart
            data={WEBSITE_CHART}
            title={"website views"}
            subTitle={"Last Campaign Performance"}
            scheduleText={"campaign sent 2 days ago"}
          />
        </Flex>
        {/* Line chart */}
        {DataLineCharts?.map((item: LINE_CHART) => (
          <Flex key={item.id}>
            <AnalyticsLineChart
              dataChart={item.data || LINE_CHART_DATA}
              type={item.id === "sale" ? CHART_TYPE.TASK : CHART_TYPE.DAILY}
              title={item.display}
              subTitle={item.desc}
              scheduleText={item.modified}
              isDailyChart={item.id === "sale" ? true : false}
            />
          </Flex>
        ))}
      </Flex>
      {/* Statistic cards  */}
      <Flex className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-0 lg:gap-y-6 md:gap-x-6">
        {STATISTICAL_DATA?.map((item: AnalyticsStatistical) => (
          <AnalyticsStatisticCard key={item.type} statisticalData={item} />
        ))}
      </Flex>
      {/* Info cards  */}
      <Flex className="justify-start flex-wrap lg:flex-nowrap flex-col md:flex-row items-start mt-12">
        {ANALYTIC_INFO?.map((item: IAnalyticsInfo) => (
          <AnalyticsInfo key={item.id} infoData={item} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Analytics;
