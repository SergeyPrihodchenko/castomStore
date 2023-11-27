import * as React from 'react';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import * as locales from '@mui/material/locale';
import Typography from '@mui/material/Typography';
import { ICatalogsTable } from '../model/types/types';
import { useDeleteCatalogMutation, useUpdateCatalogMutation } from '@/entities/Catalog/model/query/rtkCatalog';
import { router } from '@inertiajs/react';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? (
          <LastPageIcon sx={{ fontSize: '30px' }} />
        ) : (
          <FirstPageIcon sx={{ fontSize: '30px' }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight sx={{ fontSize: '30px' }} />
        ) : (
          <KeyboardArrowLeft sx={{ fontSize: '30px' }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft sx={{ fontSize: '30px' }} />
        ) : (
          <KeyboardArrowRight sx={{ fontSize: '30px' }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? (
          <FirstPageIcon sx={{ fontSize: '30px' }} />
        ) : (
          <LastPageIcon sx={{ fontSize: '30px' }} />
        )}
      </IconButton>
    </Box>
  );
}

type SupportedLocales = keyof typeof locales;

export default function CatalogsTable({ catalogs, updateCatalog: updateCatalogHook }: ICatalogsTable) {
  console.log(catalogs);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - catalogs.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [locale] = React.useState<SupportedLocales>('ruRU');

  const theme = useTheme();

  const themeWithLocale = React.useMemo(() => createTheme(theme, locales[locale]), [locale, theme]);

  const [deleteCatalog, {isLoading: isLoadingDelete}] = useDeleteCatalogMutation();
  const [updateCatalog, {isLoading: isLoadingUpdate}] = useUpdateCatalogMutation();

  const deleteElem = (id: number) => {
    deleteCatalog(id);    
  }

  return (
    <ThemeProvider theme={themeWithLocale}>
      {isLoadingDelete ? router.reload({only: ['catalogs']}) : null}
      {isLoadingUpdate ? router.reload({only: ['catalogs']}) : null}
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 290 }}
          aria-label="custom pagination table"
        >
          <TableBody>
            {(rowsPerPage > 0
              ? catalogs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : catalogs
            ).map((catalog) => (
              <TableRow key={catalog.id}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: '20px' }}
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
                    onClick={() => {updateCatalogHook(catalog.id ,updateCatalog)}}
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
                    onClick={() => {deleteElem(catalog.id)}}
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
                count={catalogs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage={
                  <Typography
                    fontFamily="Integral CF"
                    fontSize="20px"
                  >
                    Всего товаров на странице
                  </Typography>
                }
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                sx={{ fontSize: '20px' }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
