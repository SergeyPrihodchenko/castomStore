import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { style, theme } from './../modul/styles/HomePageStyles';
import Reviews from './Reviews';
import NewArrivals from './NewArrivals';
import TopSelling from './TopSelling';
import Categories from './Categories';
import HeaderWithPicture from './HeaderWithPicture';

export default function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...style.mainBox }}>
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
