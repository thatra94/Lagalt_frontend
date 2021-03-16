import { ProjectBannerItem } from './ProjectBannerItem';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from '../ProjectsOverviewAPI';
import React from 'react';
import { Button, ButtonGroup,Container } from '@material-ui/core';
import List from '@material-ui/core/List';

export const ProjectBanners = () => {
  //  const projects = fetchProjects();
    const industries = ["All", "Webutvikling", "Musikk","Spillutvikling","Film","Animasjon","Foto"]

  //  const { fetching, error } = useSelector( state => state.projectsReducer )
    const { projects } = useSelector( state => state.projectsReducer )
   

    return (
        <Container>            
        <ButtonGroup color="secondary" aria-label="outlined primary button group">
            {industries.map(industry =><Button key={industry}>{industry}</Button> )}
        </ButtonGroup>
        <List>
           
            {projects ? projects.map(project =>
                <ProjectBannerItem project={project} key={project.id}></ProjectBannerItem>
            ) : null}
        </List>
        </Container>       
    )
}  
/*  <ListItemText id={labelId} primary={project.name} secondary={project.status} />       
        <div>
            {console.log(projects)}
            {projects ? projects.map(project => <ProjectBannerItem key={project.id} project={project} />):null}
        </div>*/
           //const dispatch = useDispatch()
   // const [projects, setProjects] = useState({ hits: [] });

    /*  useEffect(async () => {
        const fetchData = async () => {
        const result = await fetchProjects();
        setProjects(result); 
      console.log(projects);
        }
        fetchData();
       
    }, [])*/