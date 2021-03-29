import {
  Container,
  Grid,
  Button,
  TextField,
  Avatar,
  Paper,
  Box,
  List, 
  ListItem,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { mdiCloseThick } from '@mdi/js';
import Icon from '@mdi/react';
import { projectUpdateAction } from '../../store/actions/projectActions';
import { applicationsFetchingByIdAction } from '../../store/actions/applicationsActions';

export const ProjectApplications = (props) => {
  const classes = useStyles();
  const { project } = useSelector((state) => state.projectReducer);

  useEffect(() => {
    dispatch(applicationsFetchingByIdAction(project.id));
  }, []);

  const dispatch = useDispatch();
  const { fetching, error, projectApplications } = useSelector(
    (state) => state.applicationsReducer
  );

  const handleAccept = () => {

  }

  const handleDecline = () => {
      
  }

  return (
    <Grid container className={classes.pageContentContainer}>
      <Paper className={classes.paper} style={{ marginTop: '5rem' }}>
        <Grid container style={{ width: '800px' }}>
          <h2>Prosjekt Søknader</h2>

          <List style={{ padding: 0, width: '100%' }}>
            {projectApplications
              ? projectApplications.map((application) => (
                  <ListItem  divider key={application.userId}>
                              <ListItemText
                              primary={application.userName}
                              secondary="outlined jada jeg vil være med er du  greiined jada jeg vil være med er du  greiined jada jeg vil være med er du  greiined jada jeg vil være med er du  grei. "

                              />

                    <div>
                    <Button onClick={() => handleDecline()} variant="outlined" color="secondary">Avslå</Button>
                    <Button onClick={() => handleAccept()} variant="contained" color="primary">Aksepter</Button></div>
                  </ListItem>
                ))
              : null}  
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
    width: '1.5em',
  },
  // changes: {
  //   marginTop: theme.spacing(3),
  // },
  avatar: {
    minWidth: '6em',
    minHeight: '6em',
  },

  paper: {
    padding: theme.spacing(5),
    margin: 'auto',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
