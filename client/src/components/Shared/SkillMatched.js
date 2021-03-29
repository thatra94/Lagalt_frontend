import { Chip, makeStyles, Container } from "@material-ui/core";

export function SkillMatched({ skill }) {
  const classes = useStyles();
  return (
    <Chip
      className={classes.skills}
      color="primary"
      key={skill.name}
      label={skill.name}
      size="small"
    />
  );
}

const useStyles = makeStyles((theme) => ({
  skills: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));
