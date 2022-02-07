import React from 'react';
import DownButton from './DownButton';
import FeatureProject from './FeatureProject';
import SideBarOne from './SideBarOne';
import ProjectList from './ProjectList'
// import useFetch from '../../src/useFetch';

const Projects = () => {
   
    // const {data:projects, isPending, error} = useFetch(' http://localhost:8000/projects');
    
  return (
  
    <div id="Projects" className="Projects  mr-6 md:mr-16 ml-6 m mt-20 md:mt-52  lg:ml-40">

        <h1 className="hOne"> &#60; Projects /&gt; </h1>
        <SideBarOne height={'2611px'}/>
        <div className="lg:flex">
            <div className="msg  lg:ml-24  lg:w-1/2 mt-10">
                <p className="bodyOne  mt-5">
                <span className="text-iris font-medium ">&#62; </span>
                I am a Full Stack developer based in Toronto with a background in various industries such as Stakeholder Relations, Legal Consultancy and Business Development. I found software development merging all three areas of my interest and skill set involving creativity, logistics and analytics.
                </p>
            </div>
           
        <DownButton/>
        </div>
        <FeatureProject/>

       {/* {projects &&  <ProjectList 
         projects={projects}
         />} */}
            <ProjectList/>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    );
};

export default Projects;
