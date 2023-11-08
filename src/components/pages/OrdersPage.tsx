import { useState } from "react"
import { Card, CardBody, CardHeader, Grid, GridItem, Heading } from "@chakra-ui/react"
import OrdersTable from "../orders/OrdersTable"
import { MOCK_ORDERS, Order } from "../../models/Orders"
import OrderDetail from "../orders/OrderDetail"
import OrderStats from "../orders/OrderStats"

const OrdersPage: React.FC = () => {
  const [currentOrder, setCurrentOrder] = useState<Order | undefined>(undefined)

  const orderStats = {
    ordersNumber: MOCK_ORDERS.length,
    total: MOCK_ORDERS.length,
  }

  return (
    <Grid
      templateAreas={`"table stats"
                      "table detail"`}
      gridTemplateRows={'1fr 2fr'}
      gridTemplateColumns={'3fr 2fr'}
      h='100%'
      gap='2'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem p='2' area={'table'}>
        <Card p='0'>
          <CardHeader pb='0'>
            <Heading size='md'>Lista ordini</Heading>
          </CardHeader>

          <CardBody>
            <OrdersTable setCurrentOrder={setCurrentOrder} />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem pl='0' area={'stats'}>
        <OrderStats stats={orderStats} />
      </GridItem>
      <GridItem p='0' area={'detail'}>
        <OrderDetail order={currentOrder} />
      </GridItem>
    </Grid>
  )
}

export default OrdersPage