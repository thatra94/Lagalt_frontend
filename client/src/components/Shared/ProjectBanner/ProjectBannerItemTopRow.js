import { Chip, makeStyles, Container, Typography } from '@material-ui/core';
import {ProjectBannerTags} from './ProjectBannerTags'
export const ProjectBannerItemTopRow = ({ project }) => {
    const classes = useStyles()
    return (
        <Container maxWidth="xl" classes={{ root: classes.root }}>
            
            <div className={classes.header}><h2>{project.name}</h2></div>
            <ProjectBannerTags project={project}/>
            <div><Typography variant="subtitle2">{project.status}</Typography></div>            
        </Container>)
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: '100%',
        padding: '0',
        margin:"0",
        flexWrap: "wrap"
    },
    header : {
        marginRight: theme.spacing(4)
    }
}));
