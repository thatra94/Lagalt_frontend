import {useSelector} from 'react-redux'
import {ProjectUserCommentItem} from './ProjectUserCommentItem'
export const ProjectUserCommentsList = () => {
    const { comment: comments } = useSelector((state) => state.commentReducer);
    const commentOrder = [...comments].reverse();
    return (
        <div>
            {commentOrder && commentOrder.map((comment) => {
                return (<ProjectUserCommentItem comment={comment}/>)
            })}
        </div>
    )
}