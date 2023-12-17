import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import { IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import NavLink from '@/Shared/ui/NavLink';
import { useState } from 'react';
import Search from '@/Shared/ui/Search';

//меняем цвет header
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFF',
    },
  },
});

export default function Header({ title }: any) {
  //открыть и закрыть основное меню
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //открыть и закрыть меню иконки профиля
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(null);
  const openProfile = Boolean(anchorElProfile);
  const handleClickProfile = (event: MouseEvent<HTMLElement>) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  //открыть и закрыть меню иконки настройки
  const [anchorSettings, setAnchorSettings] = useState<null | HTMLElement>(null);
  const openSettings = Boolean(anchorSettings);
  const handleClickSettings = (event: MouseEvent<HTMLElement>) => {
    setAnchorSettings(event.currentTarget);
  };
  const handleCloseSettings = () => {
    setAnchorSettings(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minWidth: '320px',
        }}
      >
        <AppBar
          position="static"
          color="primary"
        >
          <Container fixed>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <IconButton
                  edge="start"
                  aria-label="menu"
                  onClick={handleClick}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="demo-customized-menu"
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  sx={{ marginLeft: '10px' }}
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <Link
                    href="#"
                    underline="none"
                    onClick={handleClose}
                  >
                    <MenuItem>Категории</MenuItem>
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    onClick={handleClose}
                  >
                    <MenuItem>Акции</MenuItem>
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    onClick={handleClose}
                  >
                    <MenuItem>Новинки</MenuItem>
                  </Link>
                </Menu>

                {/* <Link
                    //href={route('CategoryPage')}
                    underline="none"
                    onClick={handleCloseSettings}
                  >
                    <MenuItem>Настройка страниц</MenuItem>
                  </Link>
                  <NavLink
                    active={route().current('catalogs.*')}
                    href={route('catalogs')}
                    onClick={handleCloseSettings}
                  >
                    <MenuItem>Каталоги</MenuItem>
                  </NavLink>
                  <Link
                    href={route('CategoryPage')}
                    underline="none"
                    onClick={handleCloseSettings}
                  >
                    <MenuItem>Категории</MenuItem>
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    onClick={handleCloseSettings}
                  >
                    <MenuItem>Товары</MenuItem>
                  </Link> */}

                <Link
                  href="/"
                  underline="none"
                >
                  <Button sx={{ fontWeight: 700, marginTop: '2px' }}>{title}</Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                {/* <Search /> */}
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>

                {/*<Box
                  component="form"
                  sx={{
                    minWidth: 310,
                    margin: '50px 135px 0 10px',
                    border: '1px solid red',
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    //transform: 'scaleY(0)',
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Поиск"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: '10px' }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Box> */}

                <IconButton color="inherit">
                  <ShoppingBasketIcon />
                </IconButton>

                <IconButton
                  id="basic-button"
                  aria-controls={openProfile ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openProfile ? 'true' : undefined}
                  onClick={handleClickProfile}
                  color="inherit"
                >
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorElProfile}
                  open={openProfile}
                  onClose={handleCloseProfile}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  sx={{ marginLeft: '30px' }}
                >
                  <Link
                    href={route('profile.edit')}
                    underline="none"
                    onClick={handleCloseProfile}
                  >
                    <MenuItem>Профиль</MenuItem>
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    onClick={handleCloseProfile}
                  >
                    <MenuItem>Личный кабинет</MenuItem>
                  </Link>
                  <Link
                    href={route('logout')}
                    underline="none"
                    onClick={handleCloseProfile}
                  >
                    <MenuItem>Выйти</MenuItem>
                  </Link>
                </Menu>

                <IconButton
                  id="basic-button"
                  aria-controls={openSettings ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openSettings ? 'true' : undefined}
                  onClick={handleClickSettings}
                  color="inherit"
                  sx={{ mr: -4 }}
                >
                  <SettingsIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorSettings}
                  open={openSettings}
                  onClose={handleCloseSettings}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  sx={{ marginLeft: '30px' }}
                >
                  <Link
                    href={route('dashboard')}
                    underline="none"
                    onClick={handleCloseSettings}
                  >
                    <MenuItem>Настройки</MenuItem>
                  </Link>
                  <Link
                    href={route('editShopDetails')}
                    underline="none"
                    onClick={handleCloseSettings}
                  >
                    <MenuItem>О магазине</MenuItem>
                  </Link>
                  <Link
                    href={route('EditHomeShop')}
                    underline="none"
                    onClick={handleCloseSettings}
                  >
                    <MenuItem>Настройка страниц</MenuItem>
                  </Link>
                  <NavLink
                    href={route('catalogs')}
                    active={route().current('catalogs.*')}
                  >
                    <MenuItem>Каталоги</MenuItem>
                  </NavLink>
                  <NavLink
                    href={route('categories')}
                    active={route().current('categories.*')}
                  >
                    <MenuItem>Категории</MenuItem>
                  </NavLink>
                  <Link
                    href={route('products.get')}
                    underline="none"
                    onClick={handleCloseSettings}
                  >
                    <MenuItem>Товары</MenuItem>
                  </Link>
                  <Link
                    href={route('logout')}
                    underline="none"
                    onClick={handleCloseSettings}
                  >
                    <MenuItem>Выйти</MenuItem>
                  </Link>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
