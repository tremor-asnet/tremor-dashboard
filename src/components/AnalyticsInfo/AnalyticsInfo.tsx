// Components
import Image from "next/image";
import { Title, Text, Flex, Card } from "@tremor/react";
import { MdEdit, MdPlace, MdRefresh } from "react-icons/md";

//Types
import { IAnalyticsInfo } from "@/types";

// Mock data
import { ANALYTIC_INFO } from "@/mocks/analytics";

export interface AnalyticsInfoProps {
  infoData: IAnalyticsInfo;
}

const AnalyticsInfo = ({ infoData }: AnalyticsInfoProps): JSX.Element => {
  const { photo, name, description, price, location } = infoData;
  return (
    <Card className="group overflow-visible p-4 mb-12 border-none ring-0 md:w-[calc(50%-0.75rem)] md:mr-6 md:even:mr-0 md:last:mr-0 lg:even:mr-6 analytics-info">
      <Flex className="justify-start flex-col items-start -mt-10">
        <Flex className="relative duration-500 ease-[cubic-bezier(0.34,1.61,0.7,1)] translate-y-0 group-hover:-translate-y-12 transition-all">
          <Image
            className="relative w-full rounded-xl shadow-lg z-10"
            src={photo}
            width={800}
            height={533}
            alt={name}
            sizes="(min-width: 768px) 33vw, 70vw"
          />
          <div className="w-full h-full absolute shadow-[0rem_0.25rem_0.375rem_-0.0625rem_rgba(0,0,0,0.1),0rem_0.125rem_0.25rem_-0.0625rem_rgba(0,0,0,0.06)] bg-black opacity-30 blur-md bg-cover rounded-lg scale-[0.94] left-0 -bottom-1"></div>
        </Flex>
        <Flex className="flex-col pt-7 px-2">
          <Flex className="justify-center cursor-pointer -mt-14">
            <MdRefresh className="text-[#e91e63] text-xl mx-6" />
            <MdEdit className="text-tremor-content-title text-xl mx-6" />
          </Flex>
          <Title className="w-full font-normal text-xl text-center leading-snug capitalize mt-8 mb-2">
            {name}
          </Title>
          <Text className="flex-wrap !text-base font-light leading-[1.6] tracking-[0.01071em] text-center">
            {description}
          </Text>
        </Flex>
        <div className="w-full h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] opacity-25 my-6" />
        <Flex className="p-2 pt-0">
          <Flex>
            <Text className="flex-wrap !text-base leading-[1.6] tracking-[0.01071em] text-center">
              &#36;{price}/night
            </Text>
          </Flex>
          <Flex className="justify-end">
            <MdPlace className="text-tremor-content text-xl mr-1" />
            <Text className="font-light">{location}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default AnalyticsInfo;
