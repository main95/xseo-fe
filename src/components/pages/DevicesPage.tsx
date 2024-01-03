import { Card, CardBody, CardHeader, Flex, GridItem, Heading } from "@chakra-ui/react"
import { useState } from "react"
import { Device } from "../../models/Devices"
import { PageWrapper } from "../CommonComponents"
import DeviceDetail from "../devices/DeviceDetail"
import DevicesTable from "../devices/DevicesTable"

const DevicesPage: React.FC = () => {
  const [currentDevice, setCurrentDevice] = useState<Device | undefined>(undefined)

  return (
    <PageWrapper>
      <>
        <GridItem p='2' area={'table'}>
          <Card p='0'>
            <CardHeader pb='0'>
              <Flex direction='row' gap='6'>
                <Heading size='md'>Lista devices</Heading>
              </Flex>
            </CardHeader>

            <CardBody>
              <DevicesTable
                setCurrentDevice={setCurrentDevice}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem p='0' area={'detail'}>
          <DeviceDetail device={currentDevice} />
        </GridItem>
      </>
    </PageWrapper>
  )
}

export default DevicesPage