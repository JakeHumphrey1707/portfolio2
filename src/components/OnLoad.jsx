import { LucideArrowDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const OnLoad = () => {
  const [fadeIn, setFadeIn] = useState(true);
  const [displayText, setDisplayText] = useState(
    <div className='text-white text-4xl'>
      Welcome to my portfolio.
    </div>
  );

  useEffect(() => {
    // Add a delay before triggering the fade-out effect
    const timeout = setTimeout(() => {
      setFadeIn(false);
      setDisplayText(
        <div className=''>
          <LucideArrowDown className='h-10 w-10 animate-bounce text-gray-600 flex' />
          <div
            className='duration-200 cursor-pointer hover:text-gray-600 rounded-md text-gray-300'
            onClick={() => {
              // Handle click event here
            }}
          >
            Take me there.
          </div>
        </div>
      );
    }, 3000); // Adjust the delay as needed (in milliseconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='w-screen h-screen bg-black z-50 fixed top-0 left-0'>
      <div className='w-full h-full p-6 justify-center flex items-center'>
        <div className={`p-1 text-center text-xl ${fadeIn ? 'fade-in-out' : 'fade-in'}`}>
          {displayText}
        </div>
      </div>
    </div>
  );
};

export default OnLoad;
