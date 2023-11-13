// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import EditIcon from '@mui/icons-material/Edit';
// import IconButton from '@mui/material/IconButton';

// const arrayProducts = [
//   {
//     id: 1,
//     title: 'Рубашка',
//     price: '120',
//     quantity: '5',
//   },
//   {
//     id: 2,
//     title: 'Куртка',
//     price: '220',
//     quantity: '6',
//   },
//   {
//     id: 3,
//     title: 'Платье',
//     price: '140',
//     quantity: '2',
//   },
// ];

// export default function ProductTable() {
//   return (
//     <Box sx={{ minWidth: '320px' }}>
//       <TableContainer component={Paper}>
//         <Table
//           sx={{ width: '100px' }}
//           size="small"
//           aria-label="a product table"
//         >
//           <TableHead>
//             <TableRow>
//               <TableCell>Наименование</TableCell>
//               <TableCell align="left">Цена</TableCell>
//               <TableCell align="left">Кол</TableCell>
//               <TableCell align="left">Изм</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {arrayProducts.map((arrayProducts) => (
//               <TableRow
//                 key={arrayProducts.title}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell
//                   component="th"
//                   scope="row"
//                 >
//                   {arrayProducts.title}
//                 </TableCell>
//                 <TableCell align="right">{arrayProducts.price}</TableCell>
//                 <TableCell align="right">{arrayProducts.quantity}</TableCell>
//                 <TableCell align="right">
//                   <IconButton
//                     edge="end"
//                     aria-label="edit"
//                     href={route('EditShopProduct')}
//                   >
//                     <EditIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }

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
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
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
  },
  {
    id: 2,
    title: 'Куртка',
    price: '220',
    quantity: '6',
  },
  {
    id: 3,
    title: 'Платье',
    price: '140',
    quantity: '2',
  },
];

export default function ProductTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  return (
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
                >
                  {arrayProducts.title}
                </TableCell>
                <TableCell align="right">{arrayProducts.price}</TableCell>
                <TableCell align="right">{arrayProducts.quantity}</TableCell>
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
                {/* <TableCell
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
                </TableCell> */}
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
                count={arrayProducts.length}
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
    </Box>
  );
}
