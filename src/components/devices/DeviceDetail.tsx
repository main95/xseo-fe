import { CheckIcon, DeleteIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Select,
  Stack,
  StackDivider,
  Switch,
} from "@chakra-ui/react"
import { useState } from "react"
import { Device } from "../../models/Devices"
import Alert from "../alerts/Alert"
import { isDefaultDevice } from "../libs/devices"

type Props = {
  device: Device | undefined
}

const OrderDetail = ({ device }: Props) => {
  const [isOpenDeleteAlert, setIsOpenDeleteAlert] = useState<boolean>(false)

  if (!device) {
    return null
  }

  const isDefault = isDefaultDevice(device.name)

  return (
    <>
      <Card pb='4'>
        <CardHeader pb='0'>
          <Flex gap='4' alignItems='center' justify='space-between'>
            <Heading size='md'>{`${device.name} - ${device.ipAddress}`}</Heading>
            <Flex flex='1' gap='2' flexWrap='wrap'>
              {!isDefault ?
                <IconButton
                  colorScheme='red'
                  aria-label='Search database'
                  icon={<DeleteIcon />}
                  size='sm'
                  onClick={() => {
                    setIsOpenDeleteAlert(true)
                  }}
                /> : <></>
              }
              <Button
                leftIcon={<CheckIcon />}
                colorScheme='green'
                variant='solid'
                size='sm'
                disabled={false}
                onClick={() => {
                }}
              >
                Salva
              </Button>
            </Flex>
          </Flex>
        </CardHeader>

        {device && <CardBody>
          <FormControl display='flex' flexDirection='column' alignItems='start' gap='2'>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Tipo device
                </Heading>
                <Box mt='2'>
                  <Select placeholder='Seleziona tipo device'>
                    <option value='XSeo'>XSeo</option>
                    <option value='XSeo-saltacoda'>XSeo-saltacoda</option>
                    <option value='XSeo-saltacoda-gestione'>XSeo-saltacoda-gestione</option>
                    <option value='XSeo-2017'>XSeo-2017</option>
                    <option value='XSeo-accettazione'>XSeo-accettazione</option>
                    <option value='Saltacoda'>Saltacoda</option>
                  </Select>
                </Box>
              </Box>
              <Box>
                <Box display='flex' alignItems='center'>
                  <FormLabel htmlFor='get-additions' mb='0'>
                    Abilita aggiunte
                  </FormLabel>
                  <Switch id='get-additions' />
                </Box>
                <Box display='flex' alignItems='center'>
                  <FormLabel htmlFor='get-coupon' mb='0'>
                    Abilita coupon
                  </FormLabel>
                  <Switch id='get-coupon' />
                </Box>
                <Box display='flex' alignItems='center'>
                  <FormLabel htmlFor='get-export' mb='0'>
                    Abilita export
                  </FormLabel>
                  <Switch id='get-export' />
                </Box>
                <Box display='flex' alignItems='center'>
                  <FormLabel htmlFor='get-seats-first-page' mb='0'>
                    Richiedi modale coperti
                  </FormLabel>
                  <Switch id='get-seats-first-page' />
                </Box>
                <Box display='flex' alignItems='center'>
                  <FormLabel htmlFor='get-delivery' mb='0'>
                    Abilita delivery
                  </FormLabel>
                  <Switch id='get-delivery' />
                </Box>
                <Box display='flex' alignItems='center'>
                  <FormLabel htmlFor='get-name' mb='0'>
                    Richiedi nome
                  </FormLabel>
                  <Switch id='get-name' />
                </Box>
                <Box display='flex' alignItems='center'>
                  <FormLabel htmlFor='get-name-first-page' mb='0'>
                    Richiedi nome prima pagina
                  </FormLabel>
                  <Switch id='get-name-first-page' />
                </Box>
                <Box display='flex' alignItems='center'>
                  <FormLabel htmlFor='get-pay-type' mb='0'>
                    Richiedi tipo pagamento
                  </FormLabel>
                  <Switch id='get-pay-type' />
                </Box>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Portata iniziale
                </Heading>
                <Box mt='2'>
                  <Select placeholder='Seleziona portata iniziale'>
                    <option value='BEV'>BEV</option>
                    <option value='PRI'>PRI</option>
                    <option value='SEC'>SEC</option>
                    <option value='FRI'>FRI</option>
                    <option value='CON'>CON</option>
                    <option value='DOL'>DOL</option>
                  </Select>
                </Box>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Portate da escludere
                </Heading>
                <Box mt='2'>
                  <Select placeholder='Seleziona portata iniziale'>
                    <option value='BEV'>BEV</option>
                    <option value='PRI'>PRI</option>
                    <option value='SEC'>SEC</option>
                    <option value='FRI'>FRI</option>
                    <option value='CON'>CON</option>
                    <option value='DOL'>DOL</option>
                  </Select>
                </Box>
              </Box>
            </Stack>
          </FormControl>
        </CardBody>}
      </Card>

      <Alert
        isOpen={isOpenDeleteAlert}
        type='deleteOrder'
        orderInfo={{
          id: device._id,
          name: device.name,
        }}
        onClose={() => {
          setIsOpenDeleteAlert(false)
        }}
      />
    </>
  )
}

export default OrderDetail
