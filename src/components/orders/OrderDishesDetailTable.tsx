import { CheckIcon, CloseIcon } from "@chakra-ui/icons"
import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { Dishes } from "../../models/Dishes"

type Props = {
  detail: Dishes
}

const OrderDishesDetailTable: React.FC<Props> = ({ detail }) => {
  console.log('detail: ', detail)
  return (
    <TableContainer>
      {detail.length ? <Table variant='striped' colorScheme='gray' size='sm'>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th isNumeric>Prezzo</Th>
            <Th isNumeric>Quantità</Th>
            <Th>Portata</Th>
            <Th>Stampato</Th>
          </Tr>
        </Thead>
        <Tbody>
          {detail.map(d => {
            return (
              <Tr onClick={() => {
                console.log('ok click')
              }}>
                <Td>{d.name}</Td>
                <Td isNumeric>{d.price}</Td>
                <Td isNumeric>{d.quantity}</Td>
                <Td>{d.category}</Td>
                <Td>
                  <Flex justifyContent='center'>
                    {d.printed ? <CheckIcon color='green.500' /> : <CloseIcon color='red.500' />}
                  </Flex>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table> : null}
    </TableContainer>
  )
}

export default OrderDishesDetailTable
