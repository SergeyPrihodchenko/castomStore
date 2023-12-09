import React, { useEffect } from "react";
import { useDeleteProductByIdMutation, useLazyGetProductsQuery, useLazySearchProductQuery } from "@/entities/Product/model/slice/productApi";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Search from '@/Shared/ui/SearchProduct';
import ProductListTable from "./ProductListTable";
import ButtonAddProduct from "./ButtonAddProduct";
import { router } from "@inertiajs/react";

const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFFFFF',
        contrastText: '#000000',
      },
    },
});

function ProductList () {
  
    const [page, setPage] = React.useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
    const [search, setSearch] = React.useState('');
    const [products, setProducts] = React.useState([]);

    // Получаем продукты
    const [productData, {}] = useLazyGetProductsQuery();

    // Удаляем продукт
    const [deleteProduct, {}] = useDeleteProductByIdMutation();

    // Поиск по наименованию
    const [searchProduct, {}] = useLazySearchProductQuery();

    // Первичная подгрузка
    useEffect(() => {
        loadData()
    }, [])

    // Подгрузка данных
    const loadData = async () => {
      const response = await productData(rowsPerPage);
      setProducts(response.data);
   }

    // Удаление товара
    const deleteHandle = async (product_id: number) => {
        await deleteProduct(product_id)
        router.reload({only: ['products']})
    }

    // Поиск по наименованию
    const handleSearch = async () => {
        if(search){
          const response = await searchProduct(search);
          setProducts(response)
          return;
        }
        loadData();
    }
    
    return(
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
                <Search setSearch={setSearch} handleSearch={handleSearch}/>
                <ProductListTable handleDelete={deleteHandle} products={products?.data} page={page} rows_per_page={rowsPerPage} />
              </Container>
            </Box>
        </ThemeProvider>
    )
}

export default ProductList