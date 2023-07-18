import React from 'react';
import { SiReact, SiHtml5, SiJavascript, SiCss3, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import Slide from '../ui/Slide'
import F from '../ui/Fade'

const Contact = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center md:scale-100 scale-[0.8]'>
      <F duration={1000}>
      <div>
        <div className='h-full md:p-6 p-0 my-4 md:text-2xl text-[14px]'>
          <div className='grid grid-cols-2 grid-rows-3 gap-4 md:gap-x-10'>
            <Slide direction='down gap-y-2'>
              <p>HTML</p>
              <SiHtml5 size={'12vh'} className='text-orange-500 hover:scale-[1.15] duration-200' />
            </Slide>
            <Slide direction='down gap-y-2'>
              <p>CSS</p>
              <SiCss3 size={'12vh'} className='text-blue-500 hover:scale-[1.15] duration-200' />
            </Slide>
            <Slide direction='left gap-y-2'>
              <p>VANILLA JS</p>
              <SiJavascript size={'12vh'} className='text-yellow-400 hover:scale-[1.15] duration-200' />
            </Slide>
            <Slide direction='right gap-y-2'>
              <p>REACT</p>
              <SiReact size={'12vh'} className='text-cyan-400 hover:scale-[1.15] duration-200'  />
            </Slide>
            <Slide direction='up gap-y-2'>
              <p>NEXT</p>
              <SiNextdotjs size={'12vh'} className='text-gray-800 hover:scale-[1.15] duration-200' />
            </Slide>
            <Slide direction='up gap-y-2'>
              <p>TAILWIND</p>
              <SiTailwindcss size={'12vh'} className='text-cyan-400 hover:scale-[1.15] duration-200' />
            </Slide>
          </div>
        </div>
      </div>
      </F>
    </div>
  );
};

export default Contact;
