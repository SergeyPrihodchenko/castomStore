import * as React from 'react';
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
import { useGetCatalogsQuery } from '@/entities/Catalog/model/query/rtkCatalog';
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from '@/entities/Category/model/query/rtkCategory';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import * as locales from '@mui/material/locale';

import { useState } from 'react';

export default function Categories({ getCatalogID }: any) {
  const changeSelectCatalog = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCatalogID(Number(e.target.value));
    getCatalogID(Number(e.target.value));
  };

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [catalogId, setCatalogID] = useState(1);

  const { data: catalogs, isSuccess: isSuccessCatalogs } = useGetCatalogsQuery('');
  const { data: categories, isSuccess: isSuccessCategories } = useGetCategoriesQuery(catalogId);
  const [deleteCategory, {}] = useDeleteCategoryMutation();
  console.log(catalogs, categories);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  type SupportedLocales = keyof typeof locales;
  const [locale] = React.useState<SupportedLocales>('ruRU');
  const theme = useTheme();
  const themeWithLocale = React.useMemo(() => createTheme(theme, locales[locale]), [locale, theme]);
  return (
    <ThemeProvider theme={themeWithLocale}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ minWidth: 290 }}>
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
            stickyHeader
            aria-label="sticky table"
            sx={{ minWidth: 290 }}
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
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={categories ? categories.length : 0}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage={''}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </ThemeProvider>
  );
}
