// Components
import { Flex } from "@tremor/react";
import AnalyticsSalesCard from "@/components/AnalyticsSalesCard/AnalyticsSalesCard";
import AnalyticsInfo from "@/components/AnalyticsInfo/AnalyticsInfo";
import AnalyticsStatisticCard from "@/components/AnalyticsStatisticCard/AnalyticsStatisticCard";
import ColumnChart from "@/components/ColumnChart/ColumnChart";
import AnalyticsLineChart from "@/components/AnalyticsLineChart/AnalyticsLineChart";

//Types
import { IAnalyticsInfo, CHART_TYPE } from "@/types";

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
import { ANALYTICS_DAILY_CHART, ANALYTICS_TASK_CHART } from "@/mocks/charts";

const Analytics = async () => {
  const AnalyticsData = await getAnalytics();

  const { performance_statistic, daily_sale_statistic } = AnalyticsData;

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
        {/* Daily Sales chart */}
        <Flex>
          <AnalyticsLineChart
            dataChart={daily_sale_statistic.data || ANALYTICS_TASK_CHART}
            type={CHART_TYPE.TASK}
            title={daily_sale_statistic.display}
            subTitle={daily_sale_statistic.desc}
            scheduleText={daily_sale_statistic.modified}
            isDailyChart={true}
          />
        </Flex>
        {/* Completed Tasks chart */}
        <Flex>
          <AnalyticsLineChart
            dataChart={performance_statistic.data || ANALYTICS_DAILY_CHART}
            title={performance_statistic.display}
            subTitle={performance_statistic.desc}
            scheduleText={performance_statistic.modified}
            descValue={performance_statistic.descValue}
            isDailyChart={false}
          />
        </Flex>
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
