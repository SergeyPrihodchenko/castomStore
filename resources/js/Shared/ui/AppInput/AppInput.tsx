import Input, { InputProps } from '@mui/material/Input';

interface AppInputProps extends InputProps {}

const AppInput = (props: AppInputProps) => {
  return (
    <Input
      sx={{ width: '100%' }}
      {...props}
    />
  );
};

export default AppInput;
