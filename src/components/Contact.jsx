import React from 'react';
import F from '../ui/Fade';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import Copy from '../ui/Copy';
import Slide from '../ui/Slide';

const Contact = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div>
        <div className='md:h-full h-[90%] my-4 md:text-3xl text-[20px] md:p-10 p-5'>
          <F duration={2000}>
            <Slide direction='down'>
            <div className='gap-y-4 text-center'>
              <span className='text-slate-500'>Send me an email: </span>
              <span className='rounded-md md:flex justify-between md:px-4 md:gap-4 p-1'>
                jakematthewh@gmail.com
                <Copy text='jakematthewh@gmail.com' />
              </span>
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
