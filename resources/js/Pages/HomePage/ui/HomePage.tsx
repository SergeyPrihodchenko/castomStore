import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Reviews from './Reviews';
import NewArrivals from './NewArrivals';
import TopSelling from './TopSelling';
import Categories from './Categories';
import HeaderWithPicture from './HeaderWithPicture';

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
      <Box sx={{ minWidth: 320, margin: '0 auto', textAlign: 'center', border: '1px solid red' }}>
        {/* текст о сайте с картинкой*/}
        <HeaderWithPicture />

        {/* новинки */}
        <NewArrivals />

        {/* популярные товары */}
        <TopSelling />

        {/* категории */}
        <Categories />

        {/* отзывы */}
        <Reviews />
      </Box>
    </ThemeProvider>
  );
}
