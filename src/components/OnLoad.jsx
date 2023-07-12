import { LucideArrowDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Home from './Home';

const OnLoad = () => {
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [fadeOut]);

  const handleTakeMeThere = () => {
    setFadeOut(true);
    setTimeout(() => {
      setRedirectToHome(true);
    }, 500); // Delay of 0.5 seconds
  };
  if (redirectToHome) {
    return <Home />;
  }

  return (
    <div className='w-screen h-screen bg-black z-50 fixed top-0 left-0 font-poppins'>
      <div className='w-full h-full p-6 justify-center flex items-center'>
        <div
          className={`p-1 text-center text-xl ${fadeIn ? 'fade-in-out' : fadeOut ? 'fade-out' : 'fade-in'}`}
        >
          {fadeIn && (
            <div className='text-white text-4xl'>
              Welcome to my portfolio.
            </div>
          )}
          {!fadeIn && (
            <div>
              <LucideArrowDown className='h-10 w-10 animate-bounce text-gray-600 flex' />
              <div
                className={`duration-200 cursor-pointer hover:text-gray-600 rounded-md text-gray-300 ${fadeOut ? 'fade-out' : ''}`}
                onClick={handleTakeMeThere}
              >
                Take me there.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnLoad;
