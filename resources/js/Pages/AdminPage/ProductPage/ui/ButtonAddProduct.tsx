import Button from '@mui/material/Button';

export default function ButtonAddProduct() {
  return (
    <Button
      sx={{ margin: '20px 0 20px 25px', fontSize: '20px' }}
      variant="contained"
      size="medium"
      href={route('AddShopProduct')}
      color="secondary"
    >
      Добавить новый товар
    </Button>
  );
}
