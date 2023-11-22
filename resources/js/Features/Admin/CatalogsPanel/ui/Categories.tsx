import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {
  useDeleteCategoryMutation,
  useGetCatalogsQuery,
  useGetCategoriesQuery,
} from '../model/reducers/query/rtkCatalogs';
import { useState } from 'react';

export default function Categories({ getCatalogID }: any) {
  const changeSelectCatalog = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCatalogID(Number(e.target.value));
    getCatalogID(Number(e.target.value));
  };


  const [page] = useState<number>(0);
  const [rowsPerPage] = useState(5);

  const [catalogId, setCatalogID] = useState(1);

  const { data: catalogs, isSuccess: isSuccessCatalogs } = useGetCatalogsQuery('');
  const { data: categories, isSuccess: isSuccessCategories } = useGetCategoriesQuery(catalogId);
  const [deleteCategory, {}] = useDeleteCategoryMutation();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - (isSuccessCategories ? categories.length : 0))
      : 0;
  
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
              name: 'catalogs',
            }}
            onChange={changeSelectCatalog}
          >
            <option>Каталог не выбран</option>
            {(isSuccessCatalogs ? catalogs : []).map((catalog) => {
              return (
                <option
                  value={catalog.id}
                  key={catalog.id}
                >
                  {catalog.title}
                </option>
              );
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
            ? isSuccessCategories
              ? categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : []
            : isSuccessCategories
            ? categories
            : []
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
                  onClick={() => {
                    deleteCategory(category.id);
                  }}
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
      </Table>
    </TableContainer>
  );
}
