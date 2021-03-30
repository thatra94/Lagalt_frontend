import {
  Avatar,
  ListItem,
  ListItemAvatar,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ProjectBannerItemTopRow } from "./ProjectBannerItemTopRow";
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
      <div className={Classes.bannerMainContent}>
        <ProjectBannerItemTopRow project={project}></ProjectBannerItemTopRow>
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
  bannerMainContent: {
    marginLeft: theme.spacing(2),
    width: "100%",
  },
  avatar: {
    minWidth: "4em",
    minHeight: "4em",
  },
}));
