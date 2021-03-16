import { ListItemAvatar,Chip , ListItemText,makeStyles,Avatar, Container } from '@material-ui/core';

export function MainProjectSkills({ skills }) {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
        {skills.map(skill => {
            return skill.name == "skills2" ? <Chip color="secondary" key={skill.name} label={skill.name}/> : <Chip key={skill.name} label={skill.name}/>
         }
        )}
        
        </Container>
        )    
}

const useStyles = makeStyles((theme) =>({
    root: {
        display: "flex",
        width: '100%',
    }
}));