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
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {/* подписка */}
      <Container fixed>
        <Box
          sx={{
            zIndex: '1',
            marginBottom: '50px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              background: '#000000',
              borderRadius: '20px',
              zIndex: '2',
              padding: '32px 24px 28px 24px',
              marginRight: '15px',
            }}
          >
            <Typography
              fontFamily="Integral CF"
              fontWeight="700"
              fontSize="30px"
              color="#FFFFFF"
              textAlign="left"
              marginBottom={'32px'}
            >
              ПОДПИШИТЕСЬ НА НОВИНКИ
            </Typography>
            <Box component="form">
              <Paper
                sx={{
                  p: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  maxWidth: '350px',
                  minHeight: '42px',
                  maxHeight: '48px',
                  borderRadius: '62px',
                  marginBottom: '12px',
                }}
              >
                <IconButton
                  sx={{ p: '10px' }}
                  aria-label="menu"
                >
                  <MailOutlineIcon sx={{ width: '20px', height: '20px' }} />
                </IconButton>
                <InputBase
                  sx={{
                    ml: 1,
                    flex: 1,
                  }}
                  placeholder="Введите свой Email"
                  inputProps={{ 'aria-label': 'Введите свой Email' }}
                />
              </Paper>
              <Paper
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  maxWidth: '350px',
                  minHeight: '42px',
                  maxHeight: '48px',
                  borderRadius: '62px',
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontWeight: 700,
                    fontSize: '14px',
                    fontFamily: 'Satoshi',
                    color: '#000000',
                    borderColor: '#FFFFFF',
                    '&:hover': { borderColor: '#FFFFFF' },
                  }}
                >
                  Подписаться
                </Button>
              </Paper>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: '100px',
            backgroundColor: '#FFFF',
            minWidth: '310px',
          }}
        />
      </Container>
    </Box>
  );
}
