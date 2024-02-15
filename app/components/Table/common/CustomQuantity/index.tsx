import { OrderProduct } from "@/types";

interface QuantityProps {
  products: OrderProduct[];
}

export const CustomQuantity = ({ products }: QuantityProps) => (
  <p className="py-0.5 text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px] order-product">
    {products[0].count}
  </p>
);
