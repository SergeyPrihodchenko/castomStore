import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
  },
});

export default function CreateUboutShopFormPage() {
  return (
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            alignContent={'center'}
          >
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
            <TextField id="standard-basic" label="Логотип" variant="standard" />
            <TextField id="standard-basic" label="Телефон" variant="standard" />
            <TextField id="standard-basic" label="Адрес" variant="standard" />
            <TextField id="standard-basic" label="СоцСети" variant="standard" />
          </Box>
          <Button
            variant="contained"
            size="small"
            href={route('createShopFormPage')}
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
  );
}

// socialNetworks: '',
//   );
// }
