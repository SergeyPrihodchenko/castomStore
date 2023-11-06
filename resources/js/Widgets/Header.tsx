import * as React from 'react';

import Dropdown from '@/Components/Dropdown';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {
  createTheme,
  ThemeProvider,
  styled,
  alpha,
} from '@mui/material/styles';

import Menu, { MenuProps } from '@mui/material/Menu';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFF',
    },
  },
});

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElProfile, setAnchorElProfile] =
    React.useState<null | HTMLElement>(null);
  const openProfile = Boolean(anchorElProfile);
  const handleClickProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const [anchorElSettings, setAnchorElSettings] =
    React.useState<null | HTMLElement>(null);
  const openSettings = Boolean(anchorElSettings);
  const handleClickSettings = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSettings(event.currentTarget);
  };
  const handleCloseSettings = () => {
    setAnchorElSettings(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              aria-label="menu"
              sx={{ mr: -2, size: 'large', edge: 'start', color: 'inherit' }}
            >
              <MenuIcon />
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              sx={{ marginLeft: '30px', marginTop: '-15px' }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Dropdown.Link href="#outlined-buttons" onClick={handleClose}>
                Категории
              </Dropdown.Link>
              <Dropdown.Link href="#outlined-buttons" onClick={handleClose}>
                Акции
              </Dropdown.Link>
              <Dropdown.Link href="#outlined-buttons" onClick={handleClose}>
                Новинки
              </Dropdown.Link>
            </StyledMenu>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button href="/" sx={{ fontWeight: 700 }}>
                Shop.com
              </Button>
            </Typography>

            <Button color="inherit" sx={{ mr: -3 }}>
              <SearchIcon />
            </Button>
            <Button color="inherit" sx={{ mr: -3 }}>
              <ShoppingBasketIcon />
            </Button>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickProfile}
              sx={{ mr: -3 }}
            >
              <AccountCircleIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorElProfile}
              open={openProfile}
              onClose={handleCloseProfile}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              sx={{ marginLeft: '-95px', marginTop: '-5px' }}
            >
              <Dropdown.Link
                href={route('profile.edit')}
                onClick={handleCloseProfile}
              >
                Профиль
              </Dropdown.Link>
              <Dropdown.Link href="#" onClick={handleCloseProfile}>
                Личный кабинет
              </Dropdown.Link>
              <Dropdown.Link
                href={route('logout')}
                method="post"
                as="button"
                onClick={handleCloseProfile}
              >
                Выйти
              </Dropdown.Link>
            </Menu>

            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickSettings}
              sx={{ mr: -3 }}
            >
              <SettingsIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorElSettings}
              open={openSettings}
              onClose={handleCloseSettings}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              sx={{ marginLeft: '-115px', marginTop: '-5px' }}
            >
              <Dropdown.Link href="/dashboard" onClick={handleCloseSettings}>
                Настройки
              </Dropdown.Link>
              <Dropdown.Link href="#" onClick={handleCloseSettings}>
                О магазине
              </Dropdown.Link>
              <Dropdown.Link href="#" onClick={handleCloseSettings}>
                Настройка страниц
              </Dropdown.Link>
              <Dropdown.Link href="#" onClick={handleCloseSettings}>
                Каталоги
              </Dropdown.Link>
              <Dropdown.Link href="#" onClick={handleCloseSettings}>
                Товары
              </Dropdown.Link>

              <Dropdown.Link
                href={route('logout')}
                method="post"
                as="button"
                onClick={handleCloseSettings}
              >
                Выйти
              </Dropdown.Link>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
