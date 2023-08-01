// Home.js
import React, { useState } from 'react';
import F from '../ui/Fade';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Contact from './Contact';
import { GoDotFill } from 'react-icons/go';

const Home = () => {
  const [selectedElement, setSelectedElement] = useState('about');

  const renderComponent = () => {
    switch (selectedElement) {
      case 'about':
        return <About />;
      case 'work':
        return <Work />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  const getMenuItemText = (menuItem) => {
    if (selectedElement === menuItem) {
      return <GoDotFill className='md:ml-auto text-slate-500' />;
    }
    return menuItem.charAt(0).toUpperCase() + menuItem.slice(1);
  };

  return (
    <div className='w-full h-screen bg-black text-white font-poppins overflow-hidden scrollbar-hide'>
      <F duration={6000}>
        <div className='grid grid-cols-4 w-full h-full backgroundimage'>
          <div className='lg:p-20 md:p-10 p-4 lg:pl-16 ml-auto space-y-12 text-lg md:text-2xl md:text-right justify-center z-50 flex flex-col col-span-1 lgcol-span-2'>
            <div className=''>
              <div className='md:text-4xl text-xl cursor-default flex flex-col'>
              <p className='md:text-right font-bold fade-in-out'>Hello, I'm</p>
                <div className='text-white font-bold'>
                  
                  Jake Humphrey <F duration={20000}><span className='text-slate-500'>Portfolio</span></F>
                </div>
              </div>
            </div>

            <div>
              <F duration={3000}>
                <p
                  onClick={() => setSelectedElement('about')}
                  className={`hover:text-slate-500 duration-300 cursor-pointer ${selectedElement === 'about' ? 'text-gray-500' : ''}`}
                >
                  {getMenuItemText('about')}
                </p>
              </F>
            </div>
            <div>
              <F duration={3700}>
                <p
                  onClick={() => setSelectedElement('work')}
                  className={`hover:text-slate-500 duration-300 cursor-pointer ${selectedElement === 'work' ? 'text-gray-500' : ''}`}
                >
                  {getMenuItemText('work')}
                </p>
              </F>
            </div>
            <div>
              <F duration={4400}>
                <p
                  onClick={() => setSelectedElement('skills')}
                  className={`hover:text-slate-500 duration-300 cursor-pointer ${selectedElement === 'skills' ? 'text-gray-500' : ''}`}
                >
                  {getMenuItemText('skills')}
                </p>
              </F>
            </div>
            <div>
              <F duration={5100}>
                <p
                  onClick={() => setSelectedElement('contact')}
                  className={`hover:text-slate-500 duration-300 cursor-pointer ${selectedElement === 'contact' ? 'text-gray-500' : ''}`}
                >
                  {getMenuItemText('contact')}
                </p>
              </F>
            </div>
          </div>

          <div className='w-full h-screen z-10 col-span-3 lgcol-span-2'>
            <F duration={5000}>{renderComponent()}</F>
          </div>
        </div>
      </F>
    </div>
  );
};

export default Home;
