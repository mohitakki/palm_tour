import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";


const styles = muiBaseTheme => ({
  card: {
    width: 310,
    // margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    // paddingTop: "90.25%"
    height:'100%',
    width:'100%'
  },
  content: {
    textAlign: "left",
    // padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});

function App({ classes, children, cardStyles}) {
  return (
    <div>
      <Card className={[classes.card,cardStyles]}>
        {children}
      </Card>
    </div>
  );
}

export const CardComponent = withStyles(styles)(App);
