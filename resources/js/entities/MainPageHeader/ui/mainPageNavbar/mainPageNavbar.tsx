import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';

interface MainPageNavbarProps {
  title: string;
}
export function MainPageNavbar(props: MainPageNavbarProps) {
  const { title } = props;
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label={title}
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
