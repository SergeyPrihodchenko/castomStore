import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { PageProps } from '@/types';
import ProductList from '@/Pages/AdminPage/ProductList/ui/AdminProductList';
import EditShopDetails from '@/Pages/AdminPage/Form/ui/EditShopDetails';
import Catalogs from '@/Features/Admin/CatalolgPage/ui/Catalogs';
import Categories from '@/Features/Admin/CategoriesPage/ui/Categories';
import AddSettingsForm from '@/Features/Admin/AddMainPageSettings';
import { useSetCatalogMutation } from '@/entities/Catalog/model/query/rtkCatalog';
import { useSetCategoryMutation } from '@/entities/Category/model/query/rtkCategory';
import Search from '@/Shared/ui/SearchProduct';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
export default function HomeAdminPage() {
  // export default function HomeAdminPage({ catalogs, products }: PageProps) {
  //console.log(catalogs);

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container fixed>
      <Box sx={{ margin: '50px' }}>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: 'background.paper',
            display: 'flex',
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: 'divider',
            }}
          >
            <Tab
              label="О магазине"
              {...a11yProps(0)}
            />
            <Tab
              label="Настройка страниц"
              {...a11yProps(1)}
            />
            <Tab
              label="Каталоги"
              {...a11yProps(2)}
            />
            <Tab
              label="Категории"
              {...a11yProps(3)}
            />
            <Tab
              label="Товары"
              {...a11yProps(4)}
            />
          </Tabs>
          <TabPanel
            value={value}
            index={0}
          >
            <EditShopDetails />
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
          >
            <AddSettingsForm />
          </TabPanel>
          <TabPanel
            value={value}
            index={2}
          >
            Каталоги
            {/* <Catalogs catalogs={catalogs} /> */}
          </TabPanel>
          <TabPanel
            value={value}
            index={3}
          >
            Категории
            {/* <Categories catalogs={catalogs} /> */}
          </TabPanel>
          <TabPanel
            value={value}
            index={4}
          >
            Товары
            {/* <ProductList products={products} /> */}
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
}
