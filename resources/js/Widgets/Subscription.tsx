import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

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

export default function Subscription() {
  return (
    <ThemeProvider theme={theme}>
      {/* подписка */}
      <Container fixed>
        <Box
          sx={{
            zIndex: '1',
            marginBottom: '50px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              maxWidth: '360px',
              height: '290px',
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
                maxWidth: '349px',
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
                minWidth: '310px',
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
            minWidth: '310px',
          }}
        ></Box>
      </Container>
    </ThemeProvider>
  );
}
