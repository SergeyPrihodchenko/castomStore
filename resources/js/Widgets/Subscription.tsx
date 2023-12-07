import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Container from '@mui/material/Container';

export default function Subscription() {
  return (
    <Box sx={{ ...style.mainBox }}>
      {/* подписка */}
      <Container fixed>
        <Box sx={{ ...style.boxTop }}>
          <Box sx={{ ...style.boxTitle }}>
            <Typography sx={{ ...style.title }}>ПОДПИШИТЕСЬ НА НОВИНКИ</Typography>
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

const style = {
  mainBox: {
    display: 'flex',
    justifyContent: 'center',
  },

  boxTop: {
    zIndex: '1',
    marginBottom: '50px',
  },

  boxTitle: {
    position: 'absolute',
    background: '#000000',
    borderRadius: '20px',
    zIndex: '2',
    padding: '32px 24px 28px 24px',
    marginRight: '15px',
  },

  title: {
    fontFamily: 'Integral CF',
    fontWeight: '700',
    fontSize: '30px',
    color: '#FFFFFF',
    textAlign: 'left',
    marginBottom: '32px',
  },

  paperEmail: {
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '350px',
    minHeight: '42px',
    maxHeight: '48px',
    borderRadius: '62px',
    marginBottom: '12px',
  },

  mailOutlineIcon: {
    width: '20px',
    height: '20px',
  },

  paperButton: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '350px',
    minHeight: '42px',
    maxHeight: '48px',
    borderRadius: '62px',
  },

  button: {
    fontWeight: 700,
    fontSize: '14px',
    fontFamily: 'Satoshi',
    color: '#000000',
    borderColor: '#FFFFFF',
    '&:hover': { borderColor: '#FFFFFF' },
  },

  boxBottom: {
    height: '100px',
    backgroundColor: '#FFFF',
    minWidth: '310px',
  },
};
