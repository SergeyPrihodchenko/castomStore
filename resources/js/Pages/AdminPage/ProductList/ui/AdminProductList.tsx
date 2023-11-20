import * as React from 'react';
import TableHead from '@mui/material/TableHead';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useDeleteProductByIdMutation, useGetProductsQuery } from '@/entities/Product/model/slice/productApi';
import AdminProductPagination from './AdminProductPagination';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import DeleteIcon from '@mui/icons-material/Delete';

function AdminProductList(){

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const {data: products, isLoading} = useGetProductsQuery(rowsPerPage);

    const [deleteProduct, {}] = useDeleteProductByIdMutation();

    console.log(products);

    const deleteHandle = async (product_id: number) => {
        deleteProduct(product_id)
    } 
    

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products!.length) : 0;

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return(
        <Box sx={{ minWidth: '320px' }}>
        <TableContainer component={Paper}>
        <Table
          size="small"
          aria-label="a product table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Наименование</TableCell>
              <TableCell align="left">Цена</TableCell>
              <TableCell align="left">Кол</TableCell>
              <TableCell align="left">Изм</TableCell>
              <TableCell align="left">Удалить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products && products.map((product) => (
              <TableRow key={product.id}>
                <TableCell
                  component="th"
                  scope="row"
                >
                  {product.title}
                </TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.quantity}</TableCell>
                <TableCell
                  style={{ width: 10 }}
                  align="right"
                >
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    href="#"
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell
                  style={{ width: 10 }}
                  align="right"
                >
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    href="#"
                    onClick={() => deleteHandle(product.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={4}
                count={products ? products!.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={AdminProductPagination}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
    )
}

export default AdminProductList