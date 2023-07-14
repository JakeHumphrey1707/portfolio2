import React, { useEffect, useState } from 'react';

const Slide = ({ direction, delay = 0, children }) => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationClass(`animate-slide-${direction}`);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [direction, delay]);

  return (
    <div className={`flex flex-col items-center ${animationClass}`}>
      {children}
    </div>
  );
};

export default Slide;
