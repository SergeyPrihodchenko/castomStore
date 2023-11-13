import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
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

const ArrayСatalog = [
  {
    id: 1,
    title: 'Не выбрано',
  },
  {
    id: 2,
    title: 'Одежда',
  },
  {
    id: 3,
    title: 'Обувь',
  },
  {
    id: 4,
    title: 'Головные уборы',
  },
  {
    id: 5,
    title: 'Акссесуары',
  },
];
const ArrayCategory = [
  {
    id: 1,
    title: 'Не выбрано',
  },
  {
    id: 2,
    title: 'Мужская одежда',
  },
  {
    id: 3,
    title: 'Женская одежда',
  },
  {
    id: 4,
    title: 'Детская одежда',
  },
  {
    id: 5,
    title: 'Мужская обувь',
  },
  {
    id: 6,
    title: 'Женская обувь',
  },
  {
    id: 7,
    title: 'Детская обувь',
  },
];

export default function CategoryPage() {
  return (
    <form>
      <ThemeProvider theme={theme}>
        <Box
          component="form"
          sx={{
            minWidth: '390px',
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
              <Box>
                <FormControl fullWidth>
                  <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native"
                  >
                    Каталог
                  </InputLabel>
                  <NativeSelect
                    defaultValue={10}
                    inputProps={{
                      name: 'catalog',
                      id: 'uncontrolled-native',
                    }}
                  >
                    {ArrayСatalog.map((el) => {
                      return <option value={10}>{el.title}</option>;
                    })}
                  </NativeSelect>
                </FormControl>
              </Box>
              <Box>
                <FormControl fullWidth>
                  <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native"
                  >
                    Категория
                  </InputLabel>
                  <NativeSelect
                    defaultValue={10}
                    inputProps={{
                      name: 'social',
                      id: 'uncontrolled-native',
                    }}
                  >
                    {ArrayCategory.map((el) => {
                      return <option value={10}>{el.title}</option>;
                    })}
                  </NativeSelect>
                </FormControl>
              </Box>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </form>
  );
}
