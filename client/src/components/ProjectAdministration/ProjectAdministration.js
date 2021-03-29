import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ProjectSettings } from "../ProjectSettings/ProjectSettings";
import { ProjectApplications } from "../ProjectApplications/ProjectApplications";
import { useDispatch, useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#dae0e6",
    display: "flex",
    height: "100vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export function ProjectAdministration() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { project } = useSelector((state) => state.projectReducer);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Prosjekt info" {...a11yProps(0)} />
        <Tab label="Medlemforespørsler" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProjectSettings project={project}></ProjectSettings>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectApplications />
      </TabPanel>
    </div>
  );
}
