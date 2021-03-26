import { Navbar } from '../Shared/Navbar/Navbar';
import { useEffect } from 'react';
import { ProjectSidebar } from './ProjectSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { projectFetchingByIdAction } from '../../store/actions/projectActions';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container } from '@material-ui/core';
import { ProjectMainContent } from './ProjectMainContent';
import { ProjectComments } from './ProjectComments';

import { commentFetchingByIdAction } from '../../store/actions/commentActions';


export const Project = (props) => {
  const dispatch = useDispatch();
  const { fetching, error } = useSelector(
    (state) => state.projectReducer
  );
  useEffect(() => {
    dispatch(projectFetchingByIdAction(props.match.params.id));
  }, [dispatch]);

  const classes = useStyles();
  const { project } = useSelector((state) => state.projectReducer);

  return (
    <div>
      {project && console.log(project.id)}
      <Navbar></Navbar>
      {error && <p>{error}</p>}
      {project && (        
        <Container className={classes.pageContentContainer} maxWidth="xl">
          <Grid container justify="space-between" spacing={6}>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paper}>
                <ProjectMainContent project={project} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <ProjectSidebar project={project} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
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
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));
