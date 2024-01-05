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
import { blankDishesFilters, DishesFilters } from "../../models/Dishes"

type Props = {
  setDishesFilters: (value: DishesFilters) => void
}

const DishFilters = ({ setDishesFilters }: Props) => {
  const [tmpDishesFilters, setTmpDishesFilters] = useState<DishesFilters>(blankDishesFilters)

  return (
    <Card>
      <CardHeader pb='0'>
        <Flex gap='4' alignItems='center' justify='space-between'>
          <Heading size='md'>Filtri</Heading>
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Stack divider={<StackDivider />} spacing='4' direction='row'>
            <Box>
              <Heading size='xs' textTransform='uppercase' pb='1'>
                Id
              </Heading>
              <Input
                variant='outline'
                placeholder='Id'
                onChange={(e) => {
                  setTmpDishesFilters({
                    ...tmpDishesFilters,
                    id: e.target.value.toUpperCase(),
                  })
                }} />
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase' pb='1'>
                Nome
              </Heading>
              <Input
                variant='outline'
                placeholder='Nome'
                onChange={(e) => {
                  setTmpDishesFilters({
                    ...tmpDishesFilters,
                    name: e.target.value,
                  })
                }} />
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase' pb='1'>
                Categoria
              </Heading>
              <Input
                variant='outline'
                placeholder='Categoria'
                onChange={(e) => {
                  setTmpDishesFilters({
                    ...tmpDishesFilters,
                    category: e.target.value.toUpperCase(),
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
              setDishesFilters({
                ...blankDishesFilters,
              })
              setTmpDishesFilters({
                ...blankDishesFilters,
              })
            }}
          >
            Reset
          </Button>
          <Button
            variant='solid'
            colorScheme='teal'
            onClick={() => {
              setDishesFilters({
                ...tmpDishesFilters,
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

export default DishFilters