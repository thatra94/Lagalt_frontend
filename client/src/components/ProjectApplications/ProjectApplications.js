import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  applicationsFetchingByIdAction,
  applicationsUpdateAction,
} from "../../store/actions/applicationsActions";

export const ProjectApplications = (props) => {
  const classes = useStyles();
  const { project } = useSelector((state) => state.projectReducer);
  let history = useHistory();

  const dispatch = useDispatch();
  const { fetching, error, projectApplications } = useSelector(
    (state) => state.applicationsReducer
  );

  useEffect(() => {
    dispatch(applicationsFetchingByIdAction(project.id));
  }, []);

  const handleAccept = (app) => {
    dispatch(
      applicationsUpdateAction({
        projectId: project.id,
        userId: app.userId,
        status: "approved",
      })
    );
  };

  const handleDecline = (app) => {
    dispatch(
      applicationsUpdateAction({
        projectId: project.id,
        userId: app.userId,
        status: "declined",
      })
    );
  };

  const userOnclick = (id) => (event) => {
    event.preventDefault();
    history.push(`/users/${id}`);
  };

  return (
    <Grid container className={classes.pageContentContainer}>
      <Paper className={classes.paper} style={{ marginTop: "5rem" }}>
        <Grid container style={{ width: "800px" }}>
          <h2>Prosjekt Søknader</h2>

          <List style={{ padding: 0, width: "100%" }}>
            {projectApplications &&
              projectApplications.map((application) => (
                <ListItem button divider key={application.userId}>
                  <ListItemText
                    onClick={userOnclick(application.userId)}
                    primary={application.userName}
                    secondary={application.motivationText}
                  />

                  <div>
                    <Button
                      onClick={() => handleDecline(application)}
                      variant="outlined"
                      color="secondary"
                    >
                      Avslå
                    </Button>
                    <Button
                      onClick={() => handleAccept(application)}
                      variant="contained"
                      color="primary"
                    >
                      Aksepter
                    </Button>
                  </div>
                </ListItem>
              ))}
          </List>
        </Grid>
      </Paper>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  pageContentContainer: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },

  deleteIcon: {
    paddingTop: theme.spacing(3),
    width: "1.5em",
  },
  // changes: {
  //   marginTop: theme.spacing(3),
  // },
  avatar: {
    minWidth: "6em",
    minHeight: "6em",
  },

  paper: {
    padding: theme.spacing(5),
    margin: "auto",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
