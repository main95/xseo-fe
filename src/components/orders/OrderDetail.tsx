import { DeleteIcon, LockIcon, QuestionOutlineIcon, UnlockIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
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
import { useState } from "react"
import { Order } from "../../models/Orders"
import Alert from "../alerts/Alert"
import OrderDetailModal from "../modals/OrderDetailModal"

type Props = {
  order: Order | undefined
}

const OrderDetail: React.FC<Props> = ({ order }) => {
  const [isOpenDeleteAlert, setIsOpenDeleteAlert] = useState<boolean>(false)
  const [isOpenPrintOrder, setIsOpenPrintOrder] = useState<boolean>(false)
  const [isOpenPrintTicket, setIsOpenPrintTicket] = useState<boolean>(false)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState<boolean>(false)

  if (!order) {
    return null
  }

  return (
    <>
      <Card pb='4'>
        <CardHeader pb='0'>
          <Flex gap='4' alignItems='center' justify='space-between'>
            <Heading size='md'>Dettaglio ordine</Heading>
            <Flex flex='1' gap='2' flexWrap='wrap'>
              <Button
                leftIcon={<LockIcon />}
                colorScheme='gray'
                variant='solid'
                size='sm'
                onClick={() => {
                  setIsOpenPrintTicket(true)
                }}
              >
                Ricevuta
              </Button>
              <Button
                leftIcon={<UnlockIcon />}
                colorScheme='gray'
                variant='solid'
                size='sm'
                onClick={() => {
                  setIsOpenPrintOrder(true)
                }}
              >
                Ristampa
              </Button>
              <IconButton
                colorScheme='green'
                aria-label='Search database'
                icon={<QuestionOutlineIcon />}
                size='sm'
                onClick={() => {
                  setIsOpenOrderDetail(true)
                }}
              />
              <IconButton
                colorScheme='red'
                aria-label='Search database'
                icon={<DeleteIcon />}
                size='sm'
                onClick={() => {
                  setIsOpenDeleteAlert(true)
                }}
              />
            </Flex>
          </Flex>
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

      <Alert
        isOpen={isOpenDeleteAlert}
        type='deleteOrder'
        orderInfo={{
          id: order._id,
          name: order.name,
        }}
        onClose={() => {
          setIsOpenDeleteAlert(false)
        }}
      />
      <Alert
        isOpen={isOpenPrintOrder}
        type='printOrder'
        orderInfo={{
          id: order._id,
          name: order.name,
        }}
        onClose={() => {
          setIsOpenPrintOrder(false)
        }}
      />
      <Alert
        isOpen={isOpenPrintTicket}
        type='printTicket'
        orderInfo={{
          id: order._id,
          name: order.name,
        }}
        onClose={() => {
          setIsOpenPrintTicket(false)
        }}
      />
      
      <OrderDetailModal
        isOpen={isOpenOrderDetail}
        order={order}
        onClose={() => {
          setIsOpenOrderDetail(false)
        }}
      />
    </>
  )
}

export default OrderDetail
