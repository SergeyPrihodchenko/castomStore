import React from "react";
import { useDeleteProductByIdMutation, useGetProductsQuery } from "@/entities/Product/model/slice/productApi";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Search from '@/Shared/ui/SearchProduct';
import ProductListTable from "./ProductListTable";
import ButtonAddProduct from "./ButtonAddProduct";
import { IProduct } from "@/entities/Product/model/types/types";
import { router } from "@inertiajs/react";
import { log } from "console";

const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFFFFF',
        contrastText: '#000000',
      },
    },
});

interface ProductListProps {
  products: IProduct[]
}

function ProductList ({ products }: ProductListProps) {
  
    const [page, setPage] = React.useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

    const [deleteProduct, {}] = useDeleteProductByIdMutation();

    const deleteHandle = async (product_id: number) => {
        await deleteProduct(product_id)
        router.reload({only: ['products']})
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
                <Search />
                <ProductListTable handleDelete={deleteHandle} products={products} page={page} rows_per_page={rowsPerPage} />
              </Container>
            </Box>
        </ThemeProvider>
    )
}

export default ProductList