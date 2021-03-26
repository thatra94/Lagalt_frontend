import { useHistory } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import { useSelector } from "react-redux";

export const ProjectSettingsButton = ({ project }) => {
  const { user } = useSelector((state) => state.userReducer);

  let history = useHistory();
  const onButtonClick = () => {
    history.push(`${project.id}/settings`);
  };

  return (
    <>
      {user.id && project.id && (
        <Container>
          <Button
            fullWidth
            onClick={onButtonClick}
            variant="contained"
            size="large"
            color="primary"
          >
            Prosjekt innstillinger
          </Button>
        </Container>
      )}
    </>
  );
};
