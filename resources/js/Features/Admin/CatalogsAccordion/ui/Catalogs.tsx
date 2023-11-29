import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import {
  useDeleteCatalogMutation,
  useGetCatalogsQuery,
} from '@/entities/Catalog/model/query/rtkCatalog';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import * as locales from '@mui/material/locale';

export default function Catalogs() {
  const { data: catalogs, isSuccess } = useGetCatalogsQuery('');

  const [deleteCatalog, {}] = useDeleteCatalogMutation();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
          <Table
            stickyHeader
            aria-label="sticky table"
          >
            <TableBody>
              {(rowsPerPage > 0
                ? isSuccess
                  ? catalogs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : []
                : isSuccess
                ? catalogs
                : []
              ).map((catalog) => (
                <TableRow key={catalog.id}>
                  <TableCell
                    component="th"
                    scope="row"
                  >
                    {catalog.title}
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
                      aria-label="edit"
                      href="#"
                      onClick={() => {
                        deleteCatalog(catalog.id);
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
          count={catalogs ? catalogs.length : 0}
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
