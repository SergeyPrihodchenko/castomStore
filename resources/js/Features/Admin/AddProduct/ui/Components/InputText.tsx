import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputText({setValue, value, label}: any) {
  return (

      <TextField label={label} value={value} onChange={(e) => {setValue(e.target.value)}} sx={{width: '300px'}}/>
  );
}
