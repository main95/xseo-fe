import { ChakraProvider } from '@chakra-ui/react'
import AppTabs from './components/AppTabs'

function App() {
  return (
    <ChakraProvider>
      <AppTabs />
    </ChakraProvider>
  )
}

export default App
