import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function Reviews() {
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
                height: 300,
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
    </ThemeProvider>
  );
}
