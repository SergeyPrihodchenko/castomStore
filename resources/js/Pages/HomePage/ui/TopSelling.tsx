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
import VerticalStripedShirt from '@/image/VerticalStripedShirt.png';
import CourageGraphicT_shirt from '@/image/CourageGraphicT_shirt.png';
import { style } from './../module/styles/HomePageStyles';

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
  {
    id: 3,
    title: 'Vertical Striped Shirt',
    price: '212',
    img: `${VerticalStripedShirt}`,
    rating: 5,
  },
  {
    id: 4,
    title: 'Courage Graphic T-shirt',
    price: '145',
    img: `${CourageGraphicT_shirt}`,
    rating: 4,
  },
  {
    id: 5,
    title: 'Vertical Striped Shirt',
    price: '212',
    img: `${VerticalStripedShirt}`,
    rating: 5,
  },
];

export default function TopSelling() {
  return (
    <Container fixed>
      <Box sx={{ ...style.TopSelling.mainBox, ...style.mainCardBox }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ ...style.title, ...style.titleMargin }}
        >
          ПОПУЛЯРНЫЕ ТОВАРЫ
        </Typography>
        <Box sx={{ ...style.itemBox }}>
          {arrayTopSelling.map((item) => {
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

        {/* кнопка перехода в каталог товаров */}
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
