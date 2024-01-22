// Components
import { Table, TableBody } from "@tremor/react";

//Types
import { TOrderList } from "@/types";
import { OrderDetailItem } from "@/components";

export interface OrderDetailContactProps {
  orderStatus: string;
  data: TOrderList[];
}

const OrderDetailContact = ({
  orderStatus,
  data = [],
}: OrderDetailContactProps) => {
  return (
    <Table className="w-full">
      <TableBody>
        {data.map(item => (
          <OrderDetailItem
            key={item.id}
            orderStatus={orderStatus}
            orderDetail={item}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderDetailContact;
