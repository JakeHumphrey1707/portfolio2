import { LucideArrowDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const OnLoad = () => {
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [displayText, setDisplayText] = useState(null);

  useEffect(() => {
    // Add a delay before triggering the fade-out effect
    const timeout = setTimeout(() => {
      setFadeIn(false);
    }, 3000); // Adjust the delay as needed (in milliseconds)

    return () => clearTimeout(timeout);
  }, [fadeOut]);

  useEffect(() => {
    if (!fadeIn && !fadeOut) {
      setDisplayText(
        <div>
          <LucideArrowDown className='h-10 w-10 animate-bounce text-gray-600 flex' />
          <div
            className={`duration-200 cursor-pointer hover:text-gray-600 rounded-md text-gray-300 ${fadeOut ? 'fade-out' : ''}`}
            onClick={() => setFadeOut(true)}
          >
            Take me there.
          </div>
        </div>
      );
    }
  }, [fadeIn, fadeOut]);

  return (
    <div className='w-screen h-screen bg-black z-50 fixed top-0 left-0'>
      <div className='w-full h-full p-6 justify-center flex items-center'>
        <div
          className={`p-1 text-center text-xl ${fadeIn ? 'fade-in-out' : (fadeOut ? 'fade-out' : 'fade-in')}`}
        >
          {fadeIn && (
            <div className='text-white text-4xl'>
              Welcome to my portfolio.
            </div>
          )}
          {!fadeIn && displayText}
        </div>
      </div>
    </div>
  );
};

export default OnLoad;
