import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from '@inertiajs/react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

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
export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Box
        sx={{
          minWidth: '320px',
          backgroundColor: '#F0F0F0',
          paddingLeft: '20px',
        }}
      >
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
            У нас есть сайт, который вы можете настроить по своему усмотрению и начать или расширить
            свою деятельность.
          </Typography>

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
    </React.Fragment>
  );
}
