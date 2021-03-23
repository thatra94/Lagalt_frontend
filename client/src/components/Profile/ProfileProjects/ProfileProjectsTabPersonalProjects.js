import React from "react";
import { useHistory } from "react-router-dom";
import { List, makeStyles, Paper, ListItem } from "@material-ui/core";
import { useSelector } from "react-redux";

export function ProfileProjectsTabPersonalProjects() {
  const Classes = useStyles();
  const history = useHistory();
  const { personalProjects } = useSelector(
    (state) => state.userProjectsReducer
  );

  // const onItemClick = () => {
  //   history.push(`/project/${project.id}`);
  // };
  return (
    <Paper>
      <List style={{ padding: 0 }}>
        {personalProjects &&
          personalProjects.map((project, index) => (
            <ListItem
              className={Classes.listItem}
              key={index}
              button
              divider
              alignItems="flex-start"
            >
              <span>
                <h1>{project.title}</h1>
                <h1>{project.description}</h1>
              </span>
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
  avatar: {
    minWidth: "4em",
    minHeight: "4em",
  },
}));
