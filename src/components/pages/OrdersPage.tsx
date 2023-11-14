import { useState } from "react"
import { Card, CardBody, CardHeader, Grid, GridItem, Heading } from "@chakra-ui/react"
import OrdersTable from "../orders/OrdersTable"
import { blankOrdersFilters, Order, OrdersFilters } from "../../models/Orders"
import OrderDetail from "../orders/OrderDetail"
import OrderFilters from "../orders/OrderFilters"

const OrdersPage: React.FC = () => {
  const [currentOrder, setCurrentOrder] = useState<Order | undefined>(undefined)
  const [ordersFilters, setOldersFilters] = useState<OrdersFilters>(blankOrdersFilters)

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
            <OrdersTable setCurrentOrder={setCurrentOrder} filters={ordersFilters} />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem pl='0' area={'stats'}>
        <OrderFilters ordersFilters={ordersFilters} setOrdersFilters={setOldersFilters} />
      </GridItem>
      <GridItem p='0' area={'detail'}>
        <OrderDetail order={currentOrder} />
      </GridItem>
    </Grid>
  )
}

export default OrdersPage