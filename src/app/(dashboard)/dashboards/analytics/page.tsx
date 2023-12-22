// "use client";

// Components
import { Flex } from "@tremor/react";
import AnalyticsSalesCard from "@/components/AnalyticsSalesCard/AnalyticsSalesCard";
import AnalyticsInfo from "@/components/AnalyticsInfo/AnalyticsInfo";
import AnalyticsStatisticCard from "@/components/AnalyticsStatisticCard/AnalyticsStatisticCard";
import WebsiteChart from "@/components/WebsiteChart/WebsiteChart";

//Types
import { IAnalyticsInfo } from "@/types";
type AnalyticsStatistical = {
  type: string;
  amount: string;
  totalAmount: string;
  duration: string;
};

// Mock data
import { WEBSITE_CHART } from "@/mocks/analytics";

import {
  getAnalyticInfo,
  getSaleByCountryChart,
  getStatisticalCard,
} from "@/app/actions/analyticsAction";
import AnalyticsLineChart, {
  CHART_TYPE,
} from "@/components/AnalyticsLineChart/AnalyticsLineChart";
import { ANALYTICS_DAILY_CHART, ANALYTICS_TASK_CHART } from "@/mocks";

const Analytics = async () => {
  const saleByCountryData = await getSaleByCountryChart();
  const statisticalCardData = await getStatisticalCard();
  const analyticData = await getAnalyticInfo();

  return (
    <Flex className="flex-col flex-wrap justify-start">
      {/* Sales card  */}
      <AnalyticsSalesCard
        title="Sales by Country"
        chart="/assets/images/analytics/analytics-sales-chart.webp"
        isAnalytics={true}
        data={saleByCountryData.data}
      />
      {/* Charts */}
      <Flex className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-6">
        {/* Website Views chart */}
        <Flex>
          <WebsiteChart
            data={WEBSITE_CHART}
            title={"website views"}
            subTitle={"Last Campaign Performance"}
            scheduleText={"campaign sent 2 days ago"}
          />
        </Flex>
        {/* Daily Sales chart */}
        <Flex>
          <AnalyticsLineChart
            dataChart={ANALYTICS_TASK_CHART}
            type={CHART_TYPE.TASK}
            title={"Daily Sales"}
            subTitle={"increase in today sales."}
            scheduleText={"updated 4 min ago"}
            isDailyChart={true}
          />
        </Flex>
        {/* Completed Tasks chart */}
        <Flex>
          <AnalyticsLineChart
            dataChart={ANALYTICS_DAILY_CHART}
            title={"Completed Tasks"}
            subTitle={"Last Campaign Performance"}
            scheduleText={"just updated"}
            isDailyChart={false}
          />
        </Flex>
      </Flex>
      {/* Statistic cards  */}
      <Flex className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-0 lg:gap-y-6 md:gap-x-6">
        {statisticalCardData.data?.map((item: AnalyticsStatistical) => (
          <AnalyticsStatisticCard key={item.type} statisticalData={item} />
        ))}
      </Flex>
      {/* Info cards  */}
      <Flex className="justify-start flex-wrap lg:flex-nowrap flex-col md:flex-row items-start mt-12">
        {analyticData.data?.map((item: IAnalyticsInfo) => (
          <AnalyticsInfo key={item.id} infoData={item} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Analytics;
