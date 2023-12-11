import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import T_shirtWithTapeDetales from '@/image/T_shirtWithTapeDetails.png';
import SkinnyFitJeans from '@/image/SkinnyFitJeans.png';
import { style } from './../module/styles/HomePageStyles';

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
  {
    id: 3,
    title: 'T-shirt with Tape Detales',
    price: '120',
    img: `${T_shirtWithTapeDetales}`,
    rating: 4,
  },
  {
    id: 4,
    title: 'Skinny Fit Jeans',
    price: '240',
    img: `${SkinnyFitJeans}`,
    rating: 3,
  },
  {
    id: 5,
    title: 'T-shirt with Tape Detales',
    price: '120',
    img: `${T_shirtWithTapeDetales}`,
    rating: 4,
  },
];

export default function NewArrivals() {
  return (
    <Container fixed>
      <Box sx={{ ...style.mainCardBox }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ ...style.title }}
        >
          НОВИНКИ
        </Typography>

        <Box sx={{ ...style.itemBox }}>
          {arrayNewArrivals.map((item) => {
            return (
              <Box sx={{ ...style.cardBox }}>
                <Card
                  key={item.id}
                  sx={{ ...style.itemCard }}
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
                      sx={{ ...style.itemTitle }}
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
                    <Box sx={{ ...style.itemRating }}>{item.rating}</Box>
                  </CardActions>
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ ...style.itemPrice }}
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
          sx={{ ...style.button }}
          href="#"
          color="secondary"
        >
          Посмотреть все
        </Button>
      </Box>
    </Container>
  );
}
