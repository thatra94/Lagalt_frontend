import { Chip, makeStyles, Container } from '@material-ui/core';

export const ProjectBannerTags = ({ project }) => {
    const classes = useStyles()
    return (

            <div className={classes.tagsContainer}>
                <Chip className={classes.industry} color="secondary" key={project.industryName} label={project.industryName} />
                {project.themes.map((theme) => {
                    return <Chip className={classes.theme}   key={theme.name} label={theme.name} />
                })}
                                
            </div>
    );            
}

const useStyles = makeStyles((theme) => ({
    tagsContainer: {
        display: "flex",
        alignItems: "center",
        flex: 7,
    },
    industry: {
        marginRight: theme.spacing(3),
    },
    theme: {
        marginRight: theme.spacing(1),
    }
}));