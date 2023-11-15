import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import { useSetCatalogMutation, useSetCategoryMutation, useUpdateCatalogForCategoryMutation, useUpdateCatalogMutation, useUpdateCategoryMutation, useDeleteCatalogMutation, useDeleteCategoryMutation, useGetCatalogsQuery, useGetCategoriesQuery,  } from "../model/reducers/query/rtkCatalogs"  
import { useState } from 'react';

export default function Categories() {

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [catalogId, setCatalogID] = useState(1)  

  const {data: catalogs, isSuccess: isSuccessCatalogs} = useGetCatalogsQuery('')
  const {data: categories, isSuccess: isSuccessCategories} = useGetCategoriesQuery(catalogId)
  const [deleteCategory, {}] = useDeleteCategoryMutation()

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (isSuccessCategories ? categories.length : 0)) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = ( 
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <Box sx={{ margin: '5px' }}>
        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
          >
            Каталог
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: 'catalogs'
            }}
            onChange={(e) => {setCatalogID(Number(e.target.value))}}
          >
            {(isSuccessCatalogs ? catalogs : []).map((catalog) => {
              return <option value={catalog.id} key={catalog.id}>{catalog.title}</option>;
            })}
          </NativeSelect>
        </FormControl>
      </Box>

      <Table
        sx={{ minWidth: 290 }}
        aria-label="custom pagination table"
      >
        <TableBody>
          {(rowsPerPage > 0
            ? (isSuccessCategories ? categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : [])
            : (isSuccessCategories ? categories : [])
          ).map((category) => (
            <TableRow key={category.title}>
              <TableCell
                component="th"
                scope="row"
              >
                {category.title}
              </TableCell>
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
                  aria-label="delete"
                  href="#"
                  onClick={() => {deleteCategory(category.id)}}
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
              colSpan={3}
              count={(isSuccessCategories ? categories : []).length}
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
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}