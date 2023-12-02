import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormalMobile from '@/image/FormalMobile.png';
import GymMobile from '@/image/GymMobile.png';
import PartyMobile from '@/image/PartyMobile.png';
import CasualMobile from '@/image/CasualMobile.png';
import ImageListItem from '@mui/material/ImageListItem';

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
        <Box>
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
                    background: 'url(' + `${item.img}` + ') no-repeat right	#FFFFFF',
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
        </Box>
      </Box>
    </Container>
  );
}
