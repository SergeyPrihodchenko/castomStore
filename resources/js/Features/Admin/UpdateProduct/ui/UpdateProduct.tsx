import InputLabel from '@/Shared/ui/InputLabel';
import { useGetCatalogsQuery } from '@/entities/Catalog/model/query/rtkCatalog';
import { useGetCategoriesQuery } from '@/entities/Category/model/query/rtkCategory';
import { Box, Button, Container, FormControl, NativeSelect, TextField, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { log } from 'console';
import { IProduct } from '@/entities/Product/model/types/types';
import { useCreateProductMutation } from '@/entities/Product/model/slice/productApi';

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

interface UpdateProductPageProps {
    product: IProduct,
    video_link: string
}

function UpdateProductComponent({product, video_link}: UpdateProductPageProps){



    console.log(video_link);

    const [catalogId, setCatalogId] = useState(0);
    const [categoryId, setCategoryId] = useState(product.category_id);
    const [files, setFiles] = useState([]);
    const [previewImg, setPreviewImg] = useState([]);

    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [video, setVideo] = useState(product.video);
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(product.quantity);

    const { data: catalogs, error: catalogError } = useGetCatalogsQuery();
    const { data: categories, error: categoriesError } = useGetCategoriesQuery(catalogId!);

    const [updateProduct, {}] = useCreateProductMutation();

    const hadnleSave = async () => {
        const productData = new FormData();
        productData.append('product_id', product.id);
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
          await updateProduct(productData);
          console.log('Product created successfully');
        } catch (error) {
          console.log(error);
        }
    };
    
    return(
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
              <Typography variant="h5">Редактировать товар</Typography>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Подробное описание"
                variant="standard"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Цена"
                variant="standard"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <TextField
                id="standard-basic"
                label="Количество"
                variant="standard"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <TextField
                id="standard-basic"
                label="Видео"
                variant="standard"
                value={video_link}
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
    )
}

export default UpdateProductComponent