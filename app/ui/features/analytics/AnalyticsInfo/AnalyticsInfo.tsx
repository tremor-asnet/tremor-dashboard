import { Title, Text, Flex, Card } from "@tremor/react";

// React Icon
import { MdEdit, MdRefresh } from "react-icons/md";
import { PiMapPinFill } from "react-icons/pi";

// Components
import { CustomImage, Popover } from "@/ui/components";

//Types
import { AnalyticsInfoData } from "@/types";

// Helpers
import { moneyFormat } from "@/helpers";

// Constants
import { CURRENCY } from "@/constants";

export interface AnalyticsInfoProps {
  infoData: AnalyticsInfoData;
}

const AnalyticsInfo = ({ infoData }: AnalyticsInfoProps): JSX.Element => {
  const { photo, name, description, price, location } = infoData;
  return (
    <Card className="bg-tremor-primary dark:bg-dark-tremor-primary group overflow-visible p-4 mb-12 border-none ring-0 md:w-[calc(50%-0.75rem)] md:mr-6 md:even:mr-0 md:last:mr-0 lg:even:mr-6 hover:cursor-pointer analytics-info">
      <Flex
        justifyContent="start"
        flexDirection="col"
        alignItems="start"
        className="-mt-10">
        <Flex className="relative duration-500 ease-[cubic-bezier(0.34,1.61,0.7,1)] translate-y-0 group-hover:-translate-y-12 transition-all">
          <CustomImage
            className="relative w-full rounded-xl shadow-lg z-10"
            src={photo}
            width={800}
            height={533}
            alt={name}
            sizes="(min-width: 768px) 33vw, 70vw"
          />
          <div className="w-full h-full absolute shadow-[0rem_0.25rem_0.375rem_-0.0625rem_rgba(0,0,0,0.1),0rem_0.125rem_0.25rem_-0.0625rem_rgba(0,0,0,0.06)] bg-black blur-md bg-cover rounded-lg scale-[0.94] left-0 -bottom-1"></div>
        </Flex>
        <Flex flexDirection="col" className="pt-7 px-2">
          <Flex justifyContent="center" className="cursor-pointer -mt-14">
            <MdRefresh className="text-[#e91e63] text-xl mx-6" />
            <MdEdit className="text-tremor-content-title text-xl mx-6" />
          </Flex>
          <Title className="w-full font-primary font-normal tracking-normal text-primary dark:text-dark-primary text-xl text-center leading-snug capitalize mt-8 mb-2">
            {name}
          </Title>
          <Text className="text-tertiary dark:text-dark-romance font-primary flex-wrap text-tremor-title font-light leading-[26px] tracking-[0.17136px] text-center">
            {description}
          </Text>
        </Flex>
        <div className="w-full h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] dark:bg-gradient-divider opacity-25 my-6" />
        <Flex className="p-2 pt-0">
          <Flex>
            <Text className="flex-wrap font-primary font-normal text-tertiary dark:text-dark-romance leading-[26px] tracking-[0.17136px] text-center">
              {moneyFormat({
                value: price,
                currency: CURRENCY.DOLLAR,
              })}
              /night
            </Text>
          </Flex>
          <Flex
            justifyContent="end"
            className="font-primary text-tertiary font-light">
            <PiMapPinFill className="text-tremor-content text-xl mr-1" />
            <Popover content={location} className="min-w-[200px]">
              <Text className="text-tertiary dark:text-dark-romance tracking-[0.4px] leading-[21px] truncate max-w-[120px] xs:max-w-[150px] xl:max-w-[200px]">
                {location}
              </Text>
            </Popover>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default AnalyticsInfo;
