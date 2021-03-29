import { Grid, List, ListItem, makeStyles, Paper } from "@material-ui/core";
import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useHistory } from "react-router-dom";

export function ProfileProjectsTabPersonalProjects(personalProjects) {
  const Classes = useStyles();
  const history = useHistory();
  // const { personalProjects } = useSelector(
  //   (state) => state.userProjectsReducer
  // );

  console.log(personalProjects);
  return (
    <Paper>
      <List style={{ padding: 0 }}>
        {personalProjects &&
          personalProjects.personalProjects.map((project, index) => (
            <ListItem className={Classes.listItem} key={index} button divider>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item xs={3}>
                  <h3>{project.name}</h3>
                </Grid>
                <Grid item xs={8} className={Classes.link}>
                  <a href={"//" + project.link} target="_blank">
                    {project.link}
                    <Icon path={mdiOpenInNew} size={1} color="blue"></Icon>
                  </a>
                </Grid>
              </Grid>
            </ListItem>
          ))}
      </List>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    width: "100%",
  },
  link: {
    fontSize: "1em",
    fontWeight: 500,
  },
  avatar: {
    minWidth: "4em",
    minHeight: "4em",
  },
}));
