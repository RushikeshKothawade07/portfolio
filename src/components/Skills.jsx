import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Cpp from '../assets/C++.png';
import Python from '../assets/python.png';

import Tableau from '../assets/tableau.png';
import PowerBI from '../assets/power bi.png';

const Skills = () => {
    const skillsList = [
        {
            id:1,
            src : Python,
            title:'PYTHON ',

        },
        {
            id:2,
            src : Cpp,
            title:'C++',

        },
        {
            id:3,
            src : HTML,
            title:'HTML',

        },
        {
            id:4,
            src : CSS,
            title:'CSS',

        },
        {
            id:5,
            src : JavaScript,
            title:'JAVASCRIPT',

        },
        {
            id:6,
            src : ReactImg,
            title:'REACT',

        },
        {
            id:7,
            src : Tableau,
            title:'TABLEAU',

        },
        {
            id:8,
            src : PowerBI,
            title:'POWER BI',

        },

    ]
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

       


          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {skillsList.map(({ id, src, title }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
          
          </div>
      </div>
 
    
  );
};

export default Skills;
