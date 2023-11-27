import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSetCategoryMutation } from '@/entities/Category/model/query/rtkCategory';
import { useState } from 'react';
import CategoriesTable from './CategoriesTable';
const theme = createTheme({
  palette: {
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
  },
});

const Categories = ({ catalogs }: any) => {
  const [categoryValue, setCategoryValue] = useState('');
  const [catalogID, setCatalogID] = useState(0);

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCategoryValue(value);
  };

  const [setCategory, {}] = useSetCategoryMutation();

  const setCategoryC = () => {
    setCategory({ catalog_id: catalogID, title: categoryValue });
    setCategoryValue('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: 1200 }}>
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
              Категории
            </Typography>

            <TextField
              id="standard-basic"
              label={
                <Typography
                  fontFamily="Integral CF"
                  fontSize="24px"
                >
                  Новая категория
                </Typography>
              }
              variant="standard"
              value={categoryValue}
              onChange={(e) => {
                handleChangeCategory(e);
              }}
              sx={{ margin: '20px' }}
            />
            <Button
              onClick={setCategoryC}
              sx={{ margin: '20px', fontFamily: 'Integral CF', fontSize: '20px' }}
              variant="contained"
              size="medium"
              color="secondary"
            >
              Добавить
            </Button>
            <CategoriesTable catalogs={catalogs} setCatalogID={setCatalogID} categoryValue={categoryValue} setCategoryValue={setCategoryValue}/>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Categories;
