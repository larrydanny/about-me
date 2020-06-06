import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginBottom: "50px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  table: {
    minWidth: 650
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  tableCell1: {
    paddingLeft: "85px !important"
  },
  tableCell2: {
    paddingLeft: "55px !important"
  },
  tableCell3: {
    paddingLeft: "95px !important"
  },
  tableCell4: {
    paddingLeft: "25px !important"
  }
}));

export default function Experience() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Company Name</Typography>
          <Typography className={classes.secondaryHeading}>
            Spring Rain Pvt. Ltd.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell1}>
                    Designation
                  </TableCell>
                  <TableCell className={classes.tableCell2}>
                    Sr. Full Stack Developer
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.tableCell1}>Duration</TableCell>
                  <TableCell className={classes.tableCell2}>
                    09 June, 2013 - Present
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableCell1}>Address</TableCell>
                  <TableCell className={classes.tableCell2}>
                    House # 75, Road # 04, Block # B, Niketon, Gulshan # 01,
                    Dhaka
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableCell1}>Website</TableCell>
                  <TableCell className={classes.tableCell2}>
                    <a
                      href="https://springrainit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.springrainit.com
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Company Name</Typography>
          <Typography className={classes.secondaryHeading}>
            eBizzSol Ltd.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell1}>
                    Designation
                  </TableCell>
                  <TableCell className={classes.tableCell2}>
                    Software Engineer
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.tableCell1}>Duration</TableCell>
                  <TableCell className={classes.tableCell2}>
                    02 May, 2012 - 31 May, 2013
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Company Name</Typography>
          <Typography className={classes.secondaryHeading}>
            iBridge BD Technology
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell1}>
                    Designation
                  </TableCell>
                  <TableCell>Software Engineer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.tableCell1}>Duration</TableCell>
                  <TableCell>07 December, 2011 - 30 April, 2012</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal Info</Typography>
          <Typography className={classes.secondaryHeading}>
            Luscious Larry Das
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell3}>
                    Date of Birth
                  </TableCell>
                  <TableCell className={classes.tableCell4}>
                    September 20, 1988
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.tableCell3}>Gender</TableCell>
                  <TableCell className={classes.tableCell4}>Male</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableCell3}>
                    Marital Status
                  </TableCell>
                  <TableCell className={classes.tableCell4}>Married</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableCell3}>
                    Nationality
                  </TableCell>
                  <TableCell className={classes.tableCell4}>
                    Bangladeshi
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableCell3}>Religion</TableCell>
                  <TableCell className={classes.tableCell4}>
                    Christianity
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
