import React from 'react';

const DownButton = () => {
  return (
      <>
   
        <div className="arrow  w-24 h-28 ml-64 md:mt-36 border">
                <div className="dnarorng ml-10  w-5">
                    <div className="dots w-2.5 h-13 justify-between ml-1.5 pt-2">
                        <div className="bg-peach w-2.5 h-2.5 mb-2 rounded-full"></div>
                        <div className="bg-peach w-2.5 h-2.5 mb-2 rounded-full"></div>
                        <div className="bg-peach w-2.5 h-2.5 rounded-full"></div>
                    </div>
                    <div className="chevrons  w-5 mb-">
                        <div className=" border-tangerine border-r-[5px] border-b-[5px] rotate-45 w-6 h-6 -z-20"></div>
                        <div className=" border-tangerine border-r-[5px] border-b-[5px] rotate-45 w-6 h-6 -z-10"></div>
                    </div>
                </div>
                <div className="text  w-18 h-20 mx-auto ">
                    <p className="bodyTwo text-center">Scroll</p>
                    <p className="bodyTwo text-center">down</p>
                </div>


           
    </div>

      </>









);
};

export default DownButton;
