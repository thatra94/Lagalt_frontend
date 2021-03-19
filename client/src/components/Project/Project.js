import { Navbar } from "../Shared/Navbar/Navbar";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { ProjectAbout } from "./ProjectAbout"
import { useDispatch, useSelector } from "react-redux";
import { projectFetchingByIdAction } from "../../store/actions/projectActions"
import { makeStyles } from '@material-ui/core/styles';
import {Paper ,Grid, Container} from '@material-ui/core';
import { ProjectMainContent } from "./ProjectMainContent"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export const Project = (props) => {

  const dispatch = useDispatch()
  const { fetching, error } = useSelector(state => state.projectsOverviewReducer)
  useEffect(() => {
    dispatch(projectFetchingByIdAction(props.match.params.id))
  }, [dispatch])

  const classes = useStyles();
  const { project } = useSelector(state => state.projectReducer)

  return (
    <div>
      <Navbar></Navbar>
      {error && <p>{error}</p>}
      {project && (
        
      <Container maxWidth='xl'>
        <Grid container justify='space-between' spacing={3}>
          <Grid item xs={7} >
            <Paper className={classes.paper}><ProjectMainContent project={project} /></Paper>
          </Grid>
          <Grid item xs={4} >
            <Paper className={classes.paper}><ProjectAbout project={project} /></Paper>
          </Grid>
          <Grid item xs={7} >
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>         
        </Grid>
      </Container>
      )}
    </div>
  );
}
