import { Chip, makeStyles, Container } from "@material-ui/core";
import { Skill } from "../Shared/Skill";
import { spacing } from "@material-ui/system";
import DoneIcon from "@material-ui/icons/Done";

export function ProfileSkills({ skills }) {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <span className={classes.root}>
      <h5>Skills: </h5>

      {skills.map((skill, index) => {
        return (
          <Chip
            className={classes.skills}
            color="primary"
            clickable
            key={index}
            label={skill.name}
            //deleteIcon={<DoneIcon />}
            //onDelete={handleDelete}
          />
        );
      })}
    </span>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    alignItems: "center",
  },
  skills: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));
