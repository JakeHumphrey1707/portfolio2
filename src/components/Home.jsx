import React, { useState } from 'react';
import F from '../recyclables/F';
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
      return <GoDotFill className='text-right ml-auto'/>;
    }
    return menuItem.charAt(0).toUpperCase() + menuItem.slice(1);
  };

  return (
    <div className='w-full h-screen bg-black text-white font-poppins'>
      <div className='grid grid-cols-3 w-full h-full'>
        <div className='p-8 md:pl-16 ml-auto space-y-12 text-lg md:text-2xl md:text-right my-auto items-center justify-center'>
          <div>
            <F duration={3000}>
              <p className='md:text-4xl text-xl cursor-default'>
                Jake Humphrey <span className='text-slate-400'>Portfolio</span>
              </p>
            </F>
          </div>
          <div>
            <F duration={3700}>
              <p
                onClick={() => setSelectedElement('about')}
                className={`hover:text-gray-500 duration-300 cursor-pointer ${selectedElement === 'about' ? 'text-gray-500' : ''}`}
              >
                {getMenuItemText('about')}
              </p>
            </F>
          </div>
          <div>
            <F duration={4400}>
              <p
                onClick={() => setSelectedElement('work')}
                className={`hover:text-gray-500 duration-300 cursor-pointer ${selectedElement === 'work' ? 'text-gray-500' : ''}`}
              >
                {getMenuItemText('work')}
              </p>
            </F>
          </div>
          <div>
            <F duration={5100}>
              <p
                onClick={() => setSelectedElement('skills')}
                className={`hover:text-gray-500 duration-300 cursor-pointer ${selectedElement === 'skills' ? 'text-gray-500' : ''}`}
              >
                {getMenuItemText('skills')}
              </p>
            </F>
          </div>
          <div>
            <F duration={5800}>
              <p
                onClick={() => setSelectedElement('contact')}
                className={`hover:text-gray-500 duration-300 cursor-pointer ${selectedElement === 'contact' ? 'text-gray-500' : ''}`}
              >
                {getMenuItemText('contact')}
              </p>
            </F>
          </div>
        </div>

        <div className='w-full h-full border col-span-2'>{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Home;
