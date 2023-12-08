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
import { style } from './module/styles/FooterStyle';

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
