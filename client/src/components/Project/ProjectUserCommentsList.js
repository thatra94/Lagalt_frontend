import {useSelector} from 'react-redux'
import {ProjectUserCommentItem} from './ProjectUserCommentItem'
export const ProjectUserCommentsList = () => {
    const { comment } = useSelector((state) => state.commentReducer);
    console.log(comment)
    return (
        <div>
            {comment && comment.map((c) => {
                return (<ProjectUserCommentItem comment={c}/>)
            })}
        </div>
    )
}