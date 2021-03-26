import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

export const CreateProjectButton = () => {
  let history = useHistory();

  return (
    <Typography
      variant="button"
      color="inherit"
      onClick={() => {
        history.push("/create-project");
      }}
    >
      LagAlt
    </Typography>
  );
};
