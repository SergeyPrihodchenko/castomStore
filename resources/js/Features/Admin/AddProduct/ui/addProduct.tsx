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
import { style } from '../model/style/style';

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
  const [price, setPrice] = useState<any>('');
  const [quantity, setQuantity] = useState<any>('');

  const { data: catalogs, error: catalogError } = useGetCatalogsQuery('');
  const { data: categories, error: categoriesError } = useGetCategoriesQuery(catalogId);

  const [createProduct, {isSuccess}] = useCreateProductMutation();

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
        const response = await createProduct(productData);
        console.log(response);
        
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
      <Grid container sx={style.container}>
        <Grid item xs={12} sx={style.flexItem}>
            <Typography variant="h5" sx={style.header}>Добавить товар</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} sx={style.flexItem}>
              <SelectCatalog catalogs={catalogs} setCatalogId={setCatalogId}/>
            </Grid>
            <Grid item xs={12}  sm={6} sx={style.flexItem}>
              <SelectCategory categories={!categoriesError ? categories : []} setCategoryId={setCategoryId} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} sx={style.marginTop}>
            <Grid item xs={12} sm={4} sx={style.flexItem}>
              <InputText value={title} setValue={setTitle} label={'Название'}/>
            </Grid>
            <Grid item xs={12} sm={4} sx={style.flexItem}>
              <InputText value={price} setValue={setPrice} label={'Цена'}/>
            </Grid>
            <Grid item xs={12} sm={4} sx={style.flexItem}>
              <InputText value={quantity} setValue={setQuantity} label={'Количество'}/>
            </Grid>
          </Grid>
        </Grid>
          <Grid container>
            <Grid item ml={12} xs={12} sx={style.textaria}>
                <TextArea value={description} setValue={setDescription}/>
            </Grid>
          </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box
                  component="form"
                  sx={style.videoInput}
                  noValidate
                  autoComplete="off"
                  alignContent={'center'}
                >

                  <TextField
                    id="standard-basic"
                    label="Видео"
                    variant="standard"
                    onChange={(e) => setVideo(e.target.value)}
                  />
                </Box>
                <hr/>
            </Grid>
            <Grid item xs={12}>
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
              </Button>
            </Grid>
            <Grid item xs={12} sx={style.imagePrew}>
              {previewImg && previewImg.map((url: any, index: any) => (
                <img
                  src={url}
                  key={index}
                  width={100}
                  height={100}
                />
              ))}
              </Grid>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </ThemeProvider>
    </>
  );
}

export default AddProduct;
