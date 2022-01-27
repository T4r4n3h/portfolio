import React from 'react';
import Stack from './Stack'



const FeatureProject = () => {
  return (
  <div className="feature-project md:bg-eggplant mt-11 md:mt-72 pb-10 md:flex z-10 relative"
       style={{boxShadow:' -5px 5px #8A70FF'}}
    >
        <div className="msg md:ml-24  md:w-1/2 ">
                <h2 className="bodyTwo"> &#60; INNERTUNER /&gt;</h2>
                <p className="bodyOne  mt-5">
                    <span className="text-iris font-medium ">&#62; </span> 
                    this is InnerTuner Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem facilis explicabo? Velit, doloremque consequatur soluta eligendi iusto omnis animi! Sapiente praesentium maxime quam ipsa cupiditate quae aperiam laboriosam ratione.
                </p>

        <Stack/>

         <button className=" btn mt-8">
             Learn More &gt;

         </button>
         </div>


         <div className="pic bg-jasmine md:w-96 w-52  h-129 md:h-150  md:absolute rounded-2xl md:ml-[790px] ml-20 md:mt-[-201px] mt-8">
            Giff loop of the app will go here
         </div>


     






            

  </div>



















);
};

export default FeatureProject;
