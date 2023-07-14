import React from 'react';

const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      target='blank'
      className="bg-slate-700 hover:bg-slate-500 hover:text-[25px] text-white text-2xl py-2 px-4 rounded duration-200"
    >
      {text}
    </a>
  );
};

export default Button;
