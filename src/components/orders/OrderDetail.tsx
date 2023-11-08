import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { Order } from "../../models/Orders"

type Props = {
  order: Order | undefined
}

const OrderDetail: React.FC<Props> = ({ order }) => {
  if (!order) {
    return null
  }

  return (
    <Card pb='4'>
      <CardHeader pb='0'>
        <Heading size='md'>Dettaglio ordine</Heading>
      </CardHeader>

      {order && <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Nome
            </Heading>
            <Text pt='2' fontSize='sm'>
              {order.name}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Info
            </Heading>
            <Text pt='2' fontSize='sm'>
              {`Coperti: ${order.places} - Tavolo: ${order.table} - Totale: ${order.totalPrice}`}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Dettaglio
            </Heading>
            <TableContainer>
              {order.detail.length ? <Table variant='striped' colorScheme='gray' size='sm'>
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th isNumeric>Prezzo</Th>
                    <Th isNumeric>Quantità</Th>
                    <Th>Portata</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {order.detail.map(d => {
                    return (
                      <Tr onClick={() => {
                        console.log('ok click')
                      }}>
                        <Td>{d.name}</Td>
                        <Td isNumeric>{d.price}</Td>
                        <Td isNumeric>{d.quantity}</Td>
                        <Td>{d.category}</Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table> : null}
            </TableContainer>
          </Box>
        </Stack>
      </CardBody>}
    </Card>
  )
}

export default OrderDetail