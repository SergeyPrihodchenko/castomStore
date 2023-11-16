import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {
    primary: {
      main: '#808080',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
  },
});

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function EditShopDetails() {
  return (
    <form>
      <ThemeProvider theme={theme}>
        <Box
          component="form"
          sx={{
            minWidth: '390px',
            marginLeft: '40px',
          }}
        >
          <Container fixed>
            <Box
              component="form"
              sx={{
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              alignContent={'center'}
            >
              <Typography variant="h5">Настройка главной страницы</Typography>
              <TextField
                id="standard-basic"
                label="Заголовок"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Описание"
                variant="standard"
              />
              <Button
                component="label"
                variant="text"
                color="primary"
                size="small"
                startIcon={<CloudUploadIcon />}
              >
                Загрузить фото
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>

            <Button
              variant="contained"
              size="small"
              href="#"
              color="secondary"
              sx={{ margin: '20px' }}
            >
              Сохранить
            </Button>
            <Button variant="contained" size="small" href="#" color="secondary">
              Удалить
            </Button>
          </Container>
        </Box>
      </ThemeProvider>
    </form>
  );
}
