import React from 'react';
import Stack from './Stack';

const ProjectItem = () => {
  return(

    <div className="ProjectItem md:w-[578px] md:h-40 bg-eggplant my-6 text-center"
         style={{boxShadow:' -5px 5px #8A70FF'}}
    >
        <h2 className="hTwo mt-6 text-jasmine leading-8 text-lg font-medium md:text-2xl md:leading-10">
        &#60; Project Name /&gt;
        </h2>




        <Stack/>



    </div>
















  );
};

export default ProjectItem;
