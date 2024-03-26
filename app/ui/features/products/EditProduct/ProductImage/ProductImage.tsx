import { ChangeEvent } from "react";

// Components
import { Title, Text, Flex, Card } from "@tremor/react";
import { LoadingIndicator, CustomImage, Button } from "@/ui/components";
import { VARIANT_BUTTON } from "@/constants";

const ProductImage = ({
  name,
  desc,
  image,
  disabled = false,
  onRemoveImage,
  onUpload,
  isUpload = false,
}: {
  name: string;
  desc: string;
  image: string;
  disabled?: boolean;
  isUpload?: boolean;
  onRemoveImage: () => void;
  onUpload: (file: File) => void;
}): JSX.Element => {
  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <Card className="w-full bg-tremor-primary dark:bg-dark-tremor-primary group overflow-visible p-4 border-none ring-0 md:even:mr-0 md:last:mr-0 lg:even:mr-6 analytics-info">
      <Flex
        alignItems="start"
        flexDirection="col"
        justifyContent="start"
        className="-mt-10">
        <Flex className="relative duration-500 ease-[cubic-bezier(0.34,1.61,0.7,1)] translate-y-0 group-hover:-translate-y-12 transition-all z-10">
          {isUpload ? (
            <div className="w-full h-52 md:h-80 rounded-lg bg-gray-200 dark:bg-gray-700 flex flex-col items-center justify-center">
              <LoadingIndicator
                width={5}
                height={5}
                fillColor="river-bed-500"
              />
              <span className="mt-3 dark:text-white">Loading...</span>
            </div>
          ) : (
            <CustomImage
              className="relative w-full h-52 md:h-80 rounded-xl rounded-xl shadow-lg z-10 object-cover  shadow-[0rem_0.3125rem_0.625rem_0rem_rgba(0,0,0,0.12)]"
              src={image}
              width={800}
              height={500}
              alt={name}
            />
          )}
        </Flex>
        <Flex flexDirection="col" className="pt-7 px-2">
          <Flex justifyContent="center" className="-mt-16">
            <div className="antialiased text-center uppercase bg-gradient-primary dark:bg-gradient-pickled rounded-lg border-0 shadow-btn-primary hover:shadow-btn-primary-hover px-3 py-2 cursor-pointer leading-[17px] tracking-[0.35px]">
              <label className="uppercase text-xs font-bold text-white uppercase mx-2 cursor-pointer">
                Edit
                <input
                  type="file"
                  className="hidden"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleUploadFile}
                />
              </label>
            </div>

            <Button
              type="button"
              additionalClass="antialiased px-2 py-1.5 text-center uppercase text-xs bg-secondary dark:bg-gradient-pickled rounded-md border border-red-500 hover:border-red-500 dark:border-attention hover:dark:border-attention hover:bg-transparent hover:opacity-75 mx-2 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={onRemoveImage}
              disabled={disabled}
              variantTremor={VARIANT_BUTTON.LIGHT}>
              <Text className="py-[1px] text-xs font-bold text-attention dark:text-attention uppercase mx-2">
                Remove
              </Text>
            </Button>
          </Flex>

          <Title className="w-full font-primary font-normal tracking-normal text-primary dark:text-dark-primary text-xl text-center leading-snug capitalize mt-8 mb-2">
            {name}
          </Title>
          <div
            className="text-secondary dark:text-dark-romance font-primary flex-wrap text-tremor-title font-light leading-[26px] tracking-[0.17136px] text-center  text-xs lg:text-base line-clamp-4"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductImage;
