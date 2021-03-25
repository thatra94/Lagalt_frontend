import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Paper, Button, Container } from "@material-ui/core";
import { ProfileProjectsTabPersonalProjects } from "./ProfileProjectsTabPersonalProjects";
import { ProfileProjectsTabPersonalAddButton } from "./ProfileProjectsTabPersonalAddButton";
import { ProjectBanners } from "../../Shared/ProjectBanner/ProjectsBanners";
import { ProfileHiddenToggle } from "../ProfileHiddenToggle";
import { useDispatch, useSelector } from "react-redux";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
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
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

export function ProfileProjectTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { error, projects } = useSelector((state) => state.userProjectsReducer);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Lagalt" {...a11yProps(0)} />
          <Tab label="Personal" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProjectBanners projects={projects} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileProjectsTabPersonalProjects></ProfileProjectsTabPersonalProjects>
        <ProfileProjectsTabPersonalAddButton></ProfileProjectsTabPersonalAddButton>
      </TabPanel>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    padding: 0,
    //backgroundColor: theme.palette.background.paper,
  },
}));
