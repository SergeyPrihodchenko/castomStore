// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

// interface Column {
//   id: 'title' | 'price' | 'quantity' | 'edit';
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number) => string;
// }

// const columns: readonly Column[] = [
//   { id: 'title', label: 'Название', minWidth: 90 },
//   { id: 'price', label: 'Цена', minWidth: 5 },
//   { id: 'quantity', label: 'Кол.', minWidth: 5 },
//   { id: 'edit', label: 'Ред.', minWidth: 5 },
// ];

// const btnEdit = (
//   <IconButton edge="end" aria-label="edit" href={route('EditShopProduct')}>
//     <EditIcon />
//   </IconButton>
// );

const rows = [
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

// export default function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '300px', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.title}>
//                     {columns.map((column) => {
//                       const value = row[column.id];

//                       return (
//                         <>
//                           <TableCell key={column.id} align={column.align}>
//                             {column.format && typeof value === 'number'
//                               ? column.format(value)
//                               : value}
//                           </TableCell>
//                         </>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function ProductTable() {
  return (
    <Box sx={{ minWidth: '320px' }}>
      <TableContainer component={Paper}>
        <Table
          sx={{ width: '100px' }}
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
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    href={route('EditShopProduct')}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
