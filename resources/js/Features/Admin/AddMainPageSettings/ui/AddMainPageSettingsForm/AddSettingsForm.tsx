import { ChangeEvent, useCallback, useEffect, useState } from 'react';
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
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';
import {
  useAddMainPageSettingsMutation,
  useDeleteHeaderByIdMutation,
  useDeleteImageByIdMutation,
  useDeleteSubheaderByIdMutation,
  useDeleteTitleByIdMutation,
  useGetMainPageSettingsListsQuery,
  useUpdateHeaderMutation,
  useUpdateImageMutation,
  useUpdateSubheaderMutation,
  useUpdateTitleMutation,
} from '../../model/services/query/rtkMainPageSettings';
import { IHeader, IImgPath, ISubheader, ITitle } from '../../model/types/mainPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#808080',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#4f378b',
      contrastText: '#fff',
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
  const [nameStore, setNameStore] = useState('');
  const [headerStore, setHeaderStore] = useState('');
  const [subheader, setSubheader] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState('');

  const { data: settings, isLoading, isSuccess } = useGetMainPageSettingsListsQuery();
  const [addSetting, {}] = useAddMainPageSettingsMutation();
  const [updateHeader, {}] = useUpdateHeaderMutation();
  const [updateTitle, { isSuccess: isSuccessTitle }] = useUpdateTitleMutation();
  const [updateSubheader, {}] = useUpdateSubheaderMutation();
  const [updateImage, {}] = useUpdateImageMutation();
  const [deleteTitleById, {}] = useDeleteTitleByIdMutation();
  const [deleteHeaderById, {}] = useDeleteHeaderByIdMutation();
  const [deleteSubheaderById, {}] = useDeleteSubheaderByIdMutation();
  const [deleteImageById, {}] = useDeleteImageByIdMutation();

  useEffect(() => {
    if (!image) {
      return;
    }
    setPreviewImg(URL.createObjectURL(image));
  }, [image]);

  const handleAddTitleClick = useCallback(() => {
    addSetting({ title: nameStore });
    setNameStore('');
  }, [nameStore]);
  const handleAddHeaderClick = useCallback(() => {
    addSetting({ header: headerStore });
    setHeaderStore('');
  }, [headerStore]);

  const handleAddImageChange = async (image: File | null) => {
    if (!image) {
      return null;
    }
    setImage(image);
    const formData = new FormData();
    formData.append('image', image);

    console.log('formData', formData.get('image'));

    await addSetting({ image: formData.get('image') });
  };

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
            <Chip
              sx={{ alignSelf: 'flex-start', marginBottom: '10px' }}
              color="secondary"
              variant="filled"
              size="small"
              label={`Установлено: ${settings?.current_settings.title}`}
            />
            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              <TextField
                sx={{ flexGrow: 1 }}
                id="standard-basic"
                label="Название магазина"
                value={nameStore}
                name="title"
                variant="outlined"
                onChange={(e) => setNameStore(e.target.value)}
              />
              <Button
                onClick={handleAddTitleClick}
                variant="contained"
                size="small"
              >
                Добавить
              </Button>
            </Box>
            <List
              sx={{
                width: '100%',
                marginBottom: '20px',
                overflow: 'auto',
                maxHeight: 200,
                padding: 0,
              }}
            >
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
            <Chip
              sx={{ alignSelf: 'flex-start', marginBottom: '10px' }}
              color="secondary"
              variant="filled"
              size="small"
              label={`Установлено: ${settings?.current_settings.header}`}
            />
            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              <TextField
                sx={{ flexGrow: 1 }}
                id="standard-basic"
                label="Заголовок"
                value={headerStore}
                name="header"
                variant="outlined"
                onChange={(e) => setHeaderStore(e.target.value)}
              />
              <Button
                onClick={handleAddHeaderClick}
                variant="contained"
                size="small"
              >
                Добавить
              </Button>
            </Box>

            <List sx={{ width: '100%', marginBottom: '20px' }}>
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
              Текущий подзаголовок: <b> {settings?.current_settings.subheader} </b>
            </span>
            <TextField
              id="standard-basic"
              label="Подзаголовок"
              name="subheader"
              variant="outlined"
              onChange={(e) => setSubheader(e.target.value)}
            />
            <Button onClick={() => addSetting({ subheader: subheader })}>Добавить в список</Button>
            <List sx={{ width: '100%', marginBottom: '20px' }}>
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
            <div className="my-6">
              <Button
                component="label"
                variant="text"
                color="primary"
                size="small"
                startIcon={<CloudUploadIcon />}
              >
                Загрузить фото
                <VisuallyHiddenInput
                  accept="image/*,.jpg"
                  type="file"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleAddImageChange(e.target.files[0])
                  }
                />
              </Button>
              {previewImg && (
                <img
                  alt=""
                  src={previewImg}
                  width={100}
                />
              )}
              <List sx={{ width: '100%', marginBottom: '20px' }}>
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                >
                  Список картинок
                </ListSubheader>
                {settings?.list_settings.all_img_path.map((image: IImgPath) => (
                  <ListItem
                    disablePadding
                    key={image.id}
                    // sx={{ bgcolor: 'rgb(22 78 99);', color: '#fff' }}
                    className={cn({
                      [styles.choosen]: image.img_path === settings?.current_settings.img_path,
                    })}
                  >
                    <ListItemButton onClick={() => updateImage(image.id)}>
                      {/* <ListItemText primary={`${image.img_path}`} /> */}
                      <img
                        src={`${image.img_path}`}
                        width={100}
                      />
                    </ListItemButton>
                    <IconButton
                      aria-label="delete"
                      href="#"
                      onClick={() => deleteImageById(image.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </div>
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
