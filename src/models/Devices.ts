export type DeviceType = 'XSeo' | 'XSeo-saltacoda' | 'XSeo-saltacoda-gestione' | 'XSeo-accettazione' | 'Saltacoda'

export type Device = {
  _id: string
  name: string
  type: string
  ipAddress: string
  getAdditions?: boolean
  getCoupon?: boolean
  getExport?: boolean
  getSeatsFirstPage?: boolean
  getDelivery?: boolean
  getName?: boolean
  getNameFirstPage?: boolean
  getPayType?: boolean
  initialCategory?: string
  removeCategories?: string[]
}

export type Devices = Device[]

export const MOCK_DEVICES: Devices = [
  {
    _id: '000001',
    name: 'default-01',
    type: 'XSeo',
    ipAddress: '192.168.1.1',
    getPayType: false,
  }, {
    _id: '000002',
    name: 'default-02',
    type: 'Saltacoda',
    ipAddress: '192.168.2.1',
    getPayType: false,
  }, {
    _id: '000003',
    name: 'device 01',
    type: 'XSeo',
    ipAddress: '192.168.1.5',
    getPayType: false,
  }, {
    _id: '000004',
    name: 'device 02',
    type: 'XSeo-saltacoda',
    ipAddress: '192.168.1.180',
    getPayType: true,
  }, {
    _id: '000005',
    name: 'device 03',
    type: 'XSeo-saltacoda-gestione',
    ipAddress: '192.168.1.181',
    getPayType: false,
  }, {
    _id: '000006',
    name: 'device 04',
    type: 'XSeo-accettazione',
    ipAddress: '192.168.1.182',
    getPayType: false,
  }, {
    _id: '000007',
    name: 'device 05',
    type: 'XSeo',
    ipAddress: '192.168.1.183',
    getPayType: false,
  }, {
    _id: '000008',
    name: 'device 06',
    type: 'XSeo',
    ipAddress: '192.168.1.184',
    getPayType: false,
  }, {
    _id: '000009',
    name: 'device 07',
    type: 'XSeo',
    ipAddress: '192.168.1.185',
    getPayType: false,
  }, {
    _id: '000010',
    name: 'device 08',
    type: 'XSeo',
    ipAddress: '192.168.1.186',
    getPayType: false,
  },
]