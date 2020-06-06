import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(45deg, #868f96 30%, #596164 90%)"
  },
  icon: {
    margin: "0 auto",
    color: "white"
  },
  heroContent: {
    background: "linear-gradient(45deg, #659999 30%, #f4791f 90%)",
    border: 0,
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "60px",
    marginTop: theme.spacing(4)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "0 auto"
  },
  footer: {
    background: "linear-gradient(45deg, #868f96 30%, #596164 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "20px"
  },
  textCenter: {
    textAlign: "center"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  portfolioDescription: {
    background: "linear-gradient(45deg, #868f96 30%, #596164 90%)",
    color: "white"
  }
}));

export default useStyles;
