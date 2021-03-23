import { useHistory } from "react-router-dom";
import {
  ListItem,
  ListItemAvatar,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import { MainBannerItemText } from "./ProjectBannerItemText";
import { ProjectBannerSkills } from "./ProjectBannerSkills";

export function ProjectBannerItem({ project }) {
  const Classes = useStyles();
  const history = useHistory();

  const onItemClick = () => {
    history.push(`/project/${project.id}`);
  };

  return (
    <ListItem
      className={Classes.listItem}
      key={project.id}
      button
      divider
      onClick={onItemClick}
      alignItems="flex-start"
    >
      <ListItemAvatar>
        <Avatar
          className={Classes.avatar}
          alt={`img for ${project.name}`}
          src={project.imageUrl}
        />
      </ListItemAvatar>
      <div>
        <MainBannerItemText project={project}></MainBannerItemText>
        {project.skills && (
          <ProjectBannerSkills skills={project.skills}></ProjectBannerSkills>
        )}
      </div>
    </ListItem>
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
