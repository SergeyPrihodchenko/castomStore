import { Grid, } from "@mui/material";

const ShowElement = () => {
    return (
        <Grid container spacing={2}>
  <Grid item xs={2}>
    xs=8
  </Grid>
  <Grid item xs={4}>
    xs=4
  </Grid>
  <Grid item xs={4}>
        xs=4
  </Grid>
  <Grid item xs={8}>
        xs=8
  </Grid>
</Grid>
    );
}

export default ShowElement;