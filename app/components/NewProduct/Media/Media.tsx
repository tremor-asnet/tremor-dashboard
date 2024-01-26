import { CustomImage } from "@/components";
import { Title, Text, Flex, Button, Bold, ProgressBar } from "@tremor/react";

const Media = ({
  name = "Gold Glasses",
  url = "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/product-12.0b55635d.jpg",
  isUploaded = false,
}: {
  name: string;
  url: string;
  isUploaded: boolean;
}) => {
  return (
    <>
      <Title className="font-primary font-bold text-primary dark:text-dark-primary text-xl leading-snug capitalize">
        Media
      </Title>
      <Text className="mt-8">Product Image</Text>
      <Flex>
        <label
          htmlFor="upload_products"
          className="flex flex-col items-center justify-center w-full p-5 my-2 min-h-[150px] text-secondary hover:text-secondary dark:text-dark-romance text-sm font-normal cursor-pointer border border-gray-300 rounded-md dropzone">
          <Text className={`p-4 ${isUploaded && "hidden"}`}>
            Drop files here to upload
          </Text>
          <input id="upload_products" type="file" multiple className="hidden" />
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
                  <Bold>71.4</Bold> kb
                </Text>
                <Text className="text-primary px-2 mb-4 bg-white opacity-70 rounded truncate max-w-[100px] product-file-name">
                  product-12.0b55635d.jpg
                </Text>
              </Flex>
              {/* Progress */}
              <Flex className="absolute z-50 top-1/2 left-1/2 -ml-10 opacity-0">
                <ProgressBar value={45} color="gray" className="w-20" />
              </Flex>
              {/* Success mark */}
              <Flex className="absolute z-30 top-1/2 left-1/2 -mt-[27px] -ml-[27px] opacity-0 product-success">
                <svg
                  width="54px"
                  height="54px"
                  viewBox="0 0 54 54"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Check</title>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd">
                    <path
                      d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"
                      stroke-opacity="0.198794158"
                      stroke="#747474"
                      fill-opacity="0.816519475"
                      fill="#FFFFFF"></path>
                  </g>
                </svg>
              </Flex>
              {/* Error mark */}
              <Flex className="absolute z-30 top-1/2 left-1/2 -mt-[27px] -ml-[27px] opacity-100 product-error">
                <svg
                  width="54px"
                  height="54px"
                  viewBox="0 0 54 54"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Error</title>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd">
                    <g
                      stroke="#747474"
                      stroke-opacity="0.198794158"
                      fill="#FFFFFF"
                      fill-opacity="0.816519475">
                      <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path>
                    </g>
                  </g>
                </svg>
              </Flex>
              {/* Remove file */}
              <Button
                className="text-primary font-normal hover:text-primary dark:text-dark-primary text-xs px-6 py-0 product-remove"
                variant="light">
                Remove file
              </Button>
            </Flex>
          </Flex>
        </label>
      </Flex>
    </>
  );
};

export default Media;
