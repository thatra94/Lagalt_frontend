import { Chip, makeStyles, Container } from '@material-ui/core';

export const MainBannerItemText = ({ project }) => {
    const classes = useStyles()
    return (
        <Container classes={{ root: classes.root }}>
            <div style={{ marginRight: "50px" }}><h3>{project.name}</h3></div>

            <div style={{ display: "flex", alignItems: "center" }}>
                <Chip className={classes.industry} key={project.industryName} label={project.industryName} />
                {project.themes.map((theme) => {
                    return <Chip className={classes.theme} color="secondary" key={theme.name} label={theme.name} />
                })}
                <div style={{ marginLeft: "50px" }}><p>Status: {project.status}</p></div>
            </div>
        </Container>)
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: '100%',
    },
    industry: {
        marginRight: theme.spacing(3),
    },
    theme: {
        marginRight: theme.spacing(1),
    }
}));
    //(<ListItemText primary={project.name} />
