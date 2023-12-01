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

export default function TopSelling() {
  return (
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
            marginBottom: '30px',
            display: 'flex',
            alignContent: 'space-between',
            marginLeft: '-20px',
          }}
        >
          {arrayTopSelling.map((item) => {
            return (
              <Box>
                <Card
                  key={item.id}
                  sx={{
                    minWidth: '140px',
                    maxWidth: '187px',
                    minHeight: '385px',
                    maxHeight: '406px',
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
  );
}
