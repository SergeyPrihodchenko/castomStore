import { Box, Grid, Rating, Typography } from '@mui/material';
import { style } from '../modul/styles/showPage';
import { useState } from 'react';

const ShowElement = () => {

  const imgs: string[] = ['storage/showPage/3.jpg', 'storage/showPage/2.jpg', 'storage/showPage/4.jpg', 'storage/showPage/1.jpg'];

  const [index, setIndex] = useState(0);

  const [imgList, setImgList] = useState(imgs);

  const [mainImg, setMainImg] = useState(imgList[index]);

  const switchImg = (i: number) => {
    setIndex(i);
    setMainImg(imgList[i]);
  }

  const imgBlock = (img: string, i: number) => {
    
    if(index != i) {
      return (
        <Grid
          key={i}
          item
          xs={4}
          sm={12}
        >
          <Box
            onClick={() => {switchImg(i)}}
            sx={{ ...style.slider.image, backgroundImage: `url(${img})` }}
          ></Box>
        </Grid>
      );
    }
  }

  return (
    <Grid
      container
      sx={{ ...style.mainBox, maxWidth: '1440px', margin: '0 auto' }}
    >
      <Grid
        container
        spacing={1}
        sx={{ ...style.box, flexDirection: 'row', justifyContent: 'flex-start' }}
      >
        <Grid
          item
          xs={12}
          sm={4}
        >
          <Box
            sx={{ ...style.slider.mainImage, backgroundImage: `url(${mainImg})` }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
        >
          <Grid
            container
            spacing={1}
            sx={style.slider.listImages}
          >
            {imgList.map((img, i) => imgBlock(img, i))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Grid
            container
            sx={style.box}
          >
            <Grid
              item
              sx={style.itemPanel.headerBox}
              xs={12}
            >
              <Typography
                variant="h1"
                component={'h1'}
                sx={style.itemPanel.header}
              >
                One Life Graphic T-shirt
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={style.itemPanel.rating}
            >
              <Rating
                name="half-rating"
                size="small"
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Typography
                variant="h3"
                component={'h3'}
                sx={style.itemPanel.price}
              >
                $260
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Typography
                component={'p'}
                sx={style.itemPanel.description}
              >
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
                breathable fabric, it offers superior comfort and style.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Grid
                container
                spacing={1}
              >
                <Grid
                  item
                  xs={4}
                >
                  <Box sx={style.itemPanel.buttonCounte}>
                    <Typography
                      component={'span'}
                      sx={style.itemPanel.buttonCounte.item}
                    >
                      -
                    </Typography>
                    <Typography
                      component={'span'}
                      sx={style.itemPanel.buttonCounte.item}
                    >
                      1
                    </Typography>
                    <Typography
                      component={'span'}
                      sx={style.itemPanel.buttonCounte.item}
                    >
                      +
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={8}
                >
                  <Box
                    sx={style.itemPanel.buttonAdd}
                    component={'button'}
                  >
                    <Typography
                      component={'span'}
                      sx={style.itemPanel.buttonAdd.item}
                    >
                      Add to Cart
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item></Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShowElement;
