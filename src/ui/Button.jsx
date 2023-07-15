import React from 'react';

const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      target='blank'
      className="bg-slate-700 hover:bg-gray-800 hover:text-slate-500 
      transition-colors text-white text-2xl py-2 px-4 rounded duration-200 
      hover:scale-[106%]"
    >
      {text}
    </a>
  );
};

export default Button;
