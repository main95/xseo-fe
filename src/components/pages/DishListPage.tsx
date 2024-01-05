import { DeleteIcon } from "@chakra-ui/icons"
import { Button, Card, CardBody, CardHeader, Flex, GridItem, Heading } from "@chakra-ui/react"
import { useState } from "react"
import { blankDishesFilters, Dish, DishesFilters } from "../../models/Dishes"
import { PageTablesWrapper } from "../CommonComponents"
import DishDetail from "../dishes/DishDetail"
import DishesTable from "../dishes/DishesTable"
import DishFilters from "../dishes/DishFilters"

const DishListPage = () => {
  const [currentDish, setCurrentDish] = useState<Dish | undefined>(undefined)
  const [dishesFilters, setDishesFilters] = useState<DishesFilters>(blankDishesFilters)
  const [dishesToDelete, setDishesToDelete] = useState<string[]>([])
  
  return (
    <PageTablesWrapper>
      <GridItem p='2' area={'table'}>
        <Card p='0'>
          <CardHeader pb='0'>
            <Flex direction='row' gap='6'>
              <Heading size='md'>Lista pietanze</Heading>
              <Button
                leftIcon={<DeleteIcon />}
                colorScheme='red'
                variant='solid'
                size='sm'
                disabled={false}
                onClick={() => {
                }}
              >
                Elimina
              </Button>
            </Flex>
          </CardHeader>

          <CardBody>
            <DishesTable
              setCurrentDish={setCurrentDish}
              filters={dishesFilters}
              dishesToDelete={dishesToDelete}
              setDishesToDelete={setDishesToDelete}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem pl='0' area={'stats'}>
        <DishFilters setDishesFilters={setDishesFilters} />
      </GridItem>
      <GridItem p='0' area={'detail'}>
        <DishDetail dish={currentDish} />
      </GridItem>
    </PageTablesWrapper>
  )
}

export default DishListPage