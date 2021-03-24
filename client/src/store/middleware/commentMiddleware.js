import {
  ACTION_COMMENT_FETCH_BY_ID,
  ACTION_COMMENT_ADD,
  commentErrorAction,
  commentSetByIdAction,
  commentAddAction,
  commentAddSuccessAction,
} from '../actions/commentActions';
import { fetchCommentsByProjectId, postComment} from "../../components/Project/ProjectAPI"

export const commentMiddleware = ({dispatch }) => (next) => (action) => {
  next(action);


  if (action.type === ACTION_COMMENT_FETCH_BY_ID) {

   
  
    fetchCommentsByProjectId(action.payload)
      .then((comment) => {
        dispatch(commentSetByIdAction(comment));
      })
      .catch((error) => {
        dispatch(commentErrorAction(error.message));
      });
  }

  if (action.type === ACTION_COMMENT_ADD) {
    postComment( action.payload )
        .then(comment => {
            dispatch(commentAddSuccessAction(comment));
        })
        .catch(error => {
            dispatch( commentErrorAction(error) )
        })
    }
};
