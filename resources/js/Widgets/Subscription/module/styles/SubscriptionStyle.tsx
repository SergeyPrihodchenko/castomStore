export const style = {
  mainBox: {
    minWidth: 300,
    margin: '0 auto',
    display: 'flex',
    //justifyContent: 'center',
  },

  boxTop: {
    zIndex: '1',
    marginBottom: { xs: '50px', sm: '0' },
  },

  box: {
    position: 'absolute',
    background: '#000000',
    borderRadius: '20px',
    zIndex: '2',
    padding: '32px 24px 28px 24px',
    marginRight: '15px',
    display: { sm: 'flex' },
    minWidth: { xs: '300px', sm: '560px', md: '860px', lg: '1150px' },
  },

  boxTitle: {
    width: { xs: '100%', sm: '60%', md: '75%' },
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
    justifyContent: 'center',
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
    minWidth: '300px',
  },
};
