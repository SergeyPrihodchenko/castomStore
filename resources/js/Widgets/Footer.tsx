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
let shopName = 'Shop.com';

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ ...style.mainBox }}>
        {/* о компании */}

        <Container fixed>
          <Link href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{ ...style.title }}
            >
              SHOP.COM
            </Typography>
          </Link>
          <Typography
            variant="h5"
            component="div"
            sx={{ ...style.text }}
          >
            У нас есть сайт, который вы можете настроить по своему усмотрению и начать или расширить
            свою деятельность.
          </Typography>

          {/* соцсети */}

          <IconButton
            href="/"
            sx={{ ...style.socialIconButton }}
          >
            <FaTwitter />
          </IconButton>
          <IconButton
            href="/"
            sx={{ ...style.socialIconButton }}
          >
            <FaFacebookF />
          </IconButton>
          <IconButton
            href="/"
            sx={{ ...style.socialIconButton }}
          >
            <FaInstagram />
          </IconButton>
          <IconButton
            href="/"
            sx={{ ...style.socialIconButton }}
          >
            <FaGithub />
          </IconButton>
          <Box sx={{ ...style.lineBox }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ ...style.textFooter }}
            >
              {shopName} © {year}, Все права защищены
            </Typography>

            {/* платежные системы */}

            <IconButton
              href="/"
              sx={{ ...style.payIconButton }}
            >
              <FaCcVisa />
            </IconButton>
            <IconButton
              href="/"
              sx={{ ...style.payIconButton }}
            >
              <FaCcMastercard />
            </IconButton>
            <IconButton
              href="/"
              sx={{ ...style.payIconButton }}
            >
              <FaCcPaypal />
            </IconButton>
            <IconButton
              href="/"
              sx={{ ...style.payIconButton }}
            >
              <FaApplePay />
            </IconButton>
            <IconButton
              href="/"
              sx={{ ...style.payIconButton }}
            >
              <FaGooglePay />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}

const style = {
  mainBox: {
    minWidth: '320px',
    backgroundColor: '#F0F0F0',
    padding: '145px 0 0 20px',
  },

  title: {
    flexGrow: 1,
    fontWeight: 900,
    mr: 4,
  },

  text: {
    flexGrow: 1,
    fontSize: '12px',
    alignContent: 'left',
  },

  socialIconButton: {
    color: 'black',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    width: '28px',
    height: '28px',
    margin: '10px 10px 20px 0',
  },

  lineBox: {
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginRight: '40px',
  },

  textFooter: {
    fontWeight: '400',
    fontSize: '12px',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: '10px',
  },

  payIconButton: {
    width: '40px',
    height: '40px',
    margin: '10px 0 20px 10px',
  },
};
