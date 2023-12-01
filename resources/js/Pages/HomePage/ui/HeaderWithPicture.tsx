import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SliderMobile from '@/image/SliderMobile.png';
import Vector from '@/image/Vector.png';
import Grid from '@mui/material/Grid';

export default function HeaderWithPicture() {
  return (
    <Box>
      {/* текст о сайте */}
      <Container fixed>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '63px',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              textAlign: 'left',
              paddingLeft: '20px',
              fontFamily: 'Integral CF',
              fontSize: '36px',
              lineHeight: '1',
              marginBottom: '20px',
            }}
          >
            СОЗДАЙТЕ САЙТ ВАШЕЙ МЕЧТЫ
          </Typography>

          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: '14px',
              textAlign: 'left',
              paddingLeft: '20px',
              fontWeight: 400,
              fontFamily: 'Satoshi',
            }}
          >
            У нас есть сайт, который вы можете настроить по своему усмотрению и начать или расширить
            свою деятельность.
          </Typography>

          {/* кнопка перехода в настройки */}
          <Button
            variant="contained"
            size="small"
            sx={{
              maxWidth: '280px',
              height: '52px',
              alignContent: 'center',
              borderRadius: '62px',
              fontWeight: 500,
              fontSize: '16px',
              fontFamily: 'Satoshi',
              margin: '20px 0 20px 20px',
            }}
            href="/dashboard"
            color="primary"
          >
            Настройки магазина
          </Button>
        </Box>
      </Container>

      {/* картинка */}
      <Box
        sx={{
          background: '#F2F0F1',
        }}
      >
        <Container fixed>
          <Box
            sx={{
              margin: '10px 0 50px 0px',
              paddingTop: '60px',
              height: '448px',
              background: 'url(' + SliderMobile + ') no-repeat right #F2F0F1',
            }}
          >
            <Grid
              container
              spacing={8}
            >
              <Grid
                item
                xs={4}
              ></Grid>
              <Grid
                item
                xs={4}
              ></Grid>
              <Grid
                item
                xs={4}
              >
                <img
                  src={Vector}
                  width={'76'}
                  height={'76'}
                  alt="vectorBig"
                />
              </Grid>
              <Grid
                item
                xs={4}
              >
                <Grid
                  item
                  xs={6}
                >
                  <img
                    src={Vector}
                    width={'44'}
                    height={'44'}
                    alt="vectorSmall"
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                ></Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
