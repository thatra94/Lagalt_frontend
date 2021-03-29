import { Chip, makeStyles, Container } from "@material-ui/core";

export const ProjectBannerTags = ({ project }) => {
  const classes = useStyles();
  return (
    <>
      {project !== null && (
        <div className={classes.tagsContainer}>
          <Chip
            className={classes.industry}
            color="secondary"
            key={project.industryName}
            label={project.industryName}
            size="small"
          />
          {project.themes &&
            project.themes.map((theme) => {
              return (
                <Chip
                  className={classes.theme}
                  key={theme.name}
                  label={theme.name}
                  size="small"
                />
              );
            })}
        </div>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  tagsContainer: {
    display: "flex",
    alignItems: "center",
    flex: 7,
    flexWrap: "wrap",
  },
  industry: {
    marginRight: theme.spacing(3),
  },
  theme: {
    marginRight: theme.spacing(1),
  },
}));
