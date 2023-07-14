import React from 'react';
import F from '../ui/Fade';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import Copy from '../ui/Copy';
import Slide from '../ui/Slide';

const Contact = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div>
        <div className='md:h-full h-[90%] md:p-6 p-0 my-4 md:text-3xl text-[20px]'>
          <F duration={2000}>
            <Slide direction='down'>
            <div className='grid gap-y-4 text-right md:text-center'>
              <span>Send me an email: </span>
              <code className='rounded-md md:bg-gray-500 bg-opacity-30 md:flex justify-between md:px-4 md:text-xl text-[15px] p-1'>
                jakematthewh@gmail.com
                <Copy text='jakematthewh@gmail.com' />
              </code>

              <span>Call or text me: </span>
              <code className='rounded-md md:bg-gray-500 bg-opacity-30 md:flex justify-between md:px-4 md:text-xl text-[15px]'>
                +61 400 414 039
                <Copy text='+61 400 414 039' />
              </code>
            </div>
            </Slide>

            <Slide direction='up'>
            <div className='md:p-10 md:flex text-white md:scale-100 scale-[0.8] gap-4'>
              <a
                href='https://github.com/JakeHumphrey1707'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center text-xl p-2 hover:scale-110 hover:text-slate-400 hover:cursor-pointer duration-200'
              >
                GitHub
                <AiFillGithub size={'12vh'} />
              </a>
              <a
                href='https://www.youtube.com/channel/UCOrHsbYknCUNd20Cz5ogCmA'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center text-xl p-2 hover:scale-110 hover:text-slate-400 hover:cursor-pointer duration-200'
              >
                YouTube
                <AiFillYoutube size={'12vh'} />
              </a>
              <a
                href='/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center text-xl p-2 hover:scale-110 hover:text-slate-400 hover:cursor-pointer duration-200'
              >
                LinkedIn
                <AiFillLinkedin size={'12vh'} />
              </a>
            </div>
            </Slide>
          </F>
        </div>
      </div>
    </div>
  );
};

export default Contact;
