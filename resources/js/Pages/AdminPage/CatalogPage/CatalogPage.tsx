import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import AddCircle from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Catalogs from '@/Features/Admin/CatalogsPanel/ui/Catalogs';
import { useSetCatalogMutation } from '@/Features/Admin/CatalogsPanel/model/reducers/query/rtkCatalogs';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
  },
});

export default function CatalogPage({ auth }: PageProps) {
  const [catalogValue, setCatalogValue] = useState('');

  const handleChangeCatalog = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCatalogValue(value);
  };

  const [setCatalog, {}] = useSetCatalogMutation();

  const setCatalogC = () => {
    setCatalog({ title: catalogValue });
    setCatalogValue('');
  };
  return (
    <MainLayout user={auth.user}>
      <ThemeProvider theme={theme}>
        <Container
          fixed
          sx={{ margin: '50px' }}
        >
          <Typography
            fontFamily="Integral CF"
            fontWeight="700"
            fontSize="32px"
            textAlign={'center'}
            margin="20px"
          >
            Каталоги
          </Typography>

          <TextField
            id="standard-basic"
            label="Новый каталог"
            variant="standard"
            value={catalogValue}
            onChange={(e) => {
              handleChangeCatalog(e);
            }}
            sx={{ marginLeft: '20px' }}
          />
          <Button
            onClick={setCatalogC}
            sx={{ margin: '10px' }}
            variant="contained"
            size="medium"
            color="secondary"
          >
            Добавить
          </Button>
          <Catalogs />
        </Container>
      </ThemeProvider>
    </MainLayout>
  );
}
