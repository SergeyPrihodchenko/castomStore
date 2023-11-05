import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const buttons = [
  {
    title: 'О магазине',
    key: 1,
    href: '#outlined-buttons',
  },
  {
    title: 'Настройка страниц магазина',
    key: 2,
    href: '#outlined-buttons',
  },

  {
    title: 'Каталоги',
    key: 3,
    href: '#outlined-buttons',
  },

  {
    title: 'Товары',
    key: 4,
    href: '#outlined-buttons',
  },
];

export default function MainAdminPage() {
  return (
    <>
      {buttons.map((el) => {
        return (
          <Box
            key={el.key}
            sx={{
              display: 'flex',
              '& > *': {
                m: 1,
              },
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '15px',
            }}
          >
            <Button
              sx={{
                borderRadius: '16px',
                width: '320px',
                height: '40px',
                color: 'black',
              }}
              key={el.key}
              href={el.href}
            >
              {el.title}
            </Button>
          </Box>
        );
      })}
    </>
  );
}
