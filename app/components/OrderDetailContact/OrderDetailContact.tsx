// Components
import {
  Flex,
  Text,
  Title,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@tremor/react";
import { CustomImage } from "@/components";

//Types
import { ProductDetail, TOrderDetail } from "@/types";

export interface OrderDetailContactProps {
  orderStatus: string;
  data: TOrderDetail[];
}

const OrderDetailContact = ({ orderStatus, data }: OrderDetailContactProps) => {
  return (
    <Table className="w-full">
      <TableBody>
        {data.map(item => {
          const {
            id = 1,
            products = [
              {
                id: 1,
                name: "Gold Glasses",
                count: 1,
                price: 40,
                url: "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/product-12.0b55635d.jpg",
              },
            ],
          } = item;
          return (
            <TableRow key={id}>
              <TableCell>
                {products?.map((product: ProductDetail) => (
                  <Flex key={product.id} className="w-auto justify-start">
                    <Flex className="w-auto justify-start mr-4">
                      <CustomImage
                        alt={product.name}
                        className="rounded-full"
                        height={110}
                        priority
                        src={product.url}
                        width={110}
                      />
                    </Flex>
                    <Flex className="w-auto flex-col justify-start items-start">
                      <Title className="text-tremor-content-title dark:text-dark-tremor-content-title text-primary font-semibold capitalize leading-[26px] tracking-[0.12px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px]">
                        {product.name}
                      </Title>
                      <Text className="text-sm dark:text-dark-romance font-light opacity-100 text-secondary leading-[21px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px]">
                        Order was {orderStatus} 2 days ago.
                      </Text>
                      <Text className="p-2 mt-4 font-bold text-white dark:text-white bg-green-500 text-xs rounded-tremor-small leading-[10.5px] tracking-[0.18px] uppercase">
                        {orderStatus}
                      </Text>
                    </Flex>
                  </Flex>
                ))}
              </TableCell>
              <TableCell>
                <Flex className="flex-col items-end">
                  <Button className="antialiased min-w-[64px] py-[12px] text-center uppercase sm:px-4 bg-gradient-primary dark:bg-gradient-pickled rounded-lg border-0 hover:shadow-btn-primary-hover px-2 py-1.5 leading-[17px] tracking-[0.35px]">
                    <Text className="uppercase py-[2px] text-xs font-bold text-white uppercase">
                      contact us
                    </Text>
                  </Button>
                  <Text className="mt-3 text-sm dark:text-dark-romance font-light opacity-100 text-secondar leading-[21px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px]">
                    Do you like the product? Leave us a review here.
                  </Text>
                </Flex>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default OrderDetailContact;
