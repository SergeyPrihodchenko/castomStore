import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Container from '@mui/material/Container';
import { style } from './module/styles/SubscriptionStyle';

export default function Subscription() {
  return (
    <Box sx={{ ...style.mainBox }}>
      <Container fixed>
        {/* подписка */}

        <Box sx={{ ...style.boxTop }}>
          <Box sx={{ ...style.box }}>
            <Box sx={{ ...style.boxTitle }}>
              <Typography sx={{ ...style.title }}>ПОДПИШИТЕСЬ НА НОВИНКИ</Typography>
            </Box>

            <Box component="form">
              <Paper sx={{ ...style.paperEmail }}>
                <IconButton
                  sx={{ p: '10px' }}
                  aria-label="menu"
                >
                  <MailOutlineIcon sx={{ ...style.mailOutlineIcon }} />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Введите свой Email"
                  inputProps={{ 'aria-label': 'Введите свой Email' }}
                />
              </Paper>
              <Paper sx={{ ...style.paperButton }}>
                <Button
                  variant="outlined"
                  sx={{ ...style.button }}
                >
                  Подписаться
                </Button>
              </Paper>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...style.boxBottom }} />
      </Container>
    </Box>
  );
}
