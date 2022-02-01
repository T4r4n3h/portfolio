import React, { useState }from 'react';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

import MyResume from '../assets/pdf/T.Saleh-Resume-Final.pdf';


import { Worker } from '@react-pdf-viewer/core';


const Resume = () => {
  return (
       
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
       <div className="Resume w-screen h-screen overflow-auto bg-jasmine flex align-center justify-center"> 
 
            <Viewer fileUrl= "../assets/pdf/T.Saleh-Resume-Final.pdf" />
  
        </div>
</Worker>
    
    
    );
};

export default Resume;
