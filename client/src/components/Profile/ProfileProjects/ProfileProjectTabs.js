import { Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import PropTypes from "prop-types";
import React from "react";
import { useLocation } from "react-router-dom";
import { ProjectBanners } from "../../Shared/ProjectBanner/ProjectsBanners";
import { ProfileProjectsTabPersonalAddButton } from "./ProfileProjectsTabPersonalAddButton";
import { ProfileProjectsTabPersonalProjects } from "./ProfileProjectsTabPersonalProjects";

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

export function ProfileProjectTabs(projects) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const location = useLocation();

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
          <Tab label="Personlige" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {projects.lagaltProjects && (
          <ProjectBanners projects={projects.lagaltProjects} />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {projects.personalProjects && (
          <ProfileProjectsTabPersonalProjects
            personalProjects={projects.personalProjects}
          ></ProfileProjectsTabPersonalProjects>
        )}
        {location.pathname === "/profile" && (
          <ProfileProjectsTabPersonalAddButton></ProfileProjectsTabPersonalAddButton>
        )}
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
