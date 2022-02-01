import React from 'react';
import {motion} from 'framer-motion'

// const textVariants = {
//     animationText:{
//         show:{
//             opacity:[0, 0.5, 1]
//         },
//         transition:{
//             repeat: Infinity,
//             duration:0.5,
//             ease:'easeOut'
//         }

//     }
// }




const DownButton = () => {
  return (
      <>
   
        <div className="arrow  w-24 h-28 ml-64 md:mt-36 border">

            
                <div className="dnarorng ml-10  w-5">
                    <div className="dots w-2.5 h-13 justify-between ml-2.5 pt-2">
                        <motion.div className="bg-peach w-2.5 h-2.5 mb-2 rounded-full"></motion.div>
                        <motion.div className="bg-peach w-2.5 h-2.5 mb-2 border border-bgdrk rounded-full"></motion.div>
                        <motion.div className="bg-peach w-2.5 h-2.5 rounded-full"></motion.div>
                    </div>
                    <div className="chevrons  w-5 ">

  
                        <motion.div className=" border-tangerine border-r-[5px] border-b-[5px] rounded  w-7 h-7 -z-20"
                        style={{rotate:'45deg'}}
                        animate={{ y:[-10, 0], borderColor: '#7B61FF'}}
                        transition={{repeat:Infinity, duration:2}}
                        ></motion.div>
                        <motion.div className=" border-tangerine border-r-[5px] border-b-[5px] rounded w-7 h-7 -z-10"
                        style={{rotate:'45deg'}}
                        animate={{ y:[-10, 0], borderColor: '#7B61FF'}}
                        transition={{repeat:Infinity, duration:2}}
                        ></motion.div>
                    </div>
                </div>






                {/* <div className="dnarorng ml-10  w-5">
                    <div className="dots w-2.5 h-13 justify-between ml-1.5 pt-2">
                        <div className="bg-peach w-2.5 h-2.5 mb-2 rounded-full"></div>
                        <div className="bg-peach w-2.5 h-2.5 mb-2  rounded-full"></div>
                        <div className="bg-peach w-2.5 h-2.5 rounded-full"></div>
                    </div>
                    <div className="chevrons  w-5 mb-">
                        <div className=" border-tangerine border-r-[5px] border-b-[5px] rotate-45 w-6 h-6 -z-20"></div>
                        <div className=" border-tangerine border-r-[5px] border-b-[5px] rotate-45 w-6 h-6 -z-10"></div>
                    </div>
                </div> */}
              
              
              
              
              
              
              
                <div className="text  w-18 h-20 mx-auto  ">
                    <motion.h1 className="bodyTwo text-center"
                   animate={{
                       opacity:[ 1, 0,1]
                   }}
                   transition={{repeat: Infinity, duration:2}}
                    
                    
                    
                    >Scroll down</motion.h1>
                    
                </div>


           
    </div>

      </>









);
};

export default DownButton;
