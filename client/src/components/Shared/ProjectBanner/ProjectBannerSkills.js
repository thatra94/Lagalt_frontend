import { makeStyles, Container } from "@material-ui/core";
import { Skill } from "../Skill";
export function ProjectBannerSkills({ skills }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <span>Skills: </span>

      {skills.map((skill, index) => {
        return <Skill key={index} skill={skill} />;
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
