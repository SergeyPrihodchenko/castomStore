import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
  },
});

export const style = {
  mainBox: {
    minWidth: 320,
    margin: '0 auto',
    textAlign: { xs: 'center', md: 'left' },
    zIndex: { sm: '2' },
  },

  title: {
    flexGrow: 1,
    fontWeight: 700,
    fontFamily: 'Integral CF',
    fontSize: '32px',
  },

  titlePadding: {
    padding: '40px 0 30px 0',
  },

  titleMargin: {
    margin: '40px 0 30px 0',
  },

  button: {
    width: { xs: '280px', sm: '180px', md: '210px' },
    height: '52px',
    alignContent: 'center',
    borderRadius: '62px',
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: 'Satoshi',
    margin: '20px',
  },

  mainCardBox: {
    minWidth: 320,
    margin: '0 auto',
    textAlign: 'center',
  },

  itemBox: {
    margin: '30px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    height: '100%',
  },

  cardBox: {
    width: { xs: '50%', sm: '31%', md: '22%' },
  },

  itemCard: {
    minWidth: '140px',
    maxWidth: '187px',
    minHeight: '385px',
    maxHeight: '406px',
    borderRadius: '16px',
    margin: '5px',
  },

  itemTitle: {
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '16px',
    fontFamily: 'Satoshi',
  },

  itemRating: {
    ml: 1,
    fontSize: '12px',
    fontFamily: 'Satoshi',
    fontWeight: '700',
  },

  itemPrice: {
    textAlign: 'left',
    fontWeight: '700',
    fontSize: '20px',
    paddingBottom: '10px',
    fontFamily: 'Satoshi',
  },

  HeaderWithPicture: {
    mainBox: {
      maxWidth: { sm: '250px', md: '580px' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: '63px',
      zIndex: { sm: '1' },
      position: { sm: 'absolute' },
    },

    title: {
      textAlign: 'left',
      paddingLeft: '20px',
      lineHeight: '1',
      marginBottom: '20px',
    },

    text: {
      flexGrow: 1,
      fontSize: '14px',
      textAlign: 'left',
      paddingLeft: '20px',
      fontWeight: 400,
      fontFamily: 'Satoshi',
    },

    imgBoxColor: {
      backgroundColor: '#F2F0F1',
    },

    imgBox: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: { xs: 'cover', sm: 'contain' },
      backgroundPosition: 'right',
      height: '450px',
      minWidth: '310px',
      marginBottom: '50px',
      paddingTop: '60px',
    },
  },

  TopSelling: {
    mainBox: {
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    },
  },

  Categories: {
    mainBox: {
      background: '#F2F0F1',
      borderRadius: '16px',
      paddingBottom: '15px',
    },

    categoryBox: {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: 'center',
      flexWrap: { sm: 'wrap' },
      height: '100%',
    },

    cardBox: {
      width: { xs: '100%', sm: '50%', md: '45%' },
    },

    imgList: {
      minWidth: '240px',
      margin: { xs: '15px', sm: '10px' },
    },

    imgBox: {
      height: '160px',
      textAlign: 'left',
      padding: '25px 0 0 15px',
      borderRadius: '16px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      fontFamily: 'Satoshi',
      fontWeight: '700',
      fontSize: '24px',
      color: '#000000',
      backgroundColor: '#FFFFFF',
    },
  },

  Reviews: {
    mainBox: {
      borderRadius: '16px',
      paddingBottom: '15px',
    },

    MobileStepperBox: {
      maxWidth: 1200,
      flexGrow: 1,
    },

    reviewsBox: {
      padding: '24px 24px 12px 24px',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      //gap: '0 200px',
      height: '100%',
    },

    ratingBox: {
      ml: 1,
      display: 'flex',
      marginBottom: '20px',
    },

    authorReviews: {
      fontFamily: 'Satoshi',
      fontWeight: '700',
      fontSize: '16px',
    },

    iconButtonCheckCicle: {
      width: '16px',
      height: '16px',
      marginLeft: '4px',
      background: '#01AB31 ',
      color: '#FFFFFF',
    },

    descBox: {
      maxWidth: 1200,
      width: '100%',
      p: 2,
      color: 'rgba(0, 0, 0, 0.6)',
    },

    descText: {
      fontFamily: 'Satoshi',
      fontWeight: '400',
      fontSize: '14px',
      textAlign: 'start',
    },
  },
};
