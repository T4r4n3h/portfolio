import React from 'react';
import {Link} from 'react-scroll'

import Logo from '../assets/Logo-jasmine.png';

const NavBar = () => {
  return (
    <div className="flex justify-between mx-2.5 items-center">
      
                  
      <div className="logo">
        <img src={Logo} alt="" />
                  
      </div>
      <div className="hidden md:contents font-medium ">
                  
          <ul className="flex">
              <li className="mx-3"><Link to="/"> > Home</Link></li>
              <li className="mx-3" ><Link to="/about"> > About</Link></li>
              <li className="mx-3" ><Link to="/projects"> > Projects</Link></li>
              <li className="mx-3" ><Link to="/CV"> > CV</Link></li>
              <li className="mx-3" ><Link to="/blog"> > Blog</Link></li>
          </ul>
          
      </div>
      <div className="md:hidden">

        <button className="">
            <svg
              className="text-lg"
              width="24"
              height="24"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_925_3410" fill="white">
                <rect width="24" height="5" rx="1" />
              </mask>
              <rect
                width="24"
                height="5"
                rx="1"
                stroke="#FEC5B9"
                stroke-width="3"
                mask="url(#path-1-inside-1_925_3410)"
              />
              <mask id="path-2-inside-2_925_3410" fill="white">
                <rect y="9" width="24" height="5" rx="1" />
              </mask>
              <rect
                y="9"
                width="24"
                height="5"
                rx="1"
                stroke="#FEC5B9"
                stroke-width="3"
                mask="url(#path-2-inside-2_925_3410)"
              />
              <mask id="path-3-inside-3_925_3410" fill="white">
                <rect y="18" width="24" height="5" rx="1" />
              </mask>
              <rect
                y="18"
                width="24"
                height="5"
                rx="1"
                stroke="#FEC5B9"
                stroke-width="3"
                mask="url(#path-3-inside-3_925_3410)"
              />
            </svg>
        </button>


      </div>
      
      

      
    </div>
  );
};

export default NavBar;
