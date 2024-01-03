import { IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { EditIcon } from '@chakra-ui/icons'
import { useMemo } from "react"
import { Device, MOCK_DEVICES } from "../../models/Devices"

type Props = {
  setCurrentDevice: (value: Device) => void
}

const DevicesTable = ({ setCurrentDevice }: Props) => {
  const devices = useMemo(() => {
    return MOCK_DEVICES
  }, [])

  return (
    <TableContainer>
      <Table colorScheme='gray' size='sm'>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Ip</Th>
            <Th>Tipo</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {devices.map((device, index) => {
            const getRowBgColor = (deviceName: string, index: number) => {
              if (deviceName === 'default-01') {
                return 'lightBlue'
              }
              if (deviceName === 'default-02') {
                return 'lightYellow'
              }
              if (index % 2 === 1) {
                return 'lightGray'
              }
              return 'white'
            }

            return (
              <Tr key={device._id} bgColor={getRowBgColor(device.name, index)}>
                <Td>{device.name}</Td>
                <Td>{device.ipAddress}</Td>
                <Td>{device.type}</Td>
                <Td>
                  <IconButton
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<EditIcon />}
                    size='sm'
                    onClick={() => {
                      setCurrentDevice(device)
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

export default DevicesTable