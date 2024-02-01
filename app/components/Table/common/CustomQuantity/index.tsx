import { OrderProduct } from "@/types";

interface QuantityProps {
  quantity: OrderProduct[];
}

export const CustomQuantity = ({ quantity }: QuantityProps) => (
  <>
    {quantity?.map(quantity => (
      <p
        key={quantity.id}
        className="py-0.5 text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px] order-product">
        {quantity.count}
      </p>
    ))}
  </>
);
