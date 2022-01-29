import React from "react";
import Stack from "./Stack";
import Background from '../../src/assets/innertuner.png'
import FeatureMbl from "./FeatureMbl";
const FeatureProject = () => {
  return (
      <>
    <div
      className="hidden lg:flex
      DskFeature container bg-eggplant  mt-11 mt-72 flex  w-full h-[524px] py-10 pl-28 relative"
      style={{ boxShadow: " -5px 5px #8A70FF" }}
      >
      <div className="msg  w-3/5 h-[444px] ">
        <h2 className="bodyTwo"> &#60; INNERTUNER /&gt;</h2>
        <p className="bodyOne  mt-5">
          <span className="text-iris font-medium ">&#62; </span>
          this is InnerTuner Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Blanditiis exercitationem facilis explicabo? Velit, doloremque
          consequatur soluta eligendi iusto omnis animi! Sapiente praesentium
          maxime quam ipsa cupiditate quae aperiam laboriosam ratione.
        </p>

        <Stack />

        <button className=" btn mt-8">Learn More &gt;</button>
      </div>

      <div className="hidden lg:inline-block z-10 ProjectPic  w-96 h-[812px]  rounded-2xl ml-10 mt-[-210px]"
          style={{ 
              backgroundImage:`url(${Background})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
          }}
      >
        
      </div>
    </div>

   <FeatureMbl/>




    </>


  );
};

export default FeatureProject;
