import React, { useState } from 'react';
import { CopyCheck, CopyIcon } from 'lucide-react';

const Copy = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000); // Revert after 2 seconds
      })
      .catch((error) => console.error('Failed to copy text:', error));
  };

  return (
    <div>
      <button onClick={handleCopy} className='hidden md:block'>
        {isCopied ? <CopyCheck className='text-slate-500 duration-200 flex' /> : <CopyIcon className='hover:text-slate-500 hover:scale-110 duration-200 flex' />}
      </button>
      
    </div>
  );
};

export default Copy;
