import { DeleteIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"
import { Dish } from "../../models/Dishes"
import Alert from "../alerts/Alert"

type Props = {
  dish: Dish | undefined
}

const DishDetail = ({ dish }: Props) => {
  const [isOpenDeleteAlert, setIsOpenDeleteAlert] = useState<boolean>(false)

  if (!dish) {
    return null
  }

  return (
    <>
      <Card pb='4'>
        <CardHeader pb='0'>
          <Flex gap='4' alignItems='center' justify='space-between'>
            <Heading size='md'>{`Dettaglio - ${dish.name}`}</Heading>
            <Flex flex='1' gap='2' flexWrap='wrap' alignItems='center'>
              {dish.isActive
                ? <Badge colorScheme='green'>Attivo</Badge>
                : <Badge colorScheme='red'>Non attivo</Badge>
              }
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

        {dish && <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Info
              </Heading>
              <Text pt='2' fontSize='sm'>
                {`Id: ${dish.dishId} - Prezzo: ${dish.price} - Portata: ${dish.category}`}
              </Text>
            </Box>
          </Stack>
        </CardBody>}
      </Card>

      <Alert
        isOpen={isOpenDeleteAlert}
        type='deleteOrder'
        orderInfo={{
          id: dish._id,
          name: dish.name,
        }}
        onClose={() => {
          setIsOpenDeleteAlert(false)
        }}
      />
    </>
  )
}

export default DishDetail
