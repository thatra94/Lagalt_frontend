import { ListItemAvatar, ListItemText,makeStyles,Avatar, Container } from '@material-ui/core';


export function MainProjectSkills({ skills }) {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
        {skills.map(skill => <p> {skill.name}</p>)}
        
        </Container>
        )
    
}

const useStyles = makeStyles((theme) =>({
    root: {
        display: "flex",
        width: '100%',
    }
}));