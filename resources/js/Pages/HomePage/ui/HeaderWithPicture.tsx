import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SliderMobile from '@/image/SliderMobile.png';
import { style } from './../module/styles/HomePageStyles';

export default function HeaderWithPicture() {
  return (
    <Box>
      {/* текст о сайте */}
      <Container fixed>
        <Box sx={{ ...style.HeaderWithPicture.mainBox }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ ...style.title, ...style.HeaderWithPicture.title }}
          >
            СОЗДАЙТЕ САЙТ ВАШЕЙ МЕЧТЫ
          </Typography>

          <Typography
            variant="h5"
            component="div"
            sx={{ ...style.HeaderWithPicture.text }}
          >
            У нас есть сайт, который вы можете настроить по своему усмотрению и начать или расширить
            свою деятельность.
          </Typography>

          {/* кнопка перехода в настройки */}
          <Button
            variant="contained"
            size="small"
            sx={{ ...style.button }}
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
          ...style.HeaderWithPicture.imgBoxColor,
        }}
      >
        <Container fixed>
          <Box
            sx={{
              ...style.HeaderWithPicture.imgBox,
              backgroundImage: 'url(' + SliderMobile + ')',
            }}
          />
        </Container>
      </Box>
    </Box>
  );
}
