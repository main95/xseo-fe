import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react"

type Props = {
  stats: {
    ordersNumber: number
    total: number
  }
}

const OrderStats: React.FC<Props> = ({ stats }) => {
  return (
    <Card>
      <CardHeader pb='0'>
        <Heading size='md'>Recap</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Numero ordini
            </Heading>
            <Text pt='2' fontSize='sm'>
              {stats.ordersNumber}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Totale
            </Heading>
            <Text pt='2' fontSize='sm'>
              {stats.total}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default OrderStats