import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SliderMobile from '@/image/SliderMobile.png';
import ProductTable from '@/Pages/AdminPage/Form/ui/ProductsTable';
import TextField from '@mui/material/TextField';
import AddCircle from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Categories from '@/Features/Admin/CatalogsPanel/ui/Categories';
import Catalogs from '@/Features/Admin/CatalogsPanel/ui/Catalogs';
import { useSetCatalogMutation, useSetCategoryMutation } from '@/Features/Admin/CatalogsPanel/model/reducers/query/rtkCatalogs';
import { useState } from 'react';

const arrayCompany = [
  {
    id: 1,
    title: 'Shop',
    phone: '+ 7 800 999 99 99',
    adress: 'Иваново, ул. Белая, д.4',
    email: 'shop@mail.ru',
    website: 'shop.com',
    socialNetworks: '',
  },
];

const arrayHomePage = [
  {
    id: 1,
    title: 'Создайте сайт вашей мечты',
    desc: 'У нас есть сайт, который вы можете настроить по своему усмотрению и начать или расширить свою деятельность.',
    image: '',
  },
];

const theme = createTheme({
  palette: {
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
  },
});

export default function MainAdminPage() {

  const [catalogValue, setCatalogValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')
  const [catalogID, setCatalogID] = useState(0)

  const textValidate = (str: string) => {
    const newStr = str.replace(/[^A-zА-я^ ]/gm, '')
    return newStr
  }

  const handleChangeCatalog = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = textValidate(e.target.value)
    setCatalogValue(value)
  }

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = textValidate(e.target.value)
    setCategoryValue(value)
  }

  const [setCatalog, {}] = useSetCatalogMutation()
  const [setCategory, {}] = useSetCategoryMutation()

  const setCatalogC = () => {
    setCatalog({title: catalogValue})
    setCatalogValue('')
  }

  const setCategoryC = () => {
    setCategory({catalog_id: catalogID, title: categoryValue})
    setCategoryValue('')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Box
          sx={{
            minWidth: '320px',
            margin: '20px 0 50px 0',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Accordion
            sx={{
              width: '350px',
              minHeight: '40px',
              color: 'black',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>О магазине</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {arrayCompany != null ? (
                arrayCompany.map((el) => {
                  return (
                    <>
                      <Typography variant="h5">{el.title}</Typography>
                      <Typography variant="h6">{el.website}</Typography>
                      <Typography variant="h6">{el.email}</Typography>
                      <Typography variant="h6">{el.phone}</Typography>
                      <Typography variant="h6">{el.adress}</Typography>
                      <Typography variant="h6">{el.socialNetworks}</Typography>
                    </>
                  );
                })
              ) : (
                <Typography variant="h5">Вы еще не внести данные о вашем сайте</Typography>
              )}

              <Button
                sx={{ marginTop: '20px' }}
                variant="contained"
                size="medium"
                href={route('editShopDetails')}
                color="secondary"
              >
                Редактировать
              </Button>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: '350px',
              minHeight: '40px',
              color: 'black',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Настройка главной страницы</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {arrayHomePage != null ? (
                arrayHomePage.map((el) => {
                  return (
                    <>
                      <Typography variant="h5">{el.title}</Typography>
                      <Typography variant="h6">{el.desc}</Typography>

                      <img
                        src={SliderMobile}
                        width={'200'}
                        alt="SliderMobile"
                      />
                    </>
                  );
                })
              ) : (
                <Typography variant="h5">Вы еще не внести данные о вашем сайте</Typography>
              )}

              <Button
                sx={{ marginTop: '20px' }}
                variant="contained"
                size="medium"
                href={route('EditHomeShop')}
                color="secondary"
              >
                Редактировать
              </Button>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: '350px',
              minHeight: '40px',
              color: 'black',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Каталоги</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Catalogs/>
              <TextField
                id="standard-basic"
                label="Новый каталог"
                variant="standard"
                value={catalogValue}
                onChange={(e) => {handleChangeCatalog(e)}}
                sx={{ marginLeft: '20px' }}
              />

              <IconButton
                edge="end"
                aria-label="edit"
                onClick={setCatalogC}
                sx={{ margin: '10px' }}
              >
                <AddCircle />
              </IconButton>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: '350px',
              minHeight: '40px',
              color: 'black',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Категории</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Categories getCatalogID={setCatalogID}/>

              <TextField
                id="standard-basic"
                label="Новая категория"
                variant="standard"
                value={categoryValue}
                onChange={(e) => {handleChangeCategory(e)}}
                sx={{ marginLeft: '20px' }}
              />

              <IconButton
                edge="end"
                aria-label="edit"
                sx={{ margin: '10px' }}
                onClick={setCategoryC}
              >
                <AddCircle />
              </IconButton>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: '350px',
              minHeight: '40px',
              color: 'black',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Товары</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ProductTable />
              <Button
                sx={{ marginTop: '20px' }}
                variant="contained"
                size="medium"
                href={route('AddShopProduct')}
                color="secondary"
              >
                Добавить
              </Button>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
