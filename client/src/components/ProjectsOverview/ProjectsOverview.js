import { Navbar } from "../Shared/Navbar/Navbar";
import { ProjectBanners } from "../Shared/ProjectBanner/ProjectsBanners";
import {
  Container,
  Button,
  ButtonGroup,
  Paper,
  Grid,
  Input,
  makeStyles,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { projectsOverviewFetchAction } from "../../store/actions/projectsOverviewActions";
import { ProjectsOverviewSearch } from "./ProjectsOverviewSearch";
import { ProjectsOverviewIndustries } from "./ProjectsOverviewIndustries";
import { CreateProjectButton } from "../Shared/CreateProjectButton";
export const ProjectsOverview = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { fetching, error, projects } = useSelector(
    (state) => state.projectsOverviewReducer
  );
  const classes = useStyles();

  const handleCreateProject = (event) => {
    event.preventDefault();
    history.push("/create-project");
  };
  useEffect(() => {
    dispatch(projectsOverviewFetchAction());
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        {error && <p>{error}</p>}
        <Grid container justify="center" alignContent="center" spacing={0}>
          <Grid item container xs={8} md={8} spacing={2}>
            <Grid item xs={11} md={11}>
              <Paper className={classes.paper}>
                <ProjectsOverviewIndustries />
              </Paper>
            </Grid>
            <Grid item xs={11} md={11} styles={{ marginTop: "1rem" }}>
              <ProjectBanners projects={projects} />
            </Grid>
          </Grid>

          <Grid item container direction="column" xs={4} md={4}>
            <Grid item xs={11}>
              <Paper className={classes.paper}>
                <ProjectsOverviewSearch />
              </Paper>
              <Paper className={classes.paper}>
                <CreateProjectButton></CreateProjectButton>
                {/* <Button
                  variant="contained"
                  onClick={(event) => handleCreateProject(event)}
                >
                  Opprett et nytt prosjekt
                </Button> */}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {fetching && <p>Getting projects...</p>}
      </Container>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  pageContentContainer: {
    textAlign: "start",
    maxWidth: "xl",
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
  paper: {
    textAlign: "left",
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));
