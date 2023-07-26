import React from 'react';
import F from '../ui/Fade';
import Slide from '../ui/Slide';
import Headshot from '../assets/headshot.svg';

const About = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='md:p-10 p-5'>
        <div className='md:h-full h-[90%] scrollbar-hide'>
          <F duration={3500}>
            <Slide direction='right'>
            <div className='md:grid md:grid-cols-2'>
              <div className=''>
                <p className='md:p-6 md:pl-0 pl-12 md:my-4 text-md md:text-3xl text-left'>          
                  Born in Australia, 2003. Studying a bachelor of computer science at Swinburne 
                  University of Technology. Computers are my passion, since I was a child I've
                  been pulling electronics apart because I was curious. Now,
                  I'm putting them back together, and making some improvements.
                </p>
              </div>
              <div className='items-center justify-center flex md:scale-100 scale-50'>
                <img src={Headshot} alt="" className='bg-gray-800 bg-opacity-20 rounded-full hover:translate-y-[-10px] duration-500'/>
              </div>
            </div>
            </Slide>
          </F>
        </div>
      </div>
    </div>
  );
};

export default About;
