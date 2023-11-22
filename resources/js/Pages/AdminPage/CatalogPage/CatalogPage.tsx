import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Catalogs from './ui/CatalogsTableDesc';
import { useSetCatalogMutation } from '@/Features/Admin/CatalogsPanel/model/reducers/query/rtkCatalogs';
import { useState } from 'react';
//import Catalogs from '@/Features/Admin/CatalogsPanel/ui/Catalogs';

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
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: 1200 }}>
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
              label={
                <Typography
                  fontFamily="Integral CF"
                  fontSize="24px"
                >
                  Новый каталог
                </Typography>
              }
              variant="standard"
              value={catalogValue}
              onChange={(e) => {
                handleChangeCatalog(e);
              }}
              sx={{ margin: '20px' }}
            />
            <Button
              onClick={setCatalogC}
              sx={{ margin: '20px', fontFamily: 'Integral CF', fontSize: '20px' }}
              variant="contained"
              size="medium"
              color="secondary"
            >
              Добавить
            </Button>
            <Catalogs />
          </Box>
        </Box>
      </ThemeProvider>
    </MainLayout>
  );
}
