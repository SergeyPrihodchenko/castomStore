export const style = {

    container: {
        maxWidth: '1400px', 
        margin: '0 auto'
    },

    serchBox: { 
        display: 'flex', 
        alignItems: 'flex-end', 
        marginBottom: '10px',
        icon: { 
            color: '#2a2a2a', 
            mr: 1, 
            my: 0.5 
        },
        checkBox: {
            marginLeft: '15px'
        }
    },

    tableBox: { 
        display: 'flex', 
        alignItems: 'flex-end',
        
    },

    buttonDelete: {
        marginLeft: '10px',
         background: '#d15353',
          display: {xs:'none', sm:'inline-block'}
    },
     
    rowData: {
        borderTop: 'solid 1px',
        borderRight: 'solid 1px',
        padding: '5px',
        fontWeight: 'bold'
    },

    headRow: {
        textAlign: 'left',
         fontWeight: 'bold',
          fontSize: '1.1em'
    },

    rowButton: {
        borderTop: 'solid 1px',
         textAlign: 'right',
          padding: '5px'
    }
}