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
export const ProjectsOverview = () => {

  //panel

  const history = useHistory();
  const industries = [
    'All',
    'Webutvikling',
    'Musikk',
    'Spillutvikling',
    'Film',
    'Animasjon',
    'Foto',
  ];
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
              <ButtonGroup
                color="secondary"
                aria-label="outlined primary button group"
              >
                {industries.map((industry) => (
                  <Button key={industry}>{industry}</Button>
                ))}
              </ButtonGroup>
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
