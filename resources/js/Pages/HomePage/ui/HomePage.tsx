import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SliderMobile from '@/image/SliderMobile.png';
import Vector from '@/image/Vector.png';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
          marginTop: '20px',
        }}
      >
        <Container fixed>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 900,
                alignItems: 'center',
                paddingLeft: '20px',
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
                alignContent: 'center',
                paddingLeft: '20px',
              }}
            >
              У нас есть сайт, который вы можете настроить по своему усмотрению
              и начать или расширить свою деятельность.
            </Typography>

            <Button
              variant="contained"
              size="small"
              sx={{
                width: '300px',
                height: '52px',
                alignContent: 'center',
                borderRadius: '62px',
                fontWeight: 400,
                fontSize: '12px',
                margin: '20px 0 20px 40px',
              }}
              href="/dashboard"
              color="primary"
            >
              Настройки магазина
            </Button>
          </Box>
        </Container>
        <Box
          sx={{
            background: '#F2F0F1',
            //paddingLeft: '20px',
          }}
        >
          <Paper
            style={{
              position: 'relative',
              margin: '20px 0 50px 0',
              minWidth: '390px',
              height: '448px',
              background: 'url(' + SliderMobile + ') no-repeat #F2F0F1',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}></Grid>
              <Grid item xs={4}>
                <img src={Vector} width={'76'} height={'76'} alt="vectorBig" />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={Vector}
                  width={'44'}
                  height={'44'}
                  alt="vectorSmall"
                />
              </Grid>
              <Grid item xs={8}></Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
