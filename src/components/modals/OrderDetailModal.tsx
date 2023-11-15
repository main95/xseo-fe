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
  Text,
} from "@chakra-ui/react"
import { Order } from "../../models/Orders"
import { getCategoryButtons } from "../libs/order"
import OrderDishesDetailTable from "../orders/OrderDishesDetailTable"

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
              <OrderDishesDetailTable detail={order.detail} />
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
