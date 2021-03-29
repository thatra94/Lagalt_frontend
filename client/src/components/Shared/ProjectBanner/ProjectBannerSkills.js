import { makeStyles, Container, Typography } from '@material-ui/core';
import { Skill } from '../Skill';
import { SkillMatched } from '../SkillMatched';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
export function ProjectBannerSkills({ skills }) {
  const classes = useStyles();

  //  const [matchedSkills, setMatchedSkills] = useState(0);
  const { user } = useSelector((state) => state.userReducer);

  const renderSkills = () => {
    let matches = 0;
    skills.forEach((skill) => {
      if (skillMatch(skill)) {
        matches++;
      } else {
        return;
      }
    });
    const skillsChips = skills.map((skill) => {
      if (skillMatch(skill)) {
        return <SkillMatched key={skill.id} skill={skill} />;
      } else {
        return <Skill key={skill.id} skill={skill} />;
      }
    });
    return (
      <>
        {skillsChips}
        {<Typography variant="subtitle1" className={classes.matchesText}>{matches} Skills Matched</Typography>}
      </>
    );
  };

  const skillMatch = (skill) => {
    const matched = user.skills.find((e) => {
      return e.name == skill.name;
    });
    return matched;
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h6">Skills: </Typography>
      {user && renderSkills()}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  matchesText: {
      marginLeft: theme.spacing(2)
  }
}));
