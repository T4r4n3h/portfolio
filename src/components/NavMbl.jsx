import React,{useState} from 'react';
import {Link} from 'react-scroll';

const NavMbl = () => {
    // const[disp, setDesp] = useState('hidden')
  return (
  <div className=" bg-eggplant w-52  h-96 ml-auto text-right font-medium pr-6"
  style={{boxShadow:' -5px 5px #8A70FF'}}
  >

      <ul className=" mt-6 pt-3">
          <li className="my-7">
              <Link>Home &#60; </Link>
          </li>
          <li className="my-7">
              <Link>About &#60;</Link>
          </li>
          <li className="my-7">
              <Link>Projects &#60;</Link>
          </li>
          <li className="my-7">
              <Link>CV &#60;</Link>
          </li>
          <li className="my-7">
              <Link>Blog &#60;</Link>
          </li>
      </ul>
   
   
    

  </div>
  );
};

export default NavMbl;
