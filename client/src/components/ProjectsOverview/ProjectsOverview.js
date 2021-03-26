import { Navbar } from '../Shared/Navbar/Navbar';
import { ProjectBanners } from '../Shared/ProjectBanner/ProjectsBanners';
import {
  Container,
  Button,
  ButtonGroup,
  Paper,
  Grid,
  Input,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { projectsOverviewFetchAction } from '../../store/actions/projectsOverviewActions';
import { ProjectsOverviewSearch} from "./ProjectsOverviewSearch"
import { ProjectsOverviewIndustries} from "./ProjectsOverviewIndustries"

export const ProjectsOverview = () => {

  const history = useHistory();

  const dispatch = useDispatch();
  const { fetching, error, projects } = useSelector(
    (state) => state.projectsOverviewReducer
  );
  const classes = useStyles();
  
  useEffect(() => {
    dispatch(projectsOverviewFetchAction());
  }, []);

  return (
    <div>
      <Navbar history={history}>
       
      </Navbar>
      <Container maxWidth="xl">
        {error && <p>{error}</p>}
        {fetching && <p>Getting projects...</p>}
        <Container maxWidth="xl"></Container>

        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Paper className={classes.paper}>
            <ProjectsOverviewIndustries/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper}> <ProjectsOverviewSearch/> </Paper>
          </Grid>
          <Grid item xs={12} md={9}>
            <ProjectBanners projects={projects} />
          </Grid>
        </Grid>
      </Container>
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
    textAlign: 'left',
    padding: theme.spacing(2),
  },
}));
