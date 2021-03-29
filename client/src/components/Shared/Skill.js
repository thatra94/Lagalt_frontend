import { Chip, makeStyles } from "@material-ui/core";

export function Skill({ skill }) {
  const classes = useStyles();
  return (
    <div className={classes.tagsContainer}>
      <Chip
        className={classes.skills}
        variant="outlined"
        color="primary"
        key={skill.name}
        label={skill.name}
        size="small"
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  skills: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));
