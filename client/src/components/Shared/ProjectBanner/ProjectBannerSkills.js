import { makeStyles, Container, Typography } from '@material-ui/core';
import { Skill } from "../Skill"
export function ProjectBannerSkills({ skills }) {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Typography variant="h6" >Skills: </Typography>
            
            {skills.map(skill => {
                return <Skill key={skill.id} skill={skill}/>
            }
            )}
        </Container>
    )

}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        width: '100%',
        alignItems: "center",
    }
}));
