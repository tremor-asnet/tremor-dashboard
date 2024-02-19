// Components
import { Card, Col, Flex, Grid } from "@tremor/react";

const Invoice = () => {
  return (
    <Flex justifyContent="center" className="w-full bg-transparent">
      <Card className="w-full lg:w-2/3 dark:bg-dark_blue p-4 ring-0 rounded-xl shadow-md">
        <Grid numItems={1} className="gap-2">
          <Col numColSpan={1} className="h-48">
            Invoice Header
          </Col>
          <Col numColSpan={1} className="h-48">
            Invoice Body
          </Col>
          <Col numColSpan={1} className="h-48">
            Invoice Footer
          </Col>
        </Grid>
      </Card>
    </Flex>
  );
};

export default Invoice;
