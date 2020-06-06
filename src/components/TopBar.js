import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import useStyles from "../styles";

export default function TopBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Link href="http://google.com" target="_blank" className={classes.icon}>
          <FacebookIcon />
        </Link>
        <Link href="http://google.com" target="_blank" className={classes.icon}>
          <GitHubIcon />
        </Link>
        <Link href="http://google.com" target="_blank" className={classes.icon}>
          <LinkedInIcon />
        </Link>
        <Link href="http://google.com" target="_blank" className={classes.icon}>
          <TwitterIcon />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
