import React, {useState, useEffect} from 'react';
import ProjectItem from './ProjectItem';
// import useFetch from '../../src/useFetch';






const ProjectList = () => {
  // const {data:projects, isPending, error} = useFetch(' http://localhost:8000/projects');

   const projects = [
    // {
    //   "id": 1,
    //   "title": "InnerTuner",
    //   "description": "This app i s built for users who are looking to incorporate and track their daily routine. Is will allow the user to track and monitor their sleep, exercise and water intake.",
    //   "stack":{
    //       "language":"Javascript",
    //       "frontend":"React",
    //       "backend":"Express",
    //       "database":"MongoDb",
    //       "Other": "Tailwindcss Library"
    //   },
    //   'link':"",
    //   "contributors":["Jane Lee", "Yousuf Hussain", "Alistair Kin", "Rebecca Lasagna"]
    // },
    {
      "id": 2,
      "title": "We Chat2",
      "description": "This is mock up of a chat application that allows the users to have one on one chats as well as being apart of a chat channel",
      "stack":{
        "language":"Python",
        "frontend":"django",
        "backend":"django",
        "database":"Postgres"
      },
      'link':"",
      "contributors":[ "Marc Daniel", "Eric Chan"]
    },
    {
      "id": 3,
      "title": "City Collection",
      "description": "This app will allow users to make a picture collection of the cities they have visisted and make comments and write about their experience, make recommendations and share their experience with friends.",
      "stack":{
        "language":"Python",
        "frontend":"Django",
        "backend":"Django",
        "database":"Postgres"
      },
      'link':"",
      "contributors":[]
    },
    {
      "id": 4,
      "title": "We Sell",
      "description": "This is a mockup of a simple E-commerce site. where customers can look at products, write reviews and add items to their baskets",
      "stack":{
        "language":"javascript",
        "frontend":"Express",
        "backend":"Express",
        "database":"MongoDB"
      },
      'link':"",
      "contributors":[]
    },
    {
      "id": 5,
      "title": "Mancala",
      "description": "This is a simple game of Mancala. It is a 2 player game where each player's goal is to collect the most amount of stones in their Mancala.",
      "stack":{
        "language":"javascript",
        "frontend":"Html",
        "backend":" CSS ",
        "database":" -"
      },
      'link':"",
      "contributors":[]
    },
    {
      "id": 6,
      "title": "Tic Tac Toe",
      "description": "This is the first web game I built. the simple game of Tic Tac Toe",
      "stack":{
        "language":"javascript",
        "frontend":"Html",
        "backend":"-",
        "database":"-"
      },
      'link':"",
      "contributors":[]
  }
   ]





  return (
  
    <div className="projectList md:grid grid-cols-2 gap-10 mt-20 lg:mt-48">
      { projects.map((project) => (
        <ProjectItem 
        key={project.id} title={project.title} description={project.description} stack={project.stack}
        />
      ))}
       


        
        
    </div>
    

  );
};

export default ProjectList;
