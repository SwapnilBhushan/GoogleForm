import { Tab } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    fontSize: 12,
    color: "#5f6368",
    textTransform: "capitalize",
    fontWwight: "500",
    fontFamily: "Roboto, sans-serif",
  },
  tabs: {
    height: 10,
  },
});
const TabSection = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Tabs
        centered
        textColor="primary"
        indicatorColor="primary"
        className={classes.tabs}
      >
        <Tab label="Questions" className={classes.tab} />
        <Tab label="Response" className={classes.tab} />

        <Tab label="Setting" className={classes.tab} />
      </Tabs>
    </Paper>
  );
};

export default TabSection;
