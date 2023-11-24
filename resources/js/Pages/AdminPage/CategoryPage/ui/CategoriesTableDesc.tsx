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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import * as locales from '@mui/material/locale';
import Typography from '@mui/material/Typography';

const ArrayСatalog = [
  {
    id: 1,
    title: 'Не выбрано',
  },
  {
    id: 2,
    title: 'Одежда',
  },
  {
    id: 3,
    title: 'Обувь',
  },
  {
    id: 4,
    title: 'Головные уборы',
  },
  {
    id: 5,
    title: 'Акссесуары',
  },
];

const ArrayCategory = [
  {
    id: 1,
    title: 'Мужская одежда',
  },
  {
    id: 2,
    title: 'Женская одежда',
  },
  {
    id: 3,
    title: 'Детская одежда',
  },
  {
    id: 4,
    title: 'Мужская обувь',
  },
  {
    id: 5,
    title: 'Женская обувь',
  },
  {
    id: 6,
    title: 'Детская обувь',
  },
  {
    id: 7,
    title: 'Мужская одежда',
  },
  {
    id: 8,
    title: 'Женская одежда',
  },
  {
    id: 9,
    title: 'Детская одежда',
  },
  {
    id: 10,
    title: 'Мужская обувь',
  },
  {
    id: 11,
    title: 'Женская обувь',
  },
  {
    id: 12,
    title: 'Детская обувь',
  },
];

type SupportedLocales = keyof typeof locales;

export default function CategoriesTableDesc() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - ArrayCategory.length) : 0;

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

  return (
    <ThemeProvider theme={themeWithLocale}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Box sx={{ margin: '5px' }}>
            <FormControl fullWidth>
              <InputLabel
                variant="standard"
                htmlFor="uncontrolled-native"
                sx={{ fontFamily: 'Integral CF', fontSize: '24px' }}
              >
                Каталог
              </InputLabel>
              <NativeSelect
                defaultValue={10}
                inputProps={{
                  name: 'catalog',
                  id: 'uncontrolled-native',
                }}
              >
                {ArrayСatalog.map((el) => {
                  return (
                    <option
                      value={10}
                      key={el.id}
                    >
                      {el.title}
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
                ? ArrayCategory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : ArrayCategory
              ).map((ArrayCategory) => (
                <TableRow key={ArrayCategory.title}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: '20px' }}
                  >
                    {ArrayCategory.title}
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
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={ArrayCategory.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage={
            <Typography
              fontFamily="Integral CF"
              fontSize="20px"
            >
              Всего товаров на странице
            </Typography>
          }
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ fontSize: '20px' }}
        />
      </Paper>
    </ThemeProvider>
  );
}
