// Components
import { CustomImage } from "@/components";
import { Title, Text, Flex, Button, Bold, ProgressBar } from "@tremor/react";

// Icons
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";

const Media = ({
  name = "Gold Glasses",
  url = "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/product-12.0b55635d.jpg",
  path = "product-12.0b55635d.jpg",
  size = "71.4",
  isUploaded = false,
}: {
  name: string;
  url: string;
  path: string;
  size: string;
  isUploaded: boolean;
}) => {
  return (
    <>
      <Title className="font-primary font-bold text-primary dark:text-dark-primary text-xl leading-snug capitalize">
        Media
      </Title>
      <Text className="mt-8">Product Image</Text>
      <Flex className="flex flex-col items-center justify-center w-full p-5 my-2 min-h-[150px] text-secondary hover:text-secondary dark:text-dark-romance text-sm font-normal cursor-pointer border border-gray-300 rounded-md">
        <label htmlFor="uploadProducts" className="cursor-pointer dropzone">
          <Text className={`p-4 ${isUploaded && "hidden"}`}>
            Drop files here to upload
          </Text>
        </label>
        <input id="uploadProducts" type="file" multiple className="hidden" />
        {/* Images preview */}
        <Flex justifyContent="start" className={`${!isUploaded && "hidden"}`}>
          <Flex
            flexDirection="col"
            className="relative w-auto m-4 group product-url">
            {/* Image url */}
            <Flex className="overflow-hidden rounded-[20px]">
              <CustomImage
                alt={name}
                className="relative z-10 group-hover:blur group-hover:scale-105 product-img"
                height={120}
                priority
                src={url}
                width={120}
              />
            </Flex>
            {/* Image detail */}
            <Flex
              flexDirection="col"
              justifyContent="start"
              className="absolute z-20 min-h-full max-h-full px-2 py-6 product-detail">
              <Text className="text-tremor-title text-tremor-content-emphasis dark:text-dark-title uppercase px-2 mb-4 leading-5 bg-white opacity-70 rounded product-size">
                <Bold>{size}</Bold> kb
              </Text>
              <Text className="text-primary px-2 mb-4 bg-white opacity-70 rounded truncate max-w-[100px] product-file-name">
                {path}
              </Text>
            </Flex>
            {/* Progress */}
            <Flex className="absolute z-50 top-1/2 left-1/2 -ml-10 opacity-0">
              <ProgressBar value={45} color="gray" className="w-20" />
            </Flex>
            {/* Success mark */}
            <Flex className="absolute z-30 top-1/2 left-1/2 -mt-[27px] -ml-[27px] opacity-0 product-success">
              <IoMdCheckmarkCircle
                stroke="#747474"
                stroke-opacity="0.198794158"
                fill-opacity="0.816519475"
                className="w-16 h-16 text-white"
              />
            </Flex>
            {/* Error mark */}
            <Flex className="absolute z-30 top-1/2 left-1/2 -mt-[27px] -ml-[27px] opacity-100 product-error">
              <IoMdCloseCircle
                stroke="#747474"
                stroke-opacity="0.198794158"
                fill-opacity="0.816519475"
                className="w-16 h-16 text-white"
              />
            </Flex>
            {/* Remove file */}
            <Button
              className="text-primary font-normal hover:text-primary dark:text-dark-primary text-xs px-6 py-0 product-remove"
              variant="light">
              Remove file
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Media;
