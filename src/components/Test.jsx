import React from "react";
import { motion } from "framer-motion";
const Test = () => {
  return (
    <div className="arrow  mx-auto md:mt-36  w-20 border-2">
      <div className="dots w-2.5 h-13  border justify-between   mx-auto">
        <motion.div
          className="bg-peach w-2.5 h-2.5 mb-2.5 rounded-full -z[1]"
          // animate={{
          //     y:[15,-10,16],
          //     opacity:[0, 1, 0]
          // }}
          // transition={{
          //   repeat:Infinity,
          //   duration:2,
          //   // delay:2
          // }}
        ></motion.div>
        <motion.div
          className="bg-rose w-2.5 h-2.5 mb-2.5 border border-bgdrk rounded-full -z[2] "
          // animate={{
          //     width:["12px","10px","12px"],
          //     height:["12px","10px","12px"],
          //     backgroundColor:["#E8D9F4", "#FEC5B9" ,"#E8D9F4"]

          // }}
          // transition={{
          //   repeat:Infinity,
          //   duration:4,
          //   // delay: 2
          // }}
        ></motion.div>
        <motion.div
          className="bg-cyan w-2.5 h-2.5 rounded-full -z[3]"
          //   animate={{
          //     y:[5,-10,-10, 5],
          //     opacity:[0, 1, 1,  0]
          // }}
          // transition={{repeat:Infinity, duration:2}}
        ></motion.div>
      </div>

      <motion.div
        className=" chevron text-tangerine border-4 mt-[-20px] mx-auto "
        // initial={{
        //   y:10,
        //   color:"#FE9881"
        // }}

        animate={{
            y:[-15, 0,-15,0],
            color:["#8A70FF" ,"#FE9881"]

        }}
        transition={{repeat:Infinity, duration:3.6}}
      >
      
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
        </svg>
      </motion.div>

      <div className="text w-18 h-18 mt-[-14px] mx-auto  border">
        <motion.h1
          className="text-lg md:text-2xl text-center text-jasmine border"
            initial={{
              opacity:'0'
            }}

          animate={{
            opacity: [1, 0],
          }}
          transition={{
            repeat:Infinity,
            duration:3.6,
           
          }}
        >
          Scroll down
        </motion.h1>
      </div>
    </div>
  );
};

export default Test;
