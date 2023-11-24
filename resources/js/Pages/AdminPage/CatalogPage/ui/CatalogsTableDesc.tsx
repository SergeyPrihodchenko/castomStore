import * as React from 'react';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import * as locales from '@mui/material/locale';
import Typography from '@mui/material/Typography';

const rows = [
  {
    id: 1,
    title: 'Одежда',
  },
  {
    id: 2,
    title: 'Обувь',
  },
  {
    id: 3,
    title: 'Головные уборы',
  },
  {
    id: 4,
    title: 'Акссесуары',
  },
  {
    id: 5,
    title: 'Опять Одежда',
  },
  {
    id: 6,
    title: 'Опять Обувь',
  },
  {
    id: 7,
    title: 'Опять Головные уборы',
  },
  {
    id: 8,
    title: 'Опять Акссесуары',
  },
  {
    id: 9,
    title: 'Опять Головные уборы',
  },
  {
    id: 10,
    title: 'Опять Акссесуары',
  },
  {
    id: 11,
    title: 'Опять Головные уборы',
  },
  {
    id: 12,
    title: 'Опять Акссесуары',
  },
];

type SupportedLocales = keyof typeof locales;

export default function CatalogsTableDesc() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            stickyHeader
            aria-label="sticky table"
          >
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontSize: '20px' }}
                    >
                      {row.title}
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
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
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
