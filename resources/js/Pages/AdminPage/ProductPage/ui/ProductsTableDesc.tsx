import * as React from 'react';
import TableHead from '@mui/material/TableHead';
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as locales from '@mui/material/locale';

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

const arrayProducts = [
  {
    id: 1,
    title: 'Рубашка',
    price: '120',
    quantity: '5',
    categoryName: 'Мужская одежда',
    desc: 'Рубашка',
  },
  {
    id: 2,
    title: 'Куртка',
    price: '220',
    quantity: '6',
    categoryName: 'Верхняя одежда',
    desc: 'Куртка',
  },
  {
    id: 3,
    title: 'Платье',
    price: '140',
    quantity: '2',
    categoryName: 'Женская одежда',
    desc: 'Платье',
  },
];

const arrayHeadTabs = ['Наименование', 'Цена', 'Кол.', 'Категория', 'Описание', 'Изм.', 'Уд.'];

type SupportedLocales = keyof typeof locales;

export default function ProductTableDesc() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - arrayProducts.length) : 0;

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
      <TableContainer component={Paper}>
        <Table aria-label="a product table">
          <TableHead>
            <TableRow>
              {arrayHeadTabs.map((el) => (
                <TableCell
                  align="left"
                  sx={{ fontSize: '20px', fontWeight: '700' }}
                >
                  {el}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? arrayProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : arrayProducts
            ).map((arrayProducts) => (
              <TableRow key={arrayProducts.title}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: '20px' }}
                >
                  {arrayProducts.title}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: '20px' }}
                >
                  {arrayProducts.price}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: '20px' }}
                >
                  {arrayProducts.quantity}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: '20px' }}
                >
                  {arrayProducts.categoryName}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: '20px' }}
                >
                  {arrayProducts.desc}
                </TableCell>
                <TableCell
                  style={{ width: 10 }}
                  align="left"
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
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100, { label: 'Все', value: -1 }]}
                colSpan={7}
                count={arrayProducts.length}
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
