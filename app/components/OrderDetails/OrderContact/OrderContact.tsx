// Components
import { Flex } from "@tremor/react";

//Types
import { TOrder } from "@/types";
import { OrderContactItem } from "@/components";

export type OrderContactProps = {
  data: TOrder[];
};

const OrderContact = ({ data }: OrderContactProps) => {
  return (
    <Flex className="flex-col">
      {data.map(item => (
        <OrderContactItem key={item.id} orderContact={item} />
      ))}
    </Flex>
  );
};

export default OrderContact;
