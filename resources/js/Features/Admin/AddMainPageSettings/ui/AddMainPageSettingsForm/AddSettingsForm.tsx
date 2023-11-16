import { createTheme, Input, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';
import {
  useAddMainPageSettingsMutation,
  useGetMainPageSettingsListsQuery,
  useUpdateHeaderMutation,
} from '../../model/services/query/rtkMainPageSettings';
import { useAppDispatch } from '@/Shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addMainPageSettingsActions } from '../../model/slice/addSettingsSlice';
import { useAppSelector } from '@/Shared/lib/hooks/useAppSelector/useAppSelector';
import { getHeader } from '../../model/selectors/getHeader';
import { useEffect, useState } from 'react';
import { getTitle } from '../../model/selectors/getTitle';
import { IHeader } from '../../model/types/mainPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#808080',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
  },
});

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
interface AddSettingsFormProps {}
export const AddSettingsForm = (props: AddSettingsFormProps) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetMainPageSettingsListsQuery();

  const [updateHeader, {}] = useUpdateHeaderMutation();

  const [addMainPageSettings, { isLoading: isAdding }] = useAddMainPageSettingsMutation();
  const handleHeaderChange = (value: string) => {
    dispatch(addMainPageSettingsActions.setHeader(value));
    // setSettings({ ...settings, HeaderStore: { header: value } });
  };
  const handleTitleChange = (value: string) => {
    dispatch(addMainPageSettingsActions.setTitle(value));
    // setSettings({ ...settings, HeaderStore: { header: value } });
  };

  const handleAddSettings = async (id: number) => {
    // await addMainPageSettings(settings);
  };
  const handleUpdateHeader = async (item: Partial<IHeader>) => {
    await updateHeader(item);
  };
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Box
          component="form"
          sx={{
            minWidth: '390px',
            marginLeft: '40px',
          }}
        > */}
        <Container fixed>
          <Box
            component="form"
            sx={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            alignContent={'center'}
          >
            <Typography variant="h5">Настройка главной страницы</Typography>

            <TextField
              id="standard-basic"
              label="Заголовок"
              variant="standard"
              defaultValue={data?.current_settings.header}
              onChange={(e) => handleHeaderChange(e.target.value)}
            />

            <ul>
              {data?.list_settings.all_header.map((item: Partial<IHeader>) => (
                <li onClick={() => handleUpdateHeader(item)}>{item.header}</li>
              ))}
            </ul>

            {/* <TextField
                  id="standard-basic"
                  label="Описание"
                  variant="standard"
                /> */}
            <Button
              component="label"
              variant="text"
              color="primary"
              size="small"
              startIcon={<CloudUploadIcon />}
            >
              Загрузить фото
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>

          <Button
            variant="contained"
            size="small"
            color="secondary"
            sx={{ margin: '20px' }}
            onClick={() => handleAddSettings(2)}
          >
            Сохранить
          </Button>
          {/* <Button
                variant="contained"
                size="small"
                href="#"
                color="secondary"
              >
                Удалить
              </Button> */}
        </Container>
        {/* </Box> */}
      </ThemeProvider>
    </>
  );
};
