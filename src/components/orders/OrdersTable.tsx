import { Checkbox, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { EditIcon } from '@chakra-ui/icons'
import { MOCK_ORDERS, Order, OrdersFilters } from "../../models/Orders"
import { useMemo } from "react"

type Props = {
  filters: OrdersFilters
  setCurrentOrder: (value: Order) => void
  ordersToDelete: string[]
  setOrdersToDelete: (value: string[]) => void
}

const OrdersTable: React.FC<Props> = ({ filters, ordersToDelete, setOrdersToDelete, setCurrentOrder }) => {
  const orders = useMemo(() => {
    return MOCK_ORDERS.filter(order => order.name.includes(filters.name) &&
      (filters.table ? order.table.includes(filters.table) : true) &&
      (filters.id ? order._id.includes(filters.id) : true))
  }, [filters])

  return (
    <TableContainer>
      <Table variant='striped' colorScheme='gray' size='sm'>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Id</Th>
            <Th>Nome</Th>
            <Th>Tavolo</Th>
            <Th isNumeric>Coperti</Th>
            <Th isNumeric>Totale</Th>
            <Th>Step</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map(order => {
            return (
              <Tr>
                <Td>
                  <Checkbox
                    size='md'
                    colorScheme='red'
                    onChange={(e) => {
                      const isChecked = e.target.checked
                      console.log(isChecked)
                      if (isChecked) {
                        setOrdersToDelete([...ordersToDelete, order._id])
                        return
                      }
                      setOrdersToDelete(ordersToDelete.filter(o => o !== order._id))
                    }}
                  />
                </Td>
                <Td>{order._id}</Td>
                <Td>{order.name}</Td>
                <Td>{order.table}</Td>
                <Td isNumeric>{order.places}</Td>
                <Td isNumeric>{order.totalPrice}</Td>
                <Td>{order.currentStep}</Td>
                <Td>
                  <IconButton
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<EditIcon />}
                    size='sm'
                    onClick={() => {
                      setCurrentOrder(order)
                    }}
                  />
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default OrdersTable