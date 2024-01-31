import { Title, Text, Flex, Card, Button } from "@tremor/react";

// Components
import { CustomImage } from "@/components";

const ProductImage = ({
  name,
  desc,
  image,
}: {
  name: string;
  desc: string;
  image: string;
}): JSX.Element => {
  return (
    <Card className="w-full bg-tremor-primary dark:bg-dark-tremor-primary group overflow-visible p-4 border-none ring-0 md:even:mr-0 md:last:mr-0 lg:even:mr-6 hover:cursor-pointer analytics-info">
      <Flex className="justify-start flex-col items-start -mt-10">
        <Flex className="relative duration-500 ease-[cubic-bezier(0.34,1.61,0.7,1)] translate-y-0 group-hover:-translate-y-12 transition-all">
          <CustomImage
            className="relative w-full rounded-xl h-[500px] rounded-xl shadow-lg z-10 object-cover  shadow-[0rem_0.3125rem_0.625rem_0rem_rgba(0,0,0,0.12)]"
            src={image}
            width={800}
            height={500}
            alt={name}
          />
        </Flex>
        <Flex className="flex-col pt-7 px-2">
          <Flex className="justify-center cursor-pointer -mt-16">
            <Button className="antialiased py-[12px] text-center uppercase bg-gradient-primary dark:bg-gradient-pickled rounded-lg border-0 hover:shadow-btn-primary-hover px-2 py-1.5 leading-[17px] tracking-[0.35px]">
              <Text className="uppercase py-[2px] text-xs font-bold text-white uppercase mx-2">
                Edit
              </Text>
            </Button>
            <Button className="antialiased px-2 py-1.5 text-center uppercase text-xs bg-secondary dark:bg-gradient-pickled rounded-md border-red-500 hover:border-red-500 dark:border-transparent dark:hover:border-transparent hover:bg-transparent hover:opacity-75 mx-2">
              <Text className="uppercase py-[1px] text-xs font-bold text-red-500 uppercase mx-2">
                Remove
              </Text>
            </Button>
          </Flex>
          <Title className="w-full font-primary font-normal tracking-normal text-primary dark:text-dark-primary text-xl text-center leading-snug capitalize mt-8 mb-2">
            {name}
          </Title>
          <div
            className="text-secondary dark:text-dark-romance font-primary flex-wrap text-tremor-title font-light leading-[26px] tracking-[0.17136px] text-center mb-4 text-xs lg:text-base"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductImage;
