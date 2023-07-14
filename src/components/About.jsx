import React from 'react';
import F from '../ui/F';

const About = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='md:p-10 p-5'>
        <div className='md:h-full h-[90%] overflow-y-hidden scrollbar-hide'>
          <F duration={2000}>
            <div className='grid grid-cols-1 md:grid-cols-3'>
              <p className='md:p-6 p-2 md:my-4 text-sm md:text-2xl text-right md:text-center col-span-2'>
                Born in 2003 in Melbourne, Australia, I'm a passionate full-stack developer. I love the dynamic balance between front-end and back-end work, where creativity and logic are one. Building user-friendly interfaces and solving complex problems fuel my drive to learn. Full stack development is my relentless pursuit of innovation and a genuine expression of my passion.
              </p>
            </div>
          </F>
        </div>
      </div>
    </div>
  );
};

export default About;
