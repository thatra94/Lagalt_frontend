import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectFetchingByIdAction } from "../../store/actions/projectActions";
import { ProjectComments } from "./ProjectComments";
import { ProjectMainContent } from "./ProjectMainContent";
import { ProjectSidebar } from "./ProjectSidebar";

export const Project = (props) => {
  const dispatch = useDispatch();
  const { fetching, error } = useSelector((state) => state.projectReducer);

  const { user } = useSelector((state) => state.userReducer);
  const { keycloak } = useKeycloak();

  console.log(keycloak.token);
  useEffect(() => {
    if (keycloak.token === undefined) {
      dispatch(
        projectFetchingByIdAction({
          projectId: props.match.params.id,
          Id: user.id,
        })
      );
    } else {
      dispatch(
        projectFetchingByIdAction({
          projectId: props.match.params.id,
          Id: user.id,
          token: keycloak.token,
        })
      );
    }
  }, []);

  const classes = useStyles();
  const { project } = useSelector((state) => state.projectReducer);

  return (
    <div>
      {project && console.log(project.id)}
      {error && <p>{error}</p>}
      {project && (
        <Container className={classes.pageContentContainer} maxWidth="xl">
          <Grid container spacing={6}>
            <Grid item container xs={12} md={8} spacing={2}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <ProjectMainContent project={project} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <ProjectComments project={project}></ProjectComments>
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <ProjectSidebar project={project} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      )}
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
    padding: theme.spacing(2),
  },
}));
