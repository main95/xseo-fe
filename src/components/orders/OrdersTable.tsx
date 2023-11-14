import { Checkbox, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { EditIcon } from '@chakra-ui/icons'
import { MOCK_ORDERS, Order, OrdersFilters } from "../../models/Orders"
import { useMemo } from "react"

type Props = {
  filters: OrdersFilters
  setCurrentOrder: (value: Order) => void
}

const OrdersTable: React.FC<Props> = ({ filters, setCurrentOrder }) => {
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
              <Tr onClick={(e) => {
                setCurrentOrder(order)
              }}>
                <Td>
                  <Checkbox
                    size='md'
                    colorScheme='red'
                    onClick={() => {
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