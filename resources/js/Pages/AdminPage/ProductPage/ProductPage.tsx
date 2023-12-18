import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductTableDesc from './ui/ProductsTableDesc';
import ButtonAddProduct from './ui/ButtonAddProduct';
import Search from '@/Shared/ui/SearchProduct';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
  },
});

export default function ProductPage({ auth }: PageProps) {
  return (
    <MainLayout user={auth.user}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Container fixed>
            <Typography
              fontFamily="Integral CF"
              fontWeight="700"
              fontSize="32px"
              textAlign={'center'}
              margin="20px"
            >
              Товары
            </Typography>

            <ButtonAddProduct />
            <Search handleSearch={''} setSearch={''} />

            <ProductTableDesc />
          </Container>
        </Box>
      </ThemeProvider>
    </MainLayout>
  );
}
