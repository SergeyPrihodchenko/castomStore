
export const style = {
    mainBox: {
        padding: '10px 0'
    },

    slider: {
        box: {
            padding: '10px 16px',
            alignItems: 'center'
        },

        mainImage: {
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '290px',
            width: '100%',
            maxWidth: '355px',
            maxHeight: '290px',
            borderRadius: '20px'
        },

        subImage: {
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '106px',
            width: '100%',
            maxWidth: '111px',
            maxHeight: '106px',
            borderRadius: '20px'
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
