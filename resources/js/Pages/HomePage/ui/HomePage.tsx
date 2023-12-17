import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { style, theme } from './../module/styles/HomePageStyles';
import Reviews from './Reviews';
import NewArrivals from './NewArrivals';
import TopSelling from './TopSelling';
import Categories from './Categories';
import HeaderWithPicture from './HeaderWithPicture';
import Subscription from '@/Widgets/Subscription/Subscription';

export default function MainPage({ data }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...style.mainBox }}>
        {/* текст о сайте с картинкой*/}
        <HeaderWithPicture data={data} />

        {/* новинки */}
        <NewArrivals />

        {/* популярные товары */}
        <TopSelling />

        {/* категории */}
        <Categories />

        {/* отзывы */}
        <Reviews />

        {/* подписка */}
        <Subscription />
      </Box>
    </ThemeProvider>
  );
}
