import React from 'react';

const ImageText = ({ imageSrc, text }) => {
  return (
    <div className="relative group flex items-center justify-center">
      <img src={imageSrc} alt='' className="md:w-4/5 w-full rounded-md group-hover:scale-[103%] duration-500" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="md:text-2xl text-[10px] font-bold text-opacity-50 text-black md:invisible group-hover:visible">{text}</h2>
      </div>
    </div>
  );
};

export default ImageText;
