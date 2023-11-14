import * as React from 'react';
import { useTheme } from '@mui/material/styles';
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
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

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
];

export default function CategoriesPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
            defaultValue={10}
            inputProps={{
              name: 'catalog',
              id: 'uncontrolled-native',
            }}
          >
            {ArrayСatalog.map((el) => {
              return <option value={10}>{el.title}</option>;
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
              count={ArrayCategory.length}
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