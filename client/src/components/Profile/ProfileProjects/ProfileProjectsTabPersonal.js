import React from "react";
import { useHistory } from "react-router-dom";
import { ListItem, makeStyles, Paper } from "@material-ui/core";
export function ProfileProjectsTabPersonal({ project }) {
  const Classes = useStyles();
  const history = useHistory();

  const onItemClick = () => {
    history.push(`/project/${project.id}`);
  };
  return (
    <Paper>
      <ListItem
        className={Classes.listItem}
        //key={project.id}
        button
        divider
        onClick={onItemClick}
        alignItems="flex-start"
      >
        <span className="flexColumnContainer">
          <h1>Title</h1>
          <h1>LINK</h1>
        </span>
      </ListItem>
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
