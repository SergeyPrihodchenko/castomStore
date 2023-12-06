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
import { ThemeProvider } from '@mui/material/styles';
import { style, theme } from './../modul/styles/HomePageStyles';

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
        <Box sx={{ ...style.Reviews.mainBox }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ ...style.title, ...style.titlePaddind }}
          >
            ОТЗЫВЫ
          </Typography>
          <Box sx={{ ...style.Reviews.MobileStepperBox }}>
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
            <Box sx={{ ...style.Reviews.reviewsBox }}>
              <Box sx={{ ...style.Reviews.ratingBox }}>
                <Rating
                  name="half-rating"
                  size="medium"
                  defaultValue={arrayReviews[activeStep].rating}
                />
              </Box>

              <Box sx={{ ml: 1, display: 'flex' }}>
                <Typography sx={{ ...style.Reviews.authorReviews }}>
                  {arrayReviews[activeStep].author}
                </Typography>
                <IconButton
                  aria-label="CheckCircleOutline"
                  sx={{ ...style.Reviews.iconButtonCheckCicle }}
                >
                  <CheckCircleOutline />
                </IconButton>
              </Box>
              <Box sx={{ ...style.Reviews.descBox }}>
                <Typography sx={{ ...style.Reviews.descText }}>
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
