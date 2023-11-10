import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
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

export default function AddShopProduct() {
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
            {/* <Box
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
              <Typography variant="h5">О магазине</Typography>
              <TextField
                id="standard-basic"
                label="Название магазина"
                variant="standard"
              />
              <TextField id="standard-basic" label="Email" variant="standard" />
              <TextField
                id="standard-basic"
                label="Веб сайт"
                variant="standard"
              />
              <Button
                component="label"
                variant="text"
                color="primary"
                size="small"
                startIcon={<CloudUploadIcon />}
              >
                Загрузить логотип
                <VisuallyHiddenInput type="file" />
              </Button>

              <TextField
                id="standard-basic"
                label="Телефон"
                variant="standard"
              />
              <TextField id="standard-basic" label="Адрес" variant="standard" />
              <Box>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    СоцСети
                  </InputLabel>
                  <NativeSelect
                    defaultValue={40}
                    inputProps={{
                      name: 'social',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={10}>Twitter</option>
                    <option value={20}>Facebook</option>
                    <option value={30}>Instagram</option>
                    <option value={40}>Github</option>
                  </NativeSelect>

                  <TextField
                    id="standard-basic"
                    label="СоцСети"
                    variant="standard"
                  />
                </FormControl>
              </Box>
            </Box> */}

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
