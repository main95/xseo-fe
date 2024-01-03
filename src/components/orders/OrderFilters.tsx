import { SearchIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Input,
  Stack,
  StackDivider,
} from "@chakra-ui/react"
import { useState } from "react"
import { blankOrdersFilters, OrdersFilters } from "../../models/Orders"

type Props = {
  setOrdersFilters: (value: OrdersFilters) => void
}

const OrderFilters: React.FC<Props> = ({ setOrdersFilters }) => {
  const [tmpOrdersFilters, setTmpOrdersFilters] = useState<OrdersFilters>(blankOrdersFilters)

  return (
    <Card>
      <CardHeader pb='0'>
        <Flex gap='4' alignItems='center' justify='space-between'>
          <Heading size='md'>Filtri</Heading>
          <Flex flex='1' gap='2' flexWrap='wrap'>
            <Button leftIcon={<SearchIcon />} colorScheme='gray' variant='solid' size='sm'>
              Avanzate
            </Button>
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Stack divider={<StackDivider />} spacing='4' direction='row'>
            <Box>
              <Heading size='xs' textTransform='uppercase' pb='1'>
                Nome
              </Heading>
              <Input
                variant='outline'
                placeholder='Nome'
                onChange={(e) => {
                  setTmpOrdersFilters({
                    ...tmpOrdersFilters,
                    name: e.target.value,
                  })
                }} />
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase' pb='1'>
                Tavolo
              </Heading>
              <Input
                variant='outline'
                placeholder='Tavolo'
                onChange={(e) => {
                  setTmpOrdersFilters({
                    ...tmpOrdersFilters,
                    table: e.target.value,
                  })
                }} />
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase' pb='1'>
                Numero
              </Heading>
              <Input
                variant='outline'
                placeholder='Numero ordine'
                onChange={(e) => {
                  setTmpOrdersFilters({
                    ...tmpOrdersFilters,
                    id: e.target.value,
                  })
                }} />
            </Box>
          </Stack>
        </Stack>
      </CardBody>
      <CardFooter pt='0'>
        <Stack spacing='4' direction='row'>
          <Button
            variant='ghost'
            colorScheme='gray'
            onClick={() => {
              setOrdersFilters({
                ...blankOrdersFilters,
              })
              setTmpOrdersFilters({
                ...blankOrdersFilters,
              })
            }}
          >
            Reset
          </Button>
          <Button
            variant='solid'
            colorScheme='teal'
            onClick={() => {
              setOrdersFilters({
                ...tmpOrdersFilters,
              })
            }}
          >
            Applica
          </Button>
        </Stack>
      </CardFooter>
    </Card>
  )
}

export default OrderFilters