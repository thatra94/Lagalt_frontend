import { Container, makeStyles, Divider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ProjectNewComment } from './ProjectNewComment';
import { ProjectUserCommentsList } from './ProjectUserCommentsList';
import { commentFetchingByIdAction } from '../../store/actions/commentActions';

export const ProjectComments = ({ project }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentFetchingByIdAction(project.id));
  }, [dispatch]);

  const { fetching, error } = useSelector((state) => state.commentReducer);
  const userReducer = useSelector((state) => state.userReducer);
  const classes = useStyles();
  return (
    <Container>
      {userReducer.user.id ? (
        <div>
          <h5>Skriv en kommentar</h5>
          <ProjectNewComment project={project} userId={userReducer.user.id} />
          <Divider className={classes.divider} />
        </div>
      ) : (
        <h6>Logg inn for å skrive en kommentar</h6>
      )}

      {error && <p>{error}</p>}
      {fetching && <p>Getting comments...</p>}
      <div>
        <h3>Prosjekt Kommentarer </h3>
        <ProjectUserCommentsList />
      </div>
    </Container>
  );
};
/*

*/
const useStyles = makeStyles((theme) => ({
  industry: {
    marginRight: theme.spacing(3),
  },
  theme: {
    marginRight: theme.spacing(1),
  },
  divider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: theme.spacing(2),
  },
  root: {
    display: 'flex',
    width: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
}));
