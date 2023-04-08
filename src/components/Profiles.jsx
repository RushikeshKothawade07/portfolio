import React from 'react';
import leetcode from '../assets/profiles/leetcode.png'
import codechef from '../assets/profiles/codechef.png'
import hackerrank from '../assets/profiles/hackerrank.png'
import GFG from '../assets/profiles/gfg.png'

const Profiles = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Coding Profiles</p>
              <p className='py-4'>Coding Platforms for Problem Solving</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <a href='https://leetcode.com/rushi_4123/' target="_blank">
                  <img href='https://leetcode.com/rushi_4123/' target="_blank" className='w-20 mx-auto' src={leetcode} alt="leetcode icon" />
                  </a>
                  <p className='my-4'>LEETCODE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <a href='https://auth.geeksforgeeks.org/user/rushikeshsk2105' target="_blank">
                  <img className='w-20 mx-auto' src={GFG} alt="gfg icon" />
                  </a>
                  <p className='my-4'>GFG</p>
              </div>
             
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <a href='https://www.codechef.com/users/rushi_4123' target="_blank">
                  <img className='w-20 mx-auto' src={codechef} alt="codechef icon" />
                  </a>
                  <p className='my-4'>CODECHEF</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <a href='https://www.hackerrank.com/rushikeshsk2105' target="_blank">
                  <img className='w-20 mx-auto' src={hackerrank} alt="hackerrank icon" />
                  </a>
                  <p className='my-4'>HACKERRANK</p>
              </div>
         
          
          </div>
      </div>
    </div>
  );
};

export default Profiles;
