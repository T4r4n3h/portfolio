import React, {useState, useEffect} from 'react';
import ProjectItem from './ProjectItem';
import useFetch from '../../src/useFetch';






const ProjectList = () => {
  const {data:projects, isPending, error} = useFetch(' http://localhost:8000/projects');

   





  return (
  
    <div className="projectList md:grid grid-cols-2 gap-10 mt-20 lg:mt-48">
      {projects &&  projects.map((project) => (
        <ProjectItem 
        key={project.id} title={project.title} description={project.description} stack={project.stack}
        />
      ))}
       


        
        
    </div>
    

  );
};

export default ProjectList;
