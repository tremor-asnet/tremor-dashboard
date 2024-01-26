import { OrderProduct } from "@/types";

interface CustomListProps {
  products: OrderProduct[];
}

export const CustomList = ({ products }: CustomListProps) => (
  <>
    {products?.map(product => (
      <p
        key={product.id}
        className="text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px] order-product">
        {product.name}
      </p>
    ))}
  </>
);
