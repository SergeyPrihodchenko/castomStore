import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from '@inertiajs/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
} from 'react-icons/fa6';

let today = new Date();
let year = today.getFullYear();

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
  },
});

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* подписка */}

        <Box sx={{ zIndex: '1' }}>
          <Box
            sx={{
              position: 'absolute',
              minWidth: '358px',
              maxHeight: '293px',
              background: '#000000',
              borderRadius: '20px',
              zIndex: '2',

              padding: '32px 24px 28px 24px',
            }}
          >
            <Typography
              fontFamily="Integral CF"
              fontWeight="700"
              fontSize="32px"
              color="#FFFFFF"
              textAlign="left"
              marginBottom={'32px'}
            >
              ПОДПИШИТЕСЬ НА НОВИНКИ
            </Typography>

            <Paper
              component="form"
              sx={{
                p: '12px',
                display: 'flex',
                alignItems: 'center',
                width: 311,
                height: 42,
                borderRadius: '62px',
              }}
            >
              <IconButton
                sx={{ p: '10px' }}
                aria-label="menu"
              >
                <MailOutlineIcon sx={{ width: '20px', height: '20px' }} />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Введите свой Email"
                inputProps={{ 'aria-label': 'Введите свой Email' }}
              />
            </Paper>
            <Button
              variant="contained"
              size="small"
              sx={{
                width: '311px',
                height: '42px',
                alignContent: 'center',
                borderRadius: '62px',
                fontWeight: 700,
                fontSize: '14px',
                margin: '12px 10px 0 0',
                fontFamily: 'Satoshi',
                paddingTop: '10px',
              }}
              color="secondary"
            >
              Подписаться
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: '140px',
            backgroundColor: '#FFFF',
            minWidth: '320px',
          }}
        ></Box>
        <Box
          sx={{
            minWidth: '320px',
            backgroundColor: '#F0F0F0',
            paddingLeft: '20px',
          }}
        >
          {/* о компании */}

          <Container fixed>
            <Link href="/">
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: 900,
                  mr: 4,
                  paddingTop: '165px',
                }}
              >
                SHOP.COM
              </Typography>
            </Link>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: '12px',
                alignContent: 'left',
              }}
            >
              У нас есть сайт, который вы можете настроить по своему усмотрению и начать или
              расширить свою деятельность.
            </Typography>

            {/* соцсети */}

            <IconButton
              href="/"
              sx={{
                color: 'black',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                width: '28px',
                height: '28px',
                margin: '10px 0 20px 0',
              }}
            >
              <FaTwitter />
            </IconButton>
            <IconButton
              href="/"
              sx={{
                color: 'black',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                width: '28px',
                height: '28px',
                margin: '10px 0 20px 10px',
              }}
            >
              <FaFacebookF />
            </IconButton>
            <IconButton
              href="/"
              sx={{
                color: 'black',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                width: '28px',
                height: '28px',
                margin: '10px 0 20px 10px',
              }}
            >
              <FaInstagram />
            </IconButton>
            <IconButton
              href="/"
              sx={{
                color: 'black',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                width: '28px',
                height: '28px',
                margin: '10px 0 20px 10px',
              }}
            >
              <FaGithub />
            </IconButton>
            <Box
              sx={{
                borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                marginRight: '40px',
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: '400',
                  fontSize: '12px',
                  color: 'rgba(0, 0, 0, 0.6)',
                  marginTop: '10px',
                }}
              >
                Shop.com © {year}, Все права защищены
              </Typography>

              {/* платежные системы */}

              <IconButton
                href="/"
                sx={{
                  width: '40px',
                  height: '40px',
                  margin: '10px 0 20px 10px',
                }}
              >
                <FaCcVisa />
              </IconButton>
              <IconButton
                href="/"
                sx={{
                  width: '40px',
                  height: '40px',
                  margin: '10px 0 20px 10px',
                }}
              >
                <FaCcMastercard />
              </IconButton>
              <IconButton
                href="/"
                sx={{
                  width: '40px',
                  height: '40px',
                  margin: '10px 0 20px 10px',
                }}
              >
                <FaCcPaypal />
              </IconButton>
              <IconButton
                href="/"
                sx={{
                  width: '40px',
                  height: '40px',
                  margin: '10px 0 20px 10px',
                }}
              >
                <FaApplePay />
              </IconButton>
              <IconButton
                href="/"
                sx={{
                  width: '40px',
                  height: '40px',
                  margin: '10px 0 20px 10px',
                }}
              >
                <FaGooglePay />
              </IconButton>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}
