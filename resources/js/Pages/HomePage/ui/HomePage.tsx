import * as React from 'react';
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
import FormalMobile from '@/image/FormalMobile.png';
import GymMobile from '@/image/GymMobile.png';
import PartyMobile from '@/image/PartyMobile.png';
import CasualMobile from '@/image/CasualMobile.png';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import ImageListItem from '@mui/material/ImageListItem';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';

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

const arrayNewArrivals = [
  {
    id: 1,
    title: 'T-shirt with Tape Detales',
    price: '120',
    img: `${T_shirtWithTapeDetales}`,
    rating: 4,
  },
  {
    id: 2,
    title: 'Skinny Fit Jeans',
    price: '240',
    img: `${SkinnyFitJeans}`,
    rating: 3,
  },
];

const arrayTopSelling = [
  {
    id: 1,
    title: 'Vertical Striped Shirt',
    price: '212',
    img: `${VerticalStripedShirt}`,
    rating: 5,
  },
  {
    id: 2,
    title: 'Courage Graphic T-shirt',
    price: '145',
    img: `${CourageGraphicT_shirt}`,
    rating: 4,
  },
];
const arrayCategories = [
  {
    id: 1,
    img: `${CasualMobile}`,
    title: 'Casual',
  },
  {
    id: 2,
    img: `${FormalMobile}`,
    title: 'Formal',
  },
  {
    id: 3,
    img: `${PartyMobile}`,
    title: 'Party',
  },
  {
    id: 4,
    img: `${GymMobile}`,
    title: 'Gym',
  },
];

const arrayReviews = [
  {
    author: 'Sarah M.',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    rating: 5,
  },
  {
    author: 'Tim S.',
    description: 'An ad group contains one or more ads which target a shared set of keywords.',
    rating: 3,
  },
  {
    author: 'Alex I.',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    rating: 4,
  },
];

export default function MainPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = arrayReviews.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            textAlign: 'center',
            minWidth: '320px',
            leadingTrim: 'both',
            textEdge: 'cap',
            marginBottom: '50px',
          }}
        >
          {/* текст о сайте */}
          <Container fixed>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: '63px',
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: 700,
                  textAlign: 'left',
                  paddingLeft: '20px',
                  fontFamily: 'Integral CF',
                  fontSize: '36px',
                  lineHeight: '1',
                  marginBottom: '20px',
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
                  fontWeight: 400,
                  fontFamily: 'Satoshi',
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
                  maxWidth: '280px',
                  height: '52px',
                  alignContent: 'center',
                  borderRadius: '62px',
                  fontWeight: 500,
                  fontSize: '16px',
                  fontFamily: 'Satoshi',
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
                  fontWeight: 700,
                  marginBottom: '32px',
                  fontFamily: 'Integral CF',
                  fontSize: '32px',
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
                {arrayNewArrivals.map((item) => {
                  return (
                    <Box>
                      <Card
                        key={item.id}
                        sx={{
                          maxWidth: '187px',
                          borderRadius: '16px',
                          marginLeft: '15px',
                        }}
                      >
                        <CardMedia
                          sx={{ height: 200 }}
                          image={item.img}
                          title="item"
                        />
                        <CardContent>
                          <Typography
                            variant="h6"
                            component="div"
                            textAlign={'left'}
                            fontWeight={'700'}
                            fontSize={'16px'}
                            fontFamily={'Satoshi'}
                          >
                            {item.title}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Rating
                            name="half-rating"
                            size="small"
                            defaultValue={item.rating}
                          />
                          <Box
                            sx={{
                              ml: 1,
                              fontSize: '12px',
                              fontFamily: 'Satoshi',
                              fontWeight: '700',
                            }}
                          >
                            {item.rating}
                          </Box>
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
                            fontFamily={'Satoshi'}
                          >
                            ${item.price}
                          </Typography>
                        </Box>
                      </Card>
                    </Box>
                  );
                })}
              </Box>

              {/* кнопка перехода в каталог новинок */}
              <Button
                variant="contained"
                size="small"
                sx={{
                  width: '280px',
                  height: '52px',
                  alignContent: 'center',
                  borderRadius: '62px',
                  fontWeight: 500,
                  fontSize: '14px',
                  margin: '0 10px 10px 0',
                  fontFamily: 'Satoshi',
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
                borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: 700,
                  fontFamily: 'Integral CF',
                  fontSize: '32px',
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
                {arrayTopSelling.map((item) => {
                  return (
                    <Box>
                      <Card
                        key={item.id}
                        sx={{
                          maxWidth: '187px',
                          borderRadius: '16px',
                          marginLeft: '15px',
                        }}
                      >
                        <CardMedia
                          sx={{ height: 200 }}
                          image={item.img}
                          title="item"
                        />
                        <CardContent>
                          <Typography
                            variant="h6"
                            component="div"
                            textAlign={'left'}
                            fontWeight={'700'}
                            fontSize={'16px'}
                            fontFamily={'Satoshi'}
                          >
                            {item.title}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Rating
                            name="half-rating"
                            size="small"
                            defaultValue={item.rating}
                          />
                          <Box
                            sx={{
                              ml: 1,
                              fontSize: '12px',
                              fontFamily: 'Satoshi',
                              fontWeight: '700',
                            }}
                          >
                            {item.rating}
                          </Box>
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
                            fontFamily={'Satoshi'}
                          >
                            ${item.price}
                          </Typography>
                        </Box>
                      </Card>
                    </Box>
                  );
                })}
              </Box>

              {/* кнопка перехода в каталог товаров */}
              <Button
                variant="contained"
                size="small"
                sx={{
                  width: '280px',
                  height: '52px',
                  alignContent: 'center',
                  borderRadius: '62px',
                  fontWeight: 500,
                  fontSize: '14px',
                  margin: '0 10px 50px 0',
                  fontFamily: 'Satoshi',
                }}
                href="#"
                color="secondary"
              >
                Посмотреть все
              </Button>
            </Box>
          </Container>

          {/* категории */}

          <Container fixed>
            <Box
              sx={{
                marginBottom: '50px',
                background: '#F2F0F1',
                borderRadius: '16px',
                paddingBottom: '15px',
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: 700,
                  padding: '40px 0 30px 0',
                  fontFamily: 'Integral CF',
                  fontSize: '32px',
                }}
              >
                КАТЕГОРИИ
              </Typography>
              <>
                {arrayCategories.map((item) => {
                  return (
                    <ImageListItem
                      sx={{ minWidth: '260px', margin: '0 15px 15px 15px' }}
                      key={item.id}
                    >
                      <Box
                        sx={{
                          height: '160px',
                          textAlign: 'left',
                          padding: '25px 0 0 15px',
                          borderRadius: '16px',
                          background: 'url(' + `${item.img}` + ') no-repeat',
                          fontFamily: 'Satoshi',
                          fontWeight: '700',
                          fontSize: '24px',
                          color: '#000000',
                        }}
                      >
                        {item.title}
                      </Box>
                    </ImageListItem>
                  );
                })}
              </>
            </Box>
          </Container>

          {/* отзывы */}

          <Container fixed>
            <Box
              sx={{
                //marginBottom: '185px',
                borderRadius: '16px',
                paddingBottom: '15px',
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: 700,
                  padding: '40px 0 30px 0',
                  fontFamily: 'Integral CF',
                  fontSize: '32px',
                }}
              >
                ОТЗЫВЫ
              </Typography>
              <Box
                sx={{
                  maxWidth: 400,
                  flexGrow: 1,
                }}
              >
                <MobileStepper
                  variant="text"
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    </Button>
                  }
                />
                <Box
                  sx={{
                    padding: '24px 24px 12px 24px',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                    gap: '0px 200px',
                  }}
                >
                  <Box sx={{ ml: 1, display: 'flex', marginBottom: '20px' }}>
                    <Rating
                      name="half-rating"
                      size="medium"
                      defaultValue={arrayReviews[activeStep].rating}
                    />
                  </Box>

                  <Box sx={{ ml: 1, display: 'flex' }}>
                    <Typography
                      fontFamily="Satoshi"
                      fontWeight="700"
                      fontSize="16px"
                    >
                      {arrayReviews[activeStep].author}
                    </Typography>
                    <IconButton
                      aria-label="CheckCircleOutline"
                      sx={{
                        width: '16px',
                        height: '16px',
                        marginLeft: '4px',
                        background: '#01AB31 ',
                        color: '#FFFFFF',
                      }}
                    >
                      <CheckCircleOutline />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      maxWidth: 400,
                      width: '100%',
                      p: 2,
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <Typography
                      fontFamily="Satoshi"
                      fontWeight="400"
                      fontSize="14px"
                      textAlign={'start'}
                    >
                      {arrayReviews[activeStep].description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
