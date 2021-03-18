import { useHistory } from 'react-router-dom'
import { ListItem, ListItemAvatar, makeStyles,Avatar } from '@material-ui/core';
import {MainBannerItemText} from './ProjectBannerItemText';
import { MainProjectSkills } from './ProjectBannerSkills';

export function ProjectBannerItem({ project }) {
    const Classes = useStyles();
    const history = useHistory()

    const onItemClick = () => {
        history.push(`/project/${project.id}`)
    }

    return (
        <ListItem
            className={Classes.listItem}
            key={project.id}
            button
            divider
            onClick={onItemClick}
            alignItems="flex-start">
            <ListItemAvatar >
                <Avatar
                    className={Classes.avatar}
                    alt={`img for ${project.name}`}
                    src={project.imageUrl}
                />
            </ListItemAvatar>    
            <div className="flexColumnContainer">
            <MainBannerItemText project={project}></MainBannerItemText>
            <MainProjectSkills skills={project.skills}></MainProjectSkills>
            </div>
        </ListItem>
    )    
}

const useStyles = makeStyles((theme) =>({
    listItem: {
        width: '100%',
        height: '8em',
    },
    avatar: {
        minWidth: '4em',
        minHeight: '4em',
    }
}));
