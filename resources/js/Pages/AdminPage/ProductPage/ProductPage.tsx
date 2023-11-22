import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductTableDesc from './ui/ProductsTableDesc';

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
    <AuthenticatedLayout user={auth.user}>
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

            <Button
              sx={{ margin: '20px 0 20px 25px', fontSize: '20px' }}
              variant="contained"
              size="medium"
              href={route('AddShopProduct')}
              color="secondary"
            >
              Добавить новый товар
            </Button>
            <ProductTableDesc />
          </Container>
        </Box>
      </ThemeProvider>
    </AuthenticatedLayout>
  );
}
