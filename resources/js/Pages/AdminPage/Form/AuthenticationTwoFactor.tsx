import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export default function AuthenticationTwoFactor() {
  return (
    <>
      {/* двухфакторная авторизация */}

      <Container fixed>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ marginTop: '20px' }}>
            <Paper
              elevation={3}
              sx={{
                width: '310px',
                height: '500px',
                borderRadius: '20px',
                padding: '32px 24px 28px 24px',
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <IconButton
                  aria-label="chevron_left"
                  disabled
                  color="primary"
                  href="#"
                  size="large"
                >
                  <ChevronLeftIcon fontSize="inherit" />
                </IconButton>
                <Typography
                  fontFamily="Integral CF"
                  fontSize="20px"
                  color="#808080"
                  paddingTop={'10px'}
                  //   marginLeft={'-15px'}
                >
                  Назад
                </Typography>
              </Box>

              <Typography
                fontFamily="Integral CF"
                fontWeight="900"
                fontSize="26px"
                textAlign="center"
                margin={'30px'}
              >
                Двухфакторная аутентификация
              </Typography>
              <Typography
                fontFamily="Integral CF"
                fontSize="18px"
                textAlign="center"
                marginBottom={'10px'}
              >
                Введите код, отображаемый в вашем приложении для аутентификации
              </Typography>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label={
                    <Typography
                      fontFamily="Integral CF"
                      fontSize="18px"
                    >
                      Код
                    </Typography>
                  }
                  variant="standard"
                  //value={}
                  //onChange={}
                  sx={{ margin: '20px', outline: 'none' }}
                />

                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    minWidth: '245px',
                    height: '42px',
                    alignContent: 'center',
                    borderRadius: '62px',
                    fontWeight: 700,
                    fontSize: '14px',
                    margin: '12px 10px 0 0',
                    fontFamily: 'Satoshi',
                    paddingTop: '10px',
                  }}
                  color="warning"
                >
                  Авторизоваться
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
}
