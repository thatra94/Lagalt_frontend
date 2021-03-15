import {ProjectBannerItem} from './ProjectBannerItem';

export const ProjectBanners = ({ projects }) => {
    return (
        <div>
            { projects.map(project => <ProjectBannerItem key={project.id} project={project} />)}
        </div>
    )
}