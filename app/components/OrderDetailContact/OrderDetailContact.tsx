// Components
import { Table, TableBody } from "@tremor/react";

//Types
import { TOrderList } from "@/types";
import { OrderDetailItem } from "@/components";

export interface OrderDetailContactProps {
  data: TOrderList[];
}

const OrderDetailContact = ({ data = [] }: OrderDetailContactProps) => {
  return (
    <Table className="w-full">
      <TableBody>
        {data.map(item => (
          <OrderDetailItem key={item.id} orderDetail={item} />
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderDetailContact;
