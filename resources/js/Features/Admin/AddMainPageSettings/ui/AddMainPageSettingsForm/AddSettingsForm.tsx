import { useEffect, useState } from 'react';
import styles from './AddSettingsForm.module.css';
import cn from 'classnames';
import { createTheme, Input, ListItemText, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';
import {
  useAddMainPageSettingsMutation,
  useDeleteHeaderByIdMutation,
  useDeleteSubheaderByIdMutation,
  useDeleteTitleByIdMutation,
  useGetMainPageSettingsListsQuery,
  useUpdateHeaderMutation,
  useUpdateSubheaderMutation,
  useUpdateTitleMutation,
} from '../../model/services/query/rtkMainPageSettings';
import { IHeader, ISubheader, ITitle } from '../../model/types/mainPage';

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

interface AddSettingsFormProps {
  className?: string;
}

export const AddSettingsForm = (props: AddSettingsFormProps) => {
  const { className } = props;
  const [nameStore, setNameStore] = useState(''); //
  const [headerStore, setHeaderStore] = useState('');
  const [subheader, setSubheader] = useState('');
  const { data: settings, isLoading, isSuccess } = useGetMainPageSettingsListsQuery();
  const [addSetting, {}] = useAddMainPageSettingsMutation();
  const [updateHeader, {}] = useUpdateHeaderMutation();
  const [updateTitle, { isSuccess: isSuccessTitle }] = useUpdateTitleMutation();
  const [updateSubheader, {}] = useUpdateSubheaderMutation();
  const [deleteTitleById, {}] = useDeleteTitleByIdMutation();
  const [deleteHeaderById, {}] = useDeleteHeaderByIdMutation();
  const [deleteSubheaderById, {}] = useDeleteSubheaderByIdMutation();

  const handleAddTitleClick = () => {
    addSetting({ title: nameStore });
    console.log(settings?.list_settings.all_title);

    // updateTitle(id);
  };

  console.log(settings?.list_settings.all_header);

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container fixed>
          <Box
            component="form"
            sx={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              // '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            alignContent={'center'}
          >
            <Typography
              variant="h5"
              sx={{ marginBottom: '20px' }}
            >
              Настройка главной страницы
            </Typography>

            {/* Добавление названия магазина в список, обновление происходит по нажатию пункта в списке */}
            <span className="mb-3">
              Текущее назавание магазина: {settings?.current_settings.title}
            </span>
            <TextField
              id="standard-basic"
              label="Название магазина"
              name="title"
              variant="outlined"
              onChange={(e) => setNameStore(e.target.value)}
            />
            <Button onClick={() => handleAddTitleClick()}>Добавить в список</Button>
            <List sx={{ width: '100%' }}>
              <ListSubheader
                component="div"
                id="nested-list-subheader"
              >
                Список названий
              </ListSubheader>
              {settings?.list_settings.all_title.map((titleStore: ITitle) => (
                <ListItem
                  disablePadding
                  key={titleStore.id}
                  // sx={{ bgcolor: 'rgb(22 78 99);', color: '#fff' }}
                  className={cn({
                    [styles.choosen]: titleStore.title === settings.current_settings.title,
                  })}
                >
                  <ListItemButton onClick={() => updateTitle(titleStore.id)}>
                    <ListItemText primary={`${titleStore.title}`} />
                  </ListItemButton>
                  <IconButton
                    aria-label="delete"
                    href="#"
                    onClick={() => deleteTitleById(titleStore.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>

            {/* Добавление заголовка главной страницы магазина в список, обновление происходит по нажатию пункта в списке */}
            <span className="mb-3">Текущий заголовок: {settings?.current_settings.header}</span>
            <TextField
              id="standard-basic"
              label="Заголовок"
              name="header"
              variant="outlined"
              onChange={(e) => setHeaderStore(e.target.value)}
            />
            <Button onClick={() => addSetting({ header: headerStore })}>Добавить в список</Button>

            <List sx={{ width: '100%' }}>
              <ListSubheader
                component="div"
                id="nested-list-subheader"
              >
                Список заголовков
              </ListSubheader>
              {settings?.list_settings.all_header.map((header: IHeader) => (
                <ListItem
                  disablePadding
                  key={header.id}
                  className={cn({
                    [styles.choosen]: header.title === settings.current_settings.header,
                  })}
                >
                  <ListItemButton onClick={() => updateHeader(header.id)}>
                    {header.title}
                  </ListItemButton>
                  <IconButton
                    aria-label="delete"
                    href="#"
                    onClick={() => deleteHeaderById(header.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            {/* Добавление подзаголовка главной страницы магазина в список, обновление происходит по нажатию пункта в списке */}
            <span className="mb-3">
              Текущий подзаголовок: {settings?.current_settings.subheader}
            </span>
            <TextField
              id="standard-basic"
              label="Подзаголовок"
              name="subheader"
              variant="outlined"
              onChange={(e) => setSubheader(e.target.value)}
            />
            <Button onClick={() => addSetting({ subheader: subheader })}>Добавить в список</Button>
            <List sx={{ width: '100%' }}>
              <ListSubheader
                component="div"
                id="nested-list-subheader"
              >
                Список подзаголовков
              </ListSubheader>
              {settings?.list_settings.all_subheader.map((subheader: ISubheader) => (
                <ListItem
                  disablePadding
                  key={subheader.id}
                  className={cn({
                    [styles.choosen]: subheader.title === settings.current_settings.subheader,
                  })}
                >
                  <ListItemButton onClick={() => updateSubheader(subheader.id)}>
                    {subheader.title}
                  </ListItemButton>
                  <IconButton
                    aria-label="delete"
                    href="#"
                    onClick={() => deleteSubheaderById(subheader.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            {/* <Button
              component="label"
              variant="text"
              color="primary"
              size="small"
              startIcon={<CloudUploadIcon />}
            >
              Загрузить фото
              <VisuallyHiddenInput type="file" />
            </Button> */}
          </Box>

          {/* <Button
            variant="contained"
            size="small"
            color="secondary"
            sx={{ margin: '20px' }}
          >
            Сохранить
          </Button> */}
        </Container>
      </ThemeProvider>
    </>
  );
};
