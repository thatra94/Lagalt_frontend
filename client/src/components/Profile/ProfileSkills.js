import { Chip, makeStyles, Container } from "@material-ui/core";

export function ProfileSkills({ skills }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <h5> Skills Set </h5>
      {skills &&
        skills.map((skill) => {
          return (
            <Chip
              className={classes.skills}
              variant="outlined"
              color="primary"
              key={skill.name}
              label={skill.name}
            />
          );
        })}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  skills: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));
