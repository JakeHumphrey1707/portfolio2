import React from 'react';
import F from '../ui/F';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import Copy from '../ui/Copy';

const Contact = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div>
        <div className='md:h-full h-[90%] md:p-6 p-0 my-4 md:text-2xl text-[14px]'>
          <F duration={2000}>
            <div className='grid md:grid-cols-2 text-left gap-y-4'>
              <span>Send me an email: </span>
              <code className='rounded-md bg-black bg-opacity-60 flex justify-between md:px-4 items-center md:text-xl text-[10px]'>
                jakematthewh@gmail.com
                <Copy text='jakematthewh@gmail.com' />
              </code>

              <span>Call or text me: </span>
              <code className='rounded-md bg-black bg-opacity-60 flex justify-between md:px-4 items-center md:text-xl text-[10px]'>
                +61 400 414 039
                <Copy text='+61 400 414 039' />
              </code>
            </div>

            <div className='md:p-10 md:flex justify-between text-white md:scale-100 scale-75'>
              <a
                href='https://github.com/JakeHumphrey1707'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center text-xl p-2 hover:scale-110 hover:text-slate-400 hover:cursor-pointer duration-200'
              >
                GitHub
                <AiFillGithub size={50} />
              </a>
              <a
                href='https://www.youtube.com/channel/UCOrHsbYknCUNd20Cz5ogCmA'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center text-xl p-2 hover:scale-110 hover:text-slate-400 hover:cursor-pointer duration-200'
              >
                YouTube
                <AiFillYoutube size={50} />
              </a>
              <a
                href='/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center text-xl p-2 hover:scale-110 hover:text-slate-400 hover:cursor-pointer duration-200'
              >
                LinkedIn
                <AiFillLinkedin size={50} />
              </a>
            </div>
          </F>
        </div>
      </div>
    </div>
  );
};

export default Contact;
