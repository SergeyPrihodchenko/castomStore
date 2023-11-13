import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

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
                <TableCell
                  component="th"
                  scope="row"
                >
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
