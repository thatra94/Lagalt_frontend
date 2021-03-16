import { ProjectBannerItem } from './ProjectBannerItem';
import { useState, useEffect } from 'react';
import { fetchProjects } from '../MainAPI';
import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import List from '@material-ui/core/List';

export const ProjectBanners = () => {
    const projects = fetchProjects();
    const industries = ["All", "Webutvikling", "Musikk","Spillutvikling","Film","Animasjon","Foto"]
    //const dispatch = useDispatch()
    //const { fetching, error } = useSelector( state => state.moviesReducer )
   // const [projects, setProjects] = useState({ hits: [] });


    /*  useEffect(async () => {
        const fetchData = async () => {
        const result = await fetchProjects();
        setProjects(result); 
      console.log(projects);
        }
        fetchData();
       
    }, [])*/

    return (
        <div>
            
        <ButtonGroup color="secondary" aria-label="outlined primary button group">
  {industries.map(industry =><Button>{industry}</Button> )}
</ButtonGroup>
        <List>
            {projects ? projects.map(project =>
                <ProjectBannerItem project={project} key={project.id}></ProjectBannerItem>
            ) : null}
        </List></div>
         /*  <ListItemText id={labelId} primary={project.name} secondary={project.status} />       
        <div>
            {console.log(projects)}
            {projects ? projects.map(project => <ProjectBannerItem key={project.id} project={project} />):null}
        </div>*/
    )
}