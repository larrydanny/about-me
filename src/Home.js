import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./styles";

import TopBar from "./components/TopBar";
import ViewResume from "./components/ViewResume";
import Experience from "./components/Experience";
import Educations from "./components/Educations";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.0-9/50900065_10218382627822248_1624166209677164544_o.jpg?_nc_cat=103&_nc_sid=174925&_nc_eui2=AeEvaun4Be2tyF6E2FmTTTj9FPAq1uxkelgU8CrW7GR6WO9DEmN11aZQEzAokyeHMgU&_nc_ohc=tr9hCw6WbPAAX8a_x_x&_nc_ht=scontent.fcgp17-1.fna&oh=52ae1b8ab86a9ee71bd1a15f5a4acb5c&oe=5EFC7230"
              className={classes.large}
            />
            <Typography variant="h4" align="center" paragraph>
              Hi, I'm Larry.
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              I'm a Full Stack Developer
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" onClick={handleClickOpen}>
                    View Resume
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Experience />
          <Educations />
          <Portfolio />
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}

      {/* ViewResume */}
      <ViewResume open={open} handleClose={handleClose} />
      {/* End ViewResume */}
    </React.Fragment>
  );
}
