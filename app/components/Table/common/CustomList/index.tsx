import { OrderProduct } from "@/types";

interface CustomListProps {
  products: OrderProduct[];
}

export const CustomList = ({ products }: CustomListProps) => (
  <p className="py-0.5 text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px] order-product">
    {products[0].name}
  </p>
);
