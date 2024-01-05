type DishCategory = 'BEV' | 'PRI' | 'SEC'

export type Dish = {
  _id: string
  dishId: string
  name: string
  price: number
  quantity: number
  category: DishCategory
  printed?: boolean
  isActive?: boolean
}

export type DishesFilters = {
  id: string
  name: string
  category: string
  isActive: boolean
}

export const blankDishesFilters: DishesFilters = {
  id: '',
  name: '',
  category: '',
  isActive: true,
}

export type Dishes = Dish[]

export const MOCK_DISHES: Dishes = [
  {
    _id: '000001',
    dishId: 'B01',
    name: 'pietanza 01',
    price: 1.0,
    quantity: 0,
    category: 'BEV',
    isActive: true,
  }, {
    _id: '000002',
    dishId: 'B02',
    name: 'pietanza 02',
    price: 2.0,
    quantity: 0,
    category: 'BEV',
    isActive: true,
  }, {
    _id: '000003',
    dishId: 'P01',
    name: 'pietanza 03',
    price: 3.5,
    quantity: 0,
    category: 'PRI',
    isActive: true,
  }, {
    _id: '000004',
    dishId: 'P02',
    name: 'pietanza 04',
    price: 4.0,
    quantity: 0,
    category: 'PRI',
    isActive: true,
  }, {
    _id: '000005',
    dishId: 'S01',
    name: 'pietanza 05',
    price: 5.0,
    quantity: 0,
    category: 'SEC',
    isActive: true,
  }, {
    _id: '000006',
    dishId: 'S02',
    name: 'pietanza 06',
    price: 6.0,
    quantity: 0,
    category: 'SEC',
    isActive: false,
  },
]