import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SliderMobile from '@/image/SliderMobile.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
  },
});

export default function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minWidth: '390px',
          height: '800px',
          alignContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 900,
            mr: 4,
            padding: '20px 0 0 40px',
          }}
        >
          СОЗДАЙТЕ САЙТ ВАШЕЙ МЕЧТЫ
        </Typography>

        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: '14px',
            alignContent: 'left',
            padding: '0 0 10px 40px',
          }}
        >
          У нас есть сайт, который вы можете настроить по своему усмотрению и
          начать или расширить свою деятельность.
        </Typography>

        <Button
          variant="contained"
          size="small"
          sx={{
            minWidth: '300px',
            height: '16px',
            padding: '40px',
            alignContent: 'center',
            borderRadius: '62px',
            fontWeight: 400,
            fontSize: '12px',
            marginLeft: '40px',
          }}
          href="/dashboard"
          color="primary"
        >
          Настройки магазина
        </Button>
        <Box
          sx={{
            marginTop: '20px',
            width: '390px',
            height: '448px',
            background: 'url(' + SliderMobile + ') no-repeat',
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
