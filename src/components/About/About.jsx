import React from 'react';
import styles from './About.module.css';
import SideBarOne from '../SideBarOne';






const About = () => {
    
  return (
    <div className="Hero px-4 mt-6 md:mt-32  md:flex justify-between "> 
    
        <div className="msg  md:w-7/12 md:pr-8">
        <h1 className="hOne"> &#60; About Me /&gt; </h1>

        <SideBarOne/>
        <p 
        className="bodyTwo  mt-6  md:mt-10 md:ml-24 mb-3">
            Hi, I'm
            <span className="text-tangerine"> &#123;</span> 
            <span className="text-tangerine font-bold text-2xl md:text-4xl md:font-semibold" > Tara! </span> 
            <span className="text-tangerine"> &#125;</span>   
        </p>
        <p className="bodyTwo md:ml-44">
           <span className="text-iris"> &#62; </span> 
           Full-Stack Developer
        </p>
        <p className="bodyTwo md:ml-44">
           <span className="text-iris"> &#62; </span> Creative Coder
        </p>
        <p className="bodyOne md:ml-44 mt-5">
        <span className="text-iris font-medium ">&#62; </span> 
        I am a Full Stack developer based in Toronto with a background in various industries such as Stakeholder Relations, Legal Consultancy and Business Development. I found software development merging all three areas of my interest and skill set involving creativity, logistics and analytics.
        </p>

        <div className="md:ml-44 btnbck bg-lavender hover:bg-bgdrk text-jasmine text-center  w-28 h-11 rotate-[-17deg] mt-16 ">
            <div className="btnframe border-4 border-peach w-32 h-11 flex rotate-[17deg] hover:bg-lavender origin-top-left">
                <button
                  className=" place-items-center mx-auto"
                >

                    Resume
                </button>
            </div>
        </div>

        </div>

        <div className=" flex justify-center mt-16 md:mt-8">
        
            <div className={styles.myPic}></div>
        </div>

    </div>








    );
};

export default About;
