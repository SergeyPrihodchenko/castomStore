export const style = {
    container: {maxWidth: '1200px', width:'100%', padding: '10px', margin: '0 auto'},
    flexItem: {display: 'flex', justifyContent: 'center'},
    header: {margin: '10px auto'},
    marginTop: { marginTop: '10px'},
    textaria: {marginTop: '10px', marginLeft: {xs: '0px'}, textAlign: 'center'},
    videoInput: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& > :not(style)': { m: 1, width: '25ch' },
    },
    imagePrew: {display: 'flex', justifyContent: 'start'},
  }