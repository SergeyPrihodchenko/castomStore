import { Box, Grid, Rating, Typography  } from "@mui/material";
import { style } from "../modul/styles/showPage";

const ShowElement = () => {



    return (
        <Grid container sx={style.mainBox}>
            <Grid container spacing={1} sx={style.slider.box}>
                <Grid item xs={12}>
                    <Box sx={{...style.slider.mainImage, backgroundImage: 'url(storage/showPage/3.jpg)'}}></Box>
                </Grid>
                <Grid item xs={4}><Box sx={{...style.slider.subImage, backgroundImage: 'url(storage/showPage/2.jpg)'}}></Box></Grid>
                <Grid item xs={4}><Box sx={{...style.slider.subImage, backgroundImage: 'url(storage/showPage/4.jpg)'}}></Box></Grid>
                <Grid item xs={4}><Box sx={{...style.slider.subImage ,backgroundImage: 'url(storage/showPage/1.jpg)'}}></Box></Grid>
            </Grid>
            <Grid container sx={style.slider.box}>
                <Grid item sx={style.itemPanel.headerBox} xs={12}>
                    <Typography variant="h1" component={'h1'} sx={style.itemPanel.header}>One Life Graphic T-shirt</Typography>
                </Grid>
                <Grid item xs={12} sx={style.itemPanel.rating}>
                    <Rating
                            name="half-rating"
                            size="small"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3" component={'h3'} sx={style.itemPanel.price}>$260</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography component={'p'} sx={style.itemPanel.description}>
                        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Box sx={style.itemPanel.buttonCounte}>
                                <Typography component={'span'} sx={style.itemPanel.buttonCounte.item}>-</Typography>
                                <Typography component={'span'} sx={style.itemPanel.buttonCounte.item}>1</Typography>
                                <Typography component={'span'} sx={style.itemPanel.buttonCounte.item}>+</Typography>
                                </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box sx={style.itemPanel.buttonAdd}>
                                <Typography component={'span'} sx={style.itemPanel.buttonAdd.item}>Add to Cart</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>

                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </Grid>
    );
}

export default ShowElement;

