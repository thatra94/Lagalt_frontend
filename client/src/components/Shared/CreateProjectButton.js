import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

export const CreateProjectButton = () => {
  let history = useHistory();

  return (
    <Typography
      variant="contained"
      color="primary"
      onClick={() => {
        history.push("/create-project");
      }}
    >
      Opprett et nytt prosjekt
    </Typography>
  );
};
