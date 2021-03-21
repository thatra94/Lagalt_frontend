import { useHistory } from 'react-router-dom';
import {
  ListItem,
  ListItemAvatar,
  makeStyles,
  Avatar,
  Container,
} from '@material-ui/core';
import { ProjectBannerItemHeader } from './ProjectBannerItemHeader';
import { ProjectBannerSkills } from './ProjectBannerSkills';

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
      <Container maxWidth="xl">
        <ProjectBannerItemHeader project={project}></ProjectBannerItemHeader>

        <ProjectBannerSkills skills={project.skills}></ProjectBannerSkills>
      </Container>
    </ListItem>
  );
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    width: '100%',
  },
  avatar: {
    minWidth: '4em',
    minHeight: '4em',
  },
}));
