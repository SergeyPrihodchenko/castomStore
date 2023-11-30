import React from "react";
import { IProduct } from "@/entities/Product/model/types/types"
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import * as locales from '@mui/material/locale';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

interface ProductTableProps {
    products?: IProduct[],
    rows_per_page: number,
    page: number
    handleDelete: (product_id: number) => void
}

const arrayHeadTabs = ['Наименование', 'Цена', 'Кол.', 'Категория', 'Описание', 'Изм.', 'Уд.'];

function ProductListTable (props: ProductTableProps) {
    type SupportedLocales = keyof typeof locales;
    const theme = useTheme();
    const [locale] = React.useState<SupportedLocales>('ruRU');
    const themeWithLocale = React.useMemo(() => createTheme(theme, locales[locale]), [locale, theme]);
    
    return(
        <ThemeProvider theme={themeWithLocale}>
          <TableContainer
            component={Paper}
            sx={{ margin: '20px 0 50px 0' }}
          >
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
                {props.products && props.products.map((product) => (
                  <TableRow key={product.title}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontSize: '20px' }}
                    >
                      {product.title}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ fontSize: '20px' }}
                    >
                      {product.price}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ fontSize: '20px' }}
                    >
                      {product.quantity}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ fontSize: '20px' }}
                    >
                      {product.category_id}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ fontSize: '20px' }}
                    >
                      {product.description}
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
                        onClick={() => props.handleDelete(product.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ThemeProvider>
    )
}

export default ProductListTable