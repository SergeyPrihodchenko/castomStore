import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function HeaderAdminPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Твой магазин
          </Typography>
          <Button color="inherit">
            <SearchIcon />
          </Button>
          <Button color="inherit">
            <ShoppingBasketIcon />
          </Button>
          <Button color="inherit">
            <AccountCircleIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
