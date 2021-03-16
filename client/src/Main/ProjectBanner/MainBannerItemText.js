import { ListItemAvatar, ListItemText,makeStyles,Avatar, Container } from '@material-ui/core';
import { MainProjectSkills } from './MainProjectSkills';

export const MainBannerItemText = ({project}) => {
    const classes = useStyles()
    return (
        <Container classes={{root: classes.root}}>
        <div style={{marginRight: "50px"}}><h3>{project.name}</h3></div>
        <div style={{marginRight: "50px"}}><p>industry: {project.industryId}</p></div>
        <div style={{marginRight: "50px"}}><h5>status: {project.status}</h5></div>
        </Container>)
    }
    const useStyles = makeStyles((theme) =>({
        root: {
            display: "flex",
            width: '100%',
        }
    }));
    //(<ListItemText primary={project.name} />
