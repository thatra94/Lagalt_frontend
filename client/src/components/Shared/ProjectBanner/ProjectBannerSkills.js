import { makeStyles, Container } from "@material-ui/core";
import { Skill } from "../Skill";
export function ProjectBannerSkills({ skills }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <h5>Skills: </h5>

      {skills.map((skill) => {
        return <Skill skill={skill} />;
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
}));
