import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const buttons = [
  <Button
    sx={{
      //borderRadius: '16px',
      width: '390px',
      color: 'black',
      borderColor: 'black',
      // margin: '10px',
    }}
    key="one"
    variant="outlined"
    href="#outlined-buttons"
  >
    О магазине
  </Button>,

  <Button
    sx={{
      //borderRadius: '16px',
      width: '390px',
      color: 'black',
      borderColor: 'black',
    }}
    variant="outlined"
    href="#outlined-buttons"
  >
    Справочники
  </Button>,

  <Button
    sx={{
      //borderRadius: '16px',
      width: '390px',
      color: 'black',
      borderColor: 'black',
    }}
    key="two"
    variant="outlined"
    href="#outlined-buttons"
  >
    Категории
  </Button>,

  <Button
    sx={{
      //borderRadius: '16px',
      width: '390px',
      color: 'black',
      borderColor: 'black',
    }}
    key="three"
    variant="outlined"
    href="#outlined-buttons"
  >
    Подкатегории
  </Button>,

  <Button
    sx={{
      //borderRadius: '16px',
      width: '390px',
      color: 'black',
      borderColor: 'black',
    }}
    key="four"
    variant="outlined"
    href="#outlined-buttons"
  >
    Товары
  </Button>,
  <Button
    sx={{
      // borderRadius: '16px',
      width: '390px',
      color: 'black',
      borderColor: 'black',
    }}
    key="five"
    variant="outlined"
    href="#outlined-buttons"
  >
    Настройка страниц магазина
  </Button>,
];

export default function MainAdminPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
