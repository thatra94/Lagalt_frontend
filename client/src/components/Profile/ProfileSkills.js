import { Chip, makeStyles, Container } from "@material-ui/core";
import { Skill } from "../Shared/Skill";

export function ProfileSkills({ skills }) {
  const classes = useStyles();
  return (
    <span className={classes.root}>
      <h5>Skills: </h5>

      {skills.map((skill) => {
        return <Skill skill={skill} className={classes.skill} />;
      })}
    </span>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    alignItems: "center",
  },
  skill: {
    marginTop: theme.spacing(2),
  },
}));
