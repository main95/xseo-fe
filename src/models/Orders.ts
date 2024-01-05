import { Dishes } from "./Dishes"

type OrderStep = 'ASS' | 'BEV' | 'PRI' | 'SEC'

export type Order = {
  _id: string
  name: string
  table: string
  places: number
  currentStep: OrderStep
  date: Date
  totalPrice: number
  detail: Dishes
}

export type Orders = Order[]

export type OrdersFilters = {
  id: string
  name: string
  table: string
  date: Date
}

export const blankOrdersFilters: OrdersFilters = {
  id: '',
  name: '',
  table: '',
  date: new Date(),
}

export const MOCK_ORDERS: Orders = [
  {
    _id: '10000',
    name: 'test 01',
    table: 'A01',
    places: 2,
    currentStep: 'ASS',
    date: new Date(),
    totalPrice: 12.00,
    detail: [
      {
        _id: '000000',
        dishId: 'B01',
        name: 'coperti',
        price: 0.00,
        quantity: 6,
        category: 'BEV',
        printed: true,
        isActive: true,
      }, {
        _id: '000001',
        dishId: 'B01',
        name: 'bevanda 1',
        price: 1.00,
        quantity: 1,
        category: 'BEV',
        printed: true,
        isActive: true,
      }, {
        _id: '000002',
        dishId: 'B01',
        name: 'bevanda 2',
        price: 2.00,
        quantity: 3,
        category: 'BEV',
        printed: true,
        isActive: true,
      }, {
        _id: '000003',
        dishId: 'B01',
        name: 'primo 1',
        price: 9.00,
        quantity: 1,
        category: 'PRI',
        printed: true,
        isActive: true,
      }, {
        _id: '000004',
        dishId: 'B01',
        name: 'primo 2',
        price: 8.00,
        quantity: 2,
        category: 'SEC',
        printed: false,
        isActive: true,
      }, {
        _id: '000005',
        dishId: 'B01',
        name: 'secondo 1',
        price: 11.00,
        quantity: 2,
        category: 'SEC',
        printed: false,
        isActive: true,
      }, {
        _id: '000006',
        dishId: 'B01',
        name: 'secondo 2',
        price: 12.00,
        quantity: 4,
        category: 'SEC',
        printed: false,
        isActive: true,
      }
    ]
  }, {
    _id: '10001',
    name: 'test 02',
    table: 'A04',
    places: 2,
    currentStep: 'BEV',
    date: new Date(),
    totalPrice: 12.00,
    detail: []
  }, {
    _id: '10002',
    name: 'test 03',
    table: 'A06',
    places: 2,
    currentStep: 'PRI',
    date: new Date(),
    totalPrice: 12.00,
    detail: []
  }, {
    _id: '10003',
    name: 'test 04',
    table: 'A01',
    places: 2,
    currentStep: 'SEC',
    date: new Date(),
    totalPrice: 12.00,
    detail: []
  }, {
    _id: '10004',
    name: 'test 05',
    table: 'A01',
    places: 2,
    currentStep: 'ASS',
    date: new Date(),
    totalPrice: 12.00,
    detail: []
  }, {
    _id: '10005',
    name: 'test 06',
    table: 'A01',
    places: 2,
    currentStep: 'ASS',
    date: new Date(),
    totalPrice: 12.00,
    detail: []
  }, {
    _id: '10006',
    name: 'test 07',
    table: 'A01',
    places: 2,
    currentStep: 'ASS',
    date: new Date(),
    totalPrice: 12.00,
    detail: []
  }, {
    _id: '10007',
    name: 'test 08',
    table: 'A01',
    places: 2,
    currentStep: 'ASS',
    date: new Date(),
    totalPrice: 12.00,
    detail: []
  }, {
    _id: '10008',
    name: 'test 09',
    table: 'A01',
    places: 2,
    currentStep: 'ASS',
    totalPrice: 12.00,
    date: new Date(),
    detail: []
  }, {
    _id: '10009',
    name: 'test 10',
    table: 'A01',
    places: 2,
    currentStep: 'ASS',
    totalPrice: 12.00,
    date: new Date(),
    detail: []
  }
]