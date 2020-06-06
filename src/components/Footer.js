import React from "react";
import Typography from "@material-ui/core/Typography";

import useStyles from "../styles";

import Copyright from "./Copyright";

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  );
}
