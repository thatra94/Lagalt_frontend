import { Chip, makeStyles, Container } from '@material-ui/core';
import {ProjectBannerTags} from './ProjectBannerTags'
export const ProjectBannerItemHeader = ({ project }) => {
    const classes = useStyles()
    return (
        <Container classes={{ root: classes.root }}>
            <div className={classes.header}><h2>{project.name}</h2></div>
            <ProjectBannerTags project={project}/>
            <div><p>{project.status}</p></div>
            
        </Container>)
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: '100%',
    },
    header : {
        display : "flex",
        flex: 1,
    }
}));
