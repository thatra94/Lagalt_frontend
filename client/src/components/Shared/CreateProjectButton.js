import Button from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

export const CreateProjectButton = () => {
  let history = useHistory();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        history.push("/create-project");
      }}
    >
      Opprett et nytt prosjekt
    </Button>
  );
};
