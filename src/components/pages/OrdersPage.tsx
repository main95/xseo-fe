import { useState } from "react"
import { Button, Card, CardBody, CardHeader, Flex, GridItem, Heading } from "@chakra-ui/react"
import OrdersTable from "../orders/OrdersTable"
import { blankOrdersFilters, Order, OrdersFilters } from "../../models/Orders"
import OrderDetail from "../orders/OrderDetail"
import OrderFilters from "../orders/OrderFilters"
import { DeleteIcon } from "@chakra-ui/icons"
import { PageTablesWrapper } from "../CommonComponents"

const OrdersPage: React.FC = () => {
  const [currentOrder, setCurrentOrder] = useState<Order | undefined>(undefined)
  const [ordersFilters, setOrdersFilters] = useState<OrdersFilters>(blankOrdersFilters)
  const [ordersToDelete, setOrdersToDelete] = useState<string[]>([])

  return (
    <PageTablesWrapper>
      <GridItem p='2' area={'table'}>
        <Card p='0'>
          <CardHeader pb='0'>
            <Flex direction='row' gap='6'>
              <Heading size='md'>Lista ordini</Heading>
              <Button
                leftIcon={<DeleteIcon />}
                colorScheme='red'
                variant='solid'
                size='sm'
                disabled={!ordersToDelete.length}
                onClick={() => {
                }}
              >
                Elimina
              </Button>
            </Flex>
          </CardHeader>

          <CardBody>
            <OrdersTable
              setCurrentOrder={setCurrentOrder}
              filters={ordersFilters}
              ordersToDelete={ordersToDelete}
              setOrdersToDelete={setOrdersToDelete}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem pl='0' area={'stats'}>
        <OrderFilters setOrdersFilters={setOrdersFilters} />
      </GridItem>
      <GridItem p='0' area={'detail'}>
        <OrderDetail order={currentOrder} />
      </GridItem>
    </PageTablesWrapper>
  )
}

export default OrdersPage