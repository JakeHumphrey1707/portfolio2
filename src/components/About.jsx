import React from 'react';
import F from '../ui/Fade';
import Slide from '../ui/Slide';
import Headshot from '../assets/headshot.svg';

const About = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='md:p-10 p-5'>
        <div className='md:h-full h-[90%] scrollbar-hide'>
          <F duration={2000}>
            <Slide direction='right'>
            <div className='md:grid md:grid-cols-2'>
              <div className=''>
                <p className='md:p-6 md:pl-0 pl-12 md:my-4 text-md md:text-3xl text-left'>          
                  Born in Australia, 2003. I'm a front-end web developer with a passion for creating 
                  efficient and user-friendly designs. Using various technologies, I bring websites 
                  to life with dynamic and engaging experiences. Let's turn your ideas into stunning 
                  front-end designs!
                </p>
              </div>
              <div className='items-center justify-center flex md:scale-100 scale-50'>
                <img src={Headshot} alt="" className='bg-gray-800 bg-opacity-75 rounded-full hover:translate-y-[-10px] duration-500'/>
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
