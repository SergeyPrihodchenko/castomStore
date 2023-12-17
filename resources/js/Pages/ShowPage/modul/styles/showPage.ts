
export const style = {
    mainBox: {
        padding: '10px 0'
    },

    box: {
        padding: '10px 16px',
        alignItems: 'center'
    },

    slider: {
        mainImage: {
            backgroundRepeat: 'no-repeat',
            backgroundOrigin: 'border-box',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: {xs:'290px', sm:'400px', md:'530px'},
            width: '100%',
            maxWidth: {xs:'355px', sm:'344px', md:'444px'},
            maxHeight: {xs:'290px', sm:'400px', md:'530px'},
            borderRadius: '20px',
        },

        listImages: {
            flexDirection: {xs:'row', sm:'column'}
        },

        image: {
            backgroundRepeat: 'no-repeat',
            backgroundOrigin: 'border-box',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: {xs:'106px', sm:'133px', md:'167px'},
            width: '100%',
            maxWidth: {xs:'111px', sm:'128px', md:'152px'},
            maxHeight: {xs:'106px', sm:'133px', md:'167px'},
            borderRadius: '20px',
        }
    },

    itemPanel: {
        headerBox: {
            maxWidth: '267px',
            width: '100%',
            display: 'flex',
            alignItems: 'center'
        },

        header: {
            color: '#000',
            fontFamily: 'Integral CF',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '28px',
        },

        rating: {
            padding: '12px 0'
        },

        price: {
            color: '#000',
            fontFamily: 'Satoshi',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal',
            padding: '12px 0'
        },

        description: {
            color: "rgba(0, 0, 0, 0.60)",
            leadingTrim: "both",
            textRdge: "cap",
            fontFamily: "Satoshi",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            padding: '12px 0'
        },

        buttonCounte: {
            padding: '12px 16px',
            borderRadius: '62px',
            backgroundColor: '#F0F0F0',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',

            item: {
                color: '#000',
                fontFamily: 'Satoshi',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }
        },

        buttonAdd: {
            display: 'flex',
            width: '236px',
            height: '44px',
            padding: '16px 54px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            flexShrink: '0',
            borderRadius: '62px',
            background: '#000',

            item: {
                color: '#FFF',
                fontFamily: 'Satoshi',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal'
            }
        }
    }

}
