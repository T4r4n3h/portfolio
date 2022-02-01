import React from "react";
import { motion } from "framer-motion";
const Test = () => {
  return (
    <>
      <div className="arrow  w-24 h-28 mx-auto md:mt-36  relative">
        {/* <div className="dnarorng w-5 bg-peach"> */}
          <div className="dots w-2.5 h-13 justify-between  pt-2  mx-auto">
            <motion.div 
            animate={{ 
                y:[15,-10,15],
                opacity:[0, 1, 0]
            }}
            transition={{repeat:Infinity, duration:2}}
            className="bg-peach w-2.5 h-2.5 mb-2 rounded-full z[1]"></motion.div>
            <motion.div 
            animate={{ 
                width:["11.5px","10px","11.5px"],
                height:["11.5px","10px","11.5px"],
                backgroundColor:["#E8D9F4", "#FEC5B9" ,"#E8D9F4"]
                // backgroundColor: ['hsl(272, 55, 90)', 'hsl(10, 97, 86)','hsl(272, 55, 90)']
            }}
            transition={{repeat:Infinity, duration:2}}
            className="bg-peach w-2.5 h-2.5 mb-2 border border-bgdrk rounded-full z[2]"></motion.div>
            <motion.div 
                  animate={{ 
                    y:[15,-5,15],
                    opacity:[0, 1, 0]
                }}
                transition={{repeat:Infinity, duration:2}}
            className="bg-peach w-2.5 h-2.5 rounded-full z[3]"></motion.div>
          </div>
         


          <motion.div className="mx-auto border z-10"
          animate={{ 
              y:[-15, 10, -15],
              color:["#8A70FF","#FE9881","#8A70FF"]
             
          }}
          transition={{repeat:Infinity, duration:2}}
          >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                  fillRule="evenodd"
                  d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                  />
              </motion.svg>
          </motion.div>
           
        
        {/* </div> */}

        <div className="text border border-green w-18 h-20  mx-auto ">
          <motion.h1
            className="bodyTwo text-center text-jasmine"
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Scroll down
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Test;
