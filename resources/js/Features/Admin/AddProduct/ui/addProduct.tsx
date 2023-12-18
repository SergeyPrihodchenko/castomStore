import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useCreateProductMutation } from '@/entities/Product/model/slice/productApi';
import { useEffect, useState } from 'react';
import { useGetCatalogsQuery } from '@/entities/Catalog/model/query/rtkCatalog';
import { useGetCategoriesQuery } from '@/entities/Category/model/query/rtkCategory';
import { Grid } from '@mui/material';
import SelectCatalog from './Components/SelectCatalog';
import SelectCategory from './Components/SelectCategory';
import InputText from './Components/InputText';
import TextArea from './Components/TextArea';

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
  const [categoryId, setCategoryId] = useState<any>(0);
  const [files, setFiles] = useState<any>([]);
  const [previewImg, setPreviewImg] = useState<any>([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [price, setPrice] = useState<any>(0);
  const [quantity, setQuantity] = useState<any>(0);

  const { data: catalogs, error: catalogError } = useGetCatalogsQuery('');
  const { data: categories, error: categoriesError } = useGetCategoriesQuery(catalogId);

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
    productData.append('video_link', video);
    for (let file of files) {
      productData.append('images[]', file);
    }

    try {
      await createProduct(productData);
      console.log('Product created successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid container spacing={1} sx={{maxWidth: '1200px', padding: '10px', margin: '0 auto'}}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <SelectCatalog catalogs={catalogs} setCatalogId={setCatalogId}/>
            </Grid>
            <Grid item xs={12}  sm={6}>
              <SelectCategory categories={!categoriesError ? categories : []} setCategoryId={setCategoryId} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <InputText value={title} setValue={setTitle}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} sx={{display: 'flex'}}>
            <Grid item ml={12} xs={12} sx={{justifyContent: 'center'}}>
                <TextArea value={description} setValue={setDescription} sx={{width: '600px'}}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
                <TextField
                  id="standard-basic"
                  label="Видео"
                  variant="standard"
                  onChange={(e) => setVideo(e.target.value)}
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
                    previewImg.map((url: any, index: any) => (
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
    </>
  );
}

export default AddProduct;
