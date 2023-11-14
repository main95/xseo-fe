import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
import { getCategoryButtons } from "../libs/order"

type Props = {
  isOpen: boolean
  order: Order
  onClose: () => void
}

const OrderDetailModal: React.FC<Props> = ({ isOpen, order, onClose }) => {
  const actionCategoryButtons = getCategoryButtons(order.detail)

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`Ordine ${order._id} - ${order.name}`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
              <Stack direction='row' spacing={4} align='center'>
                {actionCategoryButtons.map(category => {
                  return (
                    <Button colorScheme='teal' variant='solid' key={'categoryActionButton' + category.value}>
                      {category.label}
                    </Button>
                  )
                })}
              </Stack>
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
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default OrderDetailModal
