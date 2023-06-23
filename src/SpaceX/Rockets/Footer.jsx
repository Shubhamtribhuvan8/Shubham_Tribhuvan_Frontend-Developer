import { AppBar, Toolbar, Typography, Grid } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} md={4}>
              <Typography variant="body1" color="inherit" align="center">
                About Space_X
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" color="inherit" align="center">
                Help
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" color="inherit" align="center">
                Thanks@Brainstorm_force
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
