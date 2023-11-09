import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const theme = createTheme({
  palette: {
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
  },
});

export default function MainAdminPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Box
          sx={{
            minWidth: '390px',
            margin: '20px 0 50px 0',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Accordion
            sx={{
              width: '320px',
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
                <Typography variant="h5">
                  Вы еще не внести данные о вашем сайте
                </Typography>
              )}

              <Button
                variant="contained"
                size="small"
                href={route('createShopFormPage')}
                color="secondary"
                sx={{ margin: '20px' }}
              >
                Создать
              </Button>
              <Button
                variant="contained"
                size="small"
                href="#"
                color="secondary"
              >
                Редактировать
              </Button>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: '320px',
              minHeight: '40px',
              color: 'black',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Настройка страниц магазина</Typography>
            </AccordionSummary>
            <AccordionDetails>Форма</AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: '320px',
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
            <AccordionDetails>Форма</AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: '320px',
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
            <AccordionDetails>Форма</AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
