import { useEffect } from 'react';
import {
  Container,
  makeStyles,
  Chip,
  Divider,
  Link,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { projectFetchingByIdAction } from '../../store/actions/projectActions';
import { ProjectBannerTags } from '../Shared/ProjectBanner/ProjectBannerTags';
import { ProjectNewComment} from './ProjectNewComment';
import { ProjectUserComments} from './ProjectUserComments';

export const ProjectComments = ({ project }) => {
  const classes = useStyles();
  return (
    <Container>
      <h5>Skriv en kommentar </h5>
         
      <ProjectNewComment/>  <div className={classes.headerContainer}>
        <h3>Prosjekt Kommentarer </h3>
      </div><Divider />
      <ProjectUserComments/>
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
