import React from 'react';
import DownButton from './About/DownButton';
import FeatureProject from './FeatureProject';
import SideBarOne from './SideBarOne';


const Projects = () => {
  return (
  
    <div className="Projects  mt-20 md:mt-52 md:ml-24">

        <h1 className="hOne"> &#60; Projects /> </h1>

        <SideBarOne/>
        <div className="md:flex">
            <div className="msg  md:ml-24  md:w-1/2">
                <p className="bodyOne  mt-5">
                <span className="text-iris font-medium ">&#62; </span>
                I am a Full Stack developer based in Toronto with a background in various industries such as Stakeholder Relations, Legal Consultancy and Business Development. I found software development merging all three areas of my interest and skill set involving creativity, logistics and analytics.
                </p>
            </div>
           
        <DownButton/>
        </div>
        <FeatureProject/>

       


    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    );
};

export default Projects;
