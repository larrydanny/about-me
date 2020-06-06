import React from "react";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
// import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

import portfolios from "./portfolio.json";
import useStyles from "../styles";

export default function Portfolio() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState({});

  const handleExpandClick = id => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };

  return (
    <Grid container spacing={4}>
      {portfolios.list.map(portfolio => (
        <Grid item key={portfolio.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={portfolio.image}
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {portfolio.title}
              </Typography>
              <Typography>{portfolio.tech}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              {portfolio.link && (
                <a
                  href={portfolio.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </a>
              )}
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded[portfolio.id]
                })}
                onClick={() => handleExpandClick(portfolio.id)}
                aria-expanded={expanded[portfolio.id]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse
              className={classes.portfolioDescription}
              in={expanded[portfolio.id]}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Typography paragraph>{portfolio.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
