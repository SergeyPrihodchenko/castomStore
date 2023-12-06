import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormalMobile from '@/image/FormalMobile.png';
import GymMobile from '@/image/GymMobile.png';
import PartyMobile from '@/image/PartyMobile.png';
import CasualMobile from '@/image/CasualMobile.png';
import ImageListItem from '@mui/material/ImageListItem';
import { style } from './../modul/styles/HomePageStyles';

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

export default function Categories() {
  return (
    <Container fixed>
      <Box sx={{ ...style.Categories.mainBox }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ ...style.title, ...style.titlePaddind }}
        >
          КАТЕГОРИИ
        </Typography>
        <Box>
          {arrayCategories.map((item) => {
            return (
              <ImageListItem
                sx={{ ...style.Categories.imgList }}
                key={item.id}
              >
                <Box
                  sx={{
                    ...style.Categories.imgBox,
                    backgroundImage: 'url(' + `${item.img}` + ')',
                  }}
                >
                  {item.title}
                </Box>
              </ImageListItem>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}
