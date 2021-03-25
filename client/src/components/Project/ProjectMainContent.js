
import {
  Container,
  makeStyles,
  Divider
} from '@material-ui/core';/*
import { useDispatch, useSelector } from 'react-redux';
import { projectFetchingByIdAction } from '../../store/actions/projectActions';*/
import { ProjectBannerTags } from '../Shared/ProjectBanner/ProjectBannerTags';
export const ProjectMainContent = ({ project }) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          <ProjectBannerTags project={project} />
          <h1>{project.name}</h1>
        </div>
        <img height="150" src={project.imageUrl}></img>
      </div>
      <Divider />
      <div>
        <p>{project.description}</p>
      </div>
      <br/>
      <div>
        <h5>Prosjekt linker</h5> 
        {project.links &&
          project.links.map((link) => (
              <a key={link.id} target="_blank" href={link.url}>
                {link.name}
              </a>
          ))}
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  industry: {
    marginRight: theme.spacing(3),
  },
  theme: {
    marginRight: theme.spacing(1),
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: theme.spacing(2),
  },
  root: {
    display: 'flex',
    width: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
}));
