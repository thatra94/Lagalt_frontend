import {useSelector} from 'react-redux'
import {ProjectUserCommentItem} from './ProjectUserCommentItem'
export const ProjectUserCommentsList = () => {
    const { comment: comments } = useSelector((state) => state.commentReducer);
    console.log(comments)
    return (
        <div>
            {comments && comments.map((comment) => {
                return (<ProjectUserCommentItem comment={comment}/>)
            })}
        </div>
    )
}