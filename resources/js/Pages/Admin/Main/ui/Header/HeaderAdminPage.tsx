import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  createTheme,
  ThemeProvider,
  styled,
  alpha,
} from '@mui/material/styles';

import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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

export default function HeaderAdminPage() {
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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <>
              <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                //endIcon={<KeyboardArrowDownIcon />}
              >
                <MenuIcon />
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                sx={{ marginLeft: '20px', marginTop: '-15px' }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Button
                    sx={{
                      color: 'black',
                      borderColor: 'black',
                    }}
                    variant="outlined"
                    href="#outlined-buttons"
                  >
                    <Typography
                      variant="h6"
                      sx={{ flexGrow: 1, fontSize: '16px' }}
                    >
                      Категории
                    </Typography>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <Button
                    sx={{
                      color: 'black',
                      borderColor: 'black',
                    }}
                    variant="outlined"
                    href="#outlined-buttons"
                  >
                    <Typography
                      variant="h6"
                      sx={{ flexGrow: 1, fontSize: '16px' }}
                    >
                      Акции
                    </Typography>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <Button
                    sx={{
                      color: 'black',
                      borderColor: 'black',
                    }}
                    variant="outlined"
                    href="#outlined-buttons"
                  >
                    <Typography
                      variant="h6"
                      sx={{ flexGrow: 1, fontSize: '16px' }}
                    >
                      Новинки
                    </Typography>
                  </Button>
                </MenuItem>
              </StyledMenu>
            </>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 700, mr: 9 }}
            >
              Shop.com
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
              sx={{ marginLeft: '-110px' }}
            >
              <MenuItem onClick={handleCloseProfile}>Профиль</MenuItem>
              <MenuItem onClick={handleCloseProfile}>Личный кабинет</MenuItem>
              <MenuItem onClick={handleCloseProfile}>Выйти</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
