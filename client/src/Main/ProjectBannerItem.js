import {useHistory} from 'react-router-dom'

export function ProjectBannerItem({ project }) {

    const history = useHistory()

    const onItemClick = () => {
        history.push(`/projects/${project.id}`)
    }

    return (
        <div onClick={onItemClick}>
            <h4>{project.title}</h4>
        </div>
    )
}