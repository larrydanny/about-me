import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginBottom: 50
  },
  educationsPanel: {
    background: "linear-gradient(45deg, #868f96 30%, #596164 90%)",
    color: "white"
  }
}));

export default function Educations() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="University" {...a11yProps(0)} />
          <Tab label="College" {...a11yProps(1)} />
          <Tab label="School" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          className={classes.educationsPanel}
        >
          Institute: SHAHJALAL UNIVERSITY OF SCIENCE AND TECHNOLOGY
          <br />
          Department: Computer Science & Engineering
          <br />
          Degree: BACHELOR OF SCIENCE
          <br />
          Session: 2007 - 2011
          <br />
          District: Sylhet
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          className={classes.educationsPanel}
        >
          Institute: NOTRE DAME COLLEGE
          <br />
          Department: Science
          <br />
          Degree: HIGHER SECONDARY CERTIFICATE (HSC)
          <br />
          Session: 2004 - 2006
          <br />
          District: Dhaka
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          dir={theme.direction}
          className={classes.educationsPanel}
        >
          Institute: CHURCH OG GOD HIGH SCHOOL
          <br />
          Department: Science
          <br />
          Degree: SECONDARY SCHOOL CERTIFICATE (HSC)
          <br />
          Session: 2002 - 2004
          <br />
          District: Lalmonirhat
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
