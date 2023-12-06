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
    textAlign: 'center',
    border: '1px solid red',
  },

  title: {
    flexGrow: 1,
    fontWeight: 700,
    fontFamily: 'Integral CF',
    fontSize: '32px',
  },

  titlePaddind: {
    padding: '40px 0 30px 0',
  },

  button: {
    width: '280px',
    height: '52px',
    alignContent: 'center',
    borderRadius: '62px',
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: 'Satoshi',
    margin: '20px',
  },

  itemBox: {
    margin: '32px',
    display: 'flex',
    alignContent: 'space-between',
    marginLeft: '-10px',
  },

  itemCard: {
    minWidth: '140px',
    maxWidth: '187px',
    minHeight: '385px',
    maxHeight: '406px',
    borderRadius: '16px',
    marginLeft: '15px',
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: '63px',
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
      backgroundSize: 'right',
      height: '448px',
      width: '100%',
      margin: '10px 0 50px 0px',
      paddingTop: '60px',
    },
  },

  TopSelling: {
    mainBox: {
      margin: '30px 0 50px 0',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    },
  },

  Categories: {
    mainBox: {
      marginBottom: '50px',
      background: '#F2F0F1',
      borderRadius: '16px',
      paddingBottom: '15px',
    },

    imgList: {
      minWidth: '260px',
      margin: '0 15px 15px 15px',
    },

    imgBox: {
      height: '160px',
      textAlign: 'left',
      padding: '25px 0 0 15px',
      borderRadius: '16px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'right',
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
      maxWidth: 400,
      flexGrow: 1,
    },

    reviewsBox: {
      padding: '24px 24px 12px 24px',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      gap: '0px 200px',
      height: 300,
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
      maxWidth: 400,
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
