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

import { useDeleteCatalogMutation, useGetCatalogsQuery } from '../model/reducers/query/rtkCatalogs';

export default function Catalogs() {
  const { data: catalogs, isSuccess } = useGetCatalogsQuery('');

  const [deleteCatalog, {}] = useDeleteCatalogMutation();

  const [page] = useState(0);
  const [rowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (isSuccess ? catalogs.length : 0)) : 0;

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 290 }}
        aria-label="custom pagination table"
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
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
