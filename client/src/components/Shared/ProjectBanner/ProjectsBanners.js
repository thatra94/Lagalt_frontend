import { ProjectBannerItem } from './ProjectBannerItem';
import {  useSelector } from "react-redux";
import React from 'react';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

export const ProjectBanners = () => {  

    const { projects } = useSelector( state => state.projectsOverviewReducer )
   
    return (    
        <Paper > 
        <List style={{padding: 0}}>           
            {projects ? projects.map(project =>
             <ProjectBannerItem project={project} key={project.id}></ProjectBannerItem>
            ) : null}
        </List>
        </Paper>       
    )
}  