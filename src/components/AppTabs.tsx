import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
// import DashboardPage from "./pages/DashboardPage"
import DevicesPage from "./pages/DevicesPage"
import DishListPage from "./pages/DishListPage"
import EventPage from "./pages/EventPage"
import OrdersPage from "./pages/OrdersPage"
import RowMaterialsPage from "./pages/RowMaterialsPage"

const AppTabs: React.FC = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Dashboard</Tab>
        <Tab>Configurazione evento</Tab>
        <Tab>Devices</Tab>
        <Tab>Ordini</Tab>
        <Tab>Listino</Tab>
        <Tab>Materie prime</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {/* <DashboardPage /> */}
          <OrdersPage />
        </TabPanel>
        <TabPanel>
          <EventPage />
        </TabPanel>
        <TabPanel>
          <DevicesPage />
        </TabPanel>
        <TabPanel>
          <OrdersPage />
        </TabPanel>
        <TabPanel>
          <DishListPage />
        </TabPanel>
        <TabPanel>
          <RowMaterialsPage />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default AppTabs