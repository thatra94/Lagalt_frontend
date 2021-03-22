import { useEffect } from 'react';
import { Container, makeStyles, Divider, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { projectFetchingByIdAction } from '../../store/actions/projectActions';
import { ProjectBannerSkills } from '../Shared/ProjectBanner/ProjectBannerSkills';

export const ProjectSidebar = ({ project }) => {
  const classes = useStyles();
  return (
    <Container>
      <h2>{project.name}</h2>
      <Divider />
      <h5>Prosject Leder: {project.userId} </h5>
      <p>Prosjekt Status: {project.status}</p>      
      <ProjectBannerSkills skills={project.skills}></ProjectBannerSkills>
      <br />
      <Container>
        <Button
          fullWidth="true"
          onClick={() => {
            alert('clicked');
          }}
          variant="contained"
          size="large"
          color="primary"
        >
          Apply
        </Button>
      </Container>
      <h5>Project Contributers</h5> 
        {project.users &&
          project.users.map((user) => (
            <Typography className={classes.root}>
              <p>               
                {user}
              </p>
            </Typography>
          ))}

    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));
