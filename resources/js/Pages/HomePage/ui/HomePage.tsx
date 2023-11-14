import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SliderMobile from '@/image/SliderMobile.png';
import Vector from '@/image/Vector.png';
import T_shirtWithTapeDetales from '@/image/T_shirtWithTapeDetails.png';
import SkinnyFitJeans from '@/image/SkinnyFitJeans.png';
import VerticalStripedShirt from '@/image/VerticalStripedShirt.png';
import CourageGraphicT_shirt from '@/image/CourageGraphicT_shirt.png';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
  },
});

export default function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          textAlign: 'center',
          width: '320px',
        }}
      >
        {/* текст о сайте */}
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
                textAlign: 'left',
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
                textAlign: 'left',
                paddingLeft: '20px',
              }}
            >
              У нас есть сайт, который вы можете настроить по своему усмотрению и начать или
              расширить свою деятельность.
            </Typography>
            {/* кнопка перехода в настройки */}
            <Button
              variant="contained"
              size="small"
              sx={{
                minWidth: '258px',
                height: '52px',
                alignContent: 'center',
                borderRadius: '62px',
                fontWeight: 400,
                fontSize: '12px',
                margin: '20px 0 20px 20px',
              }}
              href="/dashboard"
              color="primary"
            >
              Настройки магазина
            </Button>
          </Box>
        </Container>

        {/* картинка */}

        <Box
          sx={{
            background: '#F2F0F1',
          }}
        >
          <Container fixed>
            <Box
              sx={{
                margin: '10px 0 50px -20px',
                padding: '60px 0 0 40px',
                height: '448px',
                background: 'url(' + SliderMobile + ') no-repeat #F2F0F1',
              }}
            >
              <Grid
                container
                spacing={8}
              >
                <Grid
                  item
                  xs={4}
                ></Grid>
                <Grid
                  item
                  xs={4}
                ></Grid>
                <Grid
                  item
                  xs={4}
                >
                  <img
                    src={Vector}
                    width={'76'}
                    height={'76'}
                    alt="vectorBig"
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                >
                  <Grid
                    item
                    xs={6}
                  >
                    <img
                      src={Vector}
                      width={'44'}
                      height={'44'}
                      alt="vectorSmall"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                  ></Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

        {/* новинки */}
        <Container fixed>
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 900,
                marginBottom: '32px',
              }}
            >
              НОВИНКИ
            </Typography>

            <Box
              sx={{
                marginBottom: '32px',
                display: 'flex',
                alignContent: 'space-between',
              }}
            >
              <Card sx={{ width: '187px', borderRadius: '16px', marginRight: '10px' }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={T_shirtWithTapeDetales}
                  title="item"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    textAlign={'left'}
                    fontWeight={'700'}
                    fontSize={'16px'}
                  >
                    T-shirt with Tape Detales
                  </Typography>
                </CardContent>
                <CardActions>
                  <Rating
                    name="half-rating"
                    size="small"
                    defaultValue={4.5}
                    precision={0.5}
                  />
                  <Box sx={{ fontSize: '12px' }}>4.5/5</Box>
                </CardActions>
                <Box
                  sx={{
                    ml: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    textAlign={'left'}
                    fontWeight={'700'}
                    fontSize={'20px'}
                    paddingBottom={'10px'}
                  >
                    $120
                  </Typography>
                </Box>
              </Card>
              <Card sx={{ width: '187px', borderRadius: '16px' }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={SkinnyFitJeans}
                  title="item"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    textAlign={'left'}
                    fontWeight={'700'}
                    fontSize={'16px'}
                  >
                    Skinny Fit Jeans
                  </Typography>
                </CardContent>
                <CardActions>
                  <Rating
                    name="half-rating"
                    size="small"
                    defaultValue={3.5}
                    precision={0.5}
                  />
                  <Box sx={{ fontSize: '12px' }}>3.5/5</Box>
                </CardActions>
                <Box
                  sx={{
                    ml: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    textAlign={'left'}
                    fontWeight={'700'}
                    fontSize={'20px'}
                    paddingBottom={'10px'}
                  >
                    $120
                  </Typography>
                </Box>
              </Card>
            </Box>

            {/* кнопка перехода в каталог новинок */}
            <Button
              variant="contained"
              size="small"
              sx={{
                minWidth: '258px',
                height: '52px',
                alignContent: 'center',
                borderRadius: '62px',
                fontWeight: 400,
                fontSize: '12px',
                margin: '0 30px 10px 0',
              }}
              href="#"
              color="secondary"
            >
              Посмотреть все
            </Button>
          </Box>
        </Container>

        {/* популярные товары */}
        <Container fixed>
          <Box
            sx={{
              margin: '30px 0 50px 0',
              // width: '320px',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 900,
                margin: '40px 0 40px 0',
              }}
            >
              ПОПУЛЯРНЫЕ ТОВАРЫ
            </Typography>
            <Box
              sx={{
                marginBottom: '32px',
                display: 'flex',
                alignContent: 'space-between',
              }}
            >
              <Card
                sx={{
                  width: '187px',
                  borderRadius: '16px',
                  marginRight: '10px',
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={VerticalStripedShirt}
                  title="item"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    textAlign={'left'}
                    fontWeight={'700'}
                    fontSize={'16px'}
                  >
                    Vertical Striped Shirt
                  </Typography>
                </CardContent>
                <CardActions>
                  <Rating
                    name="half-rating"
                    size="small"
                    defaultValue={5}
                    precision={0.5}
                  />
                  <Box sx={{ fontSize: '12px' }}>5/5</Box>
                </CardActions>
                <Box
                  sx={{
                    ml: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    textAlign={'left'}
                    fontWeight={'700'}
                    fontSize={'20px'}
                    paddingBottom={'10px'}
                  >
                    $212
                  </Typography>
                </Box>
              </Card>

              <Card
                sx={{
                  width: '187px',
                  borderRadius: '16px',
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={CourageGraphicT_shirt}
                  title="item"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    textAlign={'left'}
                    fontWeight={'700'}
                    fontSize={'16px'}
                  >
                    Courage Graphic T-shirt
                  </Typography>
                </CardContent>
                <CardActions>
                  <Rating
                    name="half-rating"
                    size="small"
                    defaultValue={4}
                    precision={0.5}
                  />
                  <Box sx={{ fontSize: '12px' }}>4/5</Box>
                </CardActions>
                <Box
                  sx={{
                    ml: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    textAlign={'left'}
                    fontWeight={'700'}
                    fontSize={'20px'}
                    paddingBottom={'10px'}
                  >
                    $145
                  </Typography>
                </Box>
              </Card>
            </Box>

            {/* кнопка перехода в каталог товаров */}
            <Button
              variant="contained"
              size="small"
              sx={{
                minWidth: '258px',
                height: '52px',
                alignContent: 'center',
                borderRadius: '62px',
                fontWeight: 400,
                fontSize: '12px',
                margin: '0 30px 20px 0',
              }}
              href="#"
              color="secondary"
            >
              Посмотреть все
            </Button>
          </Box>
        </Container>
        {/* категории */}
        {/* отзывы и
обратная связь отнести к родвалу сайта*/}
      </Box>
    </ThemeProvider>
  );
}
