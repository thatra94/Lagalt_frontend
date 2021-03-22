import { Navbar } from '../Shared/Navbar/Navbar';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { ProjectSidebar } from './ProjectSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { projectFetchingByIdAction } from '../../store/actions/projectActions';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container } from '@material-ui/core';
import { ProjectMainContent } from './ProjectMainContent';
import { ProjectComments } from './ProjectComments';


export const Project = (props) => {
  const dispatch = useDispatch();
  const { fetching, error } = useSelector(
    (state) => state.projectsOverviewReducer
  );
  useEffect(() => {
    dispatch(projectFetchingByIdAction(props.match.params.id));
  }, [dispatch]);

  const classes = useStyles();
  const { project } = useSelector((state) => state.projectReducer);

  return (
    <div>
      <Navbar></Navbar>
      {error && <p>{error}</p>}
      {project && (
        <Container className={classes.pageContentContainer} maxWidth="xl">
          <Grid container justify="space-between" spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paper}>
                <ProjectMainContent project={project} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper className={classes.paper}>
                <ProjectSidebar project={project} />
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}><ProjectComments project={project}></ProjectComments></Paper>
            </Grid>           
          </Grid>
        </Container>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  pageContentContainer: {
    textAlign: 'start',
    maxWidth: 'xl',
  },
  paper: {
    padding: theme.spacing(2),
  },
}));
