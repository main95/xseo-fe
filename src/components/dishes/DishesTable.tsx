import { Badge, Checkbox, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { EditIcon } from '@chakra-ui/icons'
import { useMemo } from "react"
import { Dish, DishesFilters, MOCK_DISHES } from "../../models/Dishes"
import { getPrice } from "../libs/dish"

type Props = {
  filters: DishesFilters
  setCurrentDish: (value: Dish) => void
  dishesToDelete: string[]
  setDishesToDelete: (value: string[]) => void
}

const DishesTable = ({ filters, dishesToDelete, setDishesToDelete, setCurrentDish }: Props) => {
  const dishes = useMemo(() => {
    return MOCK_DISHES
      .filter(dish => dish.dishId.includes(filters.id) &&
        (filters.name ? dish.name.includes(filters.name) : true) &&
        (filters.category ? dish.category.includes(filters.category) : true))
  }, [filters])

  return (
    <TableContainer>
      <Table variant='striped' colorScheme='gray' size='sm'>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Id</Th>
            <Th>Nome</Th>
            <Th isNumeric>Prezzo</Th>
            <Th>Portata</Th>
            <Th>Attivo</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {dishes.map(dish => {
            return (
              <Tr key={dish._id}>
                <Td>
                  <Checkbox
                    size='md'
                    colorScheme='red'
                    onChange={(e) => {
                      const isChecked = e.target.checked
                      console.log(isChecked)
                      if (isChecked) {
                        setDishesToDelete([...dishesToDelete, dish._id])
                        return
                      }
                      setDishesToDelete(dishesToDelete.filter(d => d !== dish._id))
                    }}
                  />
                </Td>
                <Td>{dish.dishId}</Td>
                <Td>{dish.name}</Td>
                <Td isNumeric>{getPrice(dish.price)}</Td>
                <Td>{dish.category}</Td>
                <Td>{dish.isActive
                  ? <Badge colorScheme='green'>Attivo</Badge>
                  : <Badge colorScheme='red'>Non attivo</Badge>
                }</Td>
                <Td>
                  <IconButton
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<EditIcon />}
                    size='sm'
                    onClick={() => {
                      setCurrentDish(dish)
                    }}
                  />
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default DishesTable