import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react"
import { useRef } from "react"

type Props = {
  isOpen: boolean
  type: 'deleteOrder' | 'printOrder' | 'printTicket'
  orderInfo?: {
    id: string
    name: string
  }
  onClose: () => void
}

const Alert: React.FC<Props> = ({ isOpen, type, orderInfo, onClose }) => {
  const cancelRef = useRef(null)
  
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Elimina ordine
          </AlertDialogHeader>

          {type === 'deleteOrder'
            ? <AlertDialogBody>
                {`Eliminare ordine ${orderInfo?.id} - ${orderInfo?.name}`}
              </AlertDialogBody>
            : null}
            
          {type === 'printOrder'
            ? <AlertDialogBody>
                {`Stampare ordine ${orderInfo?.id} - ${orderInfo?.name}`}
              </AlertDialogBody>
            : null}
            
          {type === 'printTicket'
            ? <AlertDialogBody>
                {`Stampare ticket ${orderInfo?.id} - ${orderInfo?.name}`}
              </AlertDialogBody>
            : null}

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={onClose} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default Alert
