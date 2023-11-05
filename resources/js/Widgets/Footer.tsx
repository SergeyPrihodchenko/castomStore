import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from '@inertiajs/react';
import Typography from '@mui/material/Typography';
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
import IconButton from '@mui/material/IconButton';

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        fixed
        sx={{
          MaxWidth: '390px',
          backgroundColor: '#F0F0F0',
        }}
      >
        <Box>
          <Link href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 900,
                mr: 4,
                marginLeft: '20px',
              }}
            >
              SHOP.COM
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: '12px',
                alignContent: 'left',
                marginLeft: '20px',
              }}
            >
              У нас есть сайт, который вы можете настроить по своему усмотрению
              т начать или расширить свою деятельность.
            </Typography>
          </Link>

          <IconButton
            href="/"
            sx={{
              color: 'black',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.2)',
              width: '28px',
              height: '28px',
              marginTop: '10px',
              marginLeft: '10px',
              marginBottom: '20px',
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
              marginTop: '10px',
              marginLeft: '10px',
              marginBottom: '20px',
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
              marginTop: '10px',
              marginLeft: '10px',
              marginBottom: '20px',
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
              marginTop: '10px',
              marginLeft: '10px',
              marginBottom: '20px',
            }}
          >
            <FaGithub />
          </IconButton>
          <Box
            sx={{
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
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
              Shop.com © 2000-2023, All Rights Reserved
            </Typography>
            <IconButton
              href="/"
              sx={{
                width: '40px',
                height: '40px',
                marginTop: '10px',
                marginLeft: '10px',
                marginBottom: '20px',
              }}
            >
              <FaCcVisa />
            </IconButton>
            <IconButton
              href="/"
              sx={{
                width: '40px',
                height: '40px',
                marginTop: '10px',
                marginLeft: '10px',
                marginBottom: '20px',
              }}
            >
              <FaCcMastercard />
            </IconButton>
            <IconButton
              href="/"
              sx={{
                width: '40px',
                height: '40px',
                marginTop: '10px',
                marginLeft: '10px',
                marginBottom: '20px',
              }}
            >
              <FaCcPaypal />
            </IconButton>
            <IconButton
              href="/"
              sx={{
                width: '40px',
                height: '40px',
                marginTop: '10px',
                marginLeft: '10px',
                marginBottom: '20px',
              }}
            >
              <FaApplePay />
            </IconButton>
            <IconButton
              href="/"
              sx={{
                width: '40px',
                height: '40px',
                marginTop: '10px',
                marginLeft: '10px',
                marginBottom: '20px',
              }}
            >
              <FaGooglePay />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

// background: #FFFFFF;
// border: 1px solid rgba(0, 0, 0, 0.2);
