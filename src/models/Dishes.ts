type DishCategory = 'BEV' | 'PRI' | 'SEC'

type Dish = {
  _id: string
  name: string
  price: number
  quantity: number
  category: DishCategory
}

export type Dishes = Dish[]

export const MOCK_DISHES: Dishes = [
]