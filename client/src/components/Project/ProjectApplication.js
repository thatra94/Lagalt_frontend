import { useState, React } from 'react';
import { Container, makeStyles, Button } from '@material-ui/core';
import { ProjectApplicationDialog } from './ProjectApplicationDialog';
import { applicationsAddAction } from '../../store/actions/applicationsActions';
import { useDispatch, useSelector } from 'react-redux';

export const ProjectApplication = () => {
  const { project } = useSelector((state) => state.projectReducer);
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (dialogText) => {
    dispatch(
      applicationsAddAction({
        projectId: project.id,
        userId: user.id,
        motivationText: dialogText,
        status: 'pending',
      })
    );
    setOpen(false);
  };

  return (
    <>
      {user.id ? ((user.id && project.id && (
        <Container>
          <Button
            fullWidth
            onClick={handleClickOpen}
            variant="contained"
            size="large"
            color="primary"
          >
            Søk Her
          </Button>
          <ProjectApplicationDialog
            open={open}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
        </Container>
      ))) : <h6>Logg inn for å søke på prosjektet</h6>}
    </>
  );
};
