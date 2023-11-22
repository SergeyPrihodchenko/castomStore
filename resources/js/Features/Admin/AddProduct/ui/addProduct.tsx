import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  useGetCatalogsQuery,
  useGetCategoriesQuery,
} from '../../CatalogsPanel/model/reducers/query/rtkCatalogs';
import { useCreateProductMutation } from '@/entities/Product/model/slice/productApi';
import { useEffect, useState } from 'react';
import { ProductSchema } from '../model/types/product';
import { Block } from '@mui/icons-material';
import { error } from 'console';

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

function AddProduct() {
  const [catalogId, setCatalogId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [files, setFiles] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const { data: catalogs, error: catalogError } = useGetCatalogsQuery();
  const { data: categories, error: categoriesError } = useGetCategoriesQuery(catalogId!);

  const [createProduct, {}] = useCreateProductMutation();

  useEffect(() => {
    setPreviewImg([...files].map((file) => URL.createObjectURL(file)));
  }, [files]);

  const hadnleSave = async () => {
    const productData = new FormData();
    productData.append('title', title);
    productData.append('description', description);
    productData.append('price', price);
    productData.append('quantity', quantity);
    productData.append('category_id', categoryId);
    for (let file of files) {
      productData.append('images[]', file);
    }

    await createProduct(productData);
  };

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
          <Container>
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
              <Typography variant="h5">Добавить товар</Typography>
              <Box>
                <FormControl fullWidth>
                  <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native"
                  >
                    Каталог
                  </InputLabel>
                  <NativeSelect
                    defaultValue={0}
                    inputProps={{
                      name: 'catalog',
                      id: 'uncontrolled-native',
                    }}
                    onChange={(e) => setCatalogId(Number(e.target.value))}
                  >
                    <option>Каталог не выбран</option>
                    {catalogs &&
                      catalogs.map((el) => {
                        return (
                          <option
                            key={el.id}
                            value={el.id}
                          >
                            {el.title}
                          </option>
                        );
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
                      name: 'category',
                      id: 'uncontrolled-native',
                    }}
                    onChange={(e) => setCategoryId(Number(e.target.value))}
                  >
                    <option>Категория не выбрана</option>
                    {categories &&
                      categories.map((el) => {
                        return (
                          <option
                            key={el.id}
                            value={el.id}
                          >
                            {el.title}
                          </option>
                        );
                      })}
                  </NativeSelect>
                </FormControl>
              </Box>
              <TextField
                id="standard-basic"
                label="Наименование"
                variant="standard"
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Подробное описание"
                variant="standard"
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Цена"
                variant="standard"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <TextField
                id="standard-basic"
                label="Количество"
                variant="standard"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <Button
                component="label"
                variant="text"
                color="primary"
                size="small"
                startIcon={<CloudUploadIcon />}
              >
                Загрузить фото
                <VisuallyHiddenInput
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
                {previewImg &&
                  previewImg.map((url, index) => (
                    <img
                      src={url}
                      key={index}
                      width={100}
                      height={100}
                    />
                  ))}
              </Button>
            </Box>
            <Button
              variant="contained"
              size="small"
              href="#"
              color="secondary"
              sx={{ margin: '20px' }}
              onClick={() => hadnleSave()}
            >
              Сохранить
            </Button>
          </Container>
        </Box>
      </ThemeProvider>
    </form>
  );
}

export default AddProduct;
