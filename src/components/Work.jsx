import React, { useRef, useState } from 'react';
import Button from '../ui/Button';
import avixohadmin from '../assets/avixohadmin.png';
import ascii from '../assets/ascii.png';
import ImageText from '../ui/ImageText';
import F from '../ui/Fade';
import Slide from '../ui/Slide';

const Accordion = ({ title, content, isOpen, toggleAccordion }) => {
  const contentRef = useRef();

  const handleToggle = () => {
    toggleAccordion();
  };

  const getContentHeight = () => {
    return isOpen ? contentRef.current.scrollHeight : 1;
  };

  return (
    <div className="border-b-2 border-slate-500 w-full">
      <button
        className='text-center md:text-left p-4 focus:outline-none flex items-center justify-center gap-4'
        onClick={handleToggle}
      >
        <span className="font-medium">{title}</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: getContentHeight() }}
      >
        <div className="p-4" ref={contentRef}>
          {content}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevAccordion) => (prevAccordion === index ? null : index));
  };

  return (
    <F duration={3000}>
      <div className="w-full h-screen flex items-center justify-center md:px-44 md:scale-100 scale-[0.9] overflow-y-scroll scrollbar-hide">
        <div className="md:text-4xl text-xl">
        <Slide direction='right'>
          <Accordion
            title={<p className="text-white">"ECOMMERCE-ADMIN"</p>}
            content={
              <div className="grid grid-cols-2 gap-y-4">
                <p className='text-sm text-center col-span-2 justify-center px-20 text-gray-400'>
                  E-commerce administration application. Built using Next.js, Typescript, Tailwind, Prisma, MongoDB, and NextAuth. Features: Dynamic API calls, content management system, data visualization  and more.
                </p>
                <div className="col-span-2">
                  <ImageText
                    imageSrc={avixohadmin}
                    text=""
                  />
                </div>
                <div className="items-center flex flex-col">
                  <Button
                    text="GitHub"
                    link="https://github.com/JakeHumphrey1707/avixoh-admin.git"
                  />
                </div>
                <div className="items-center flex flex-col">
                  <Button text="Demo" link="/" />
                </div>
              </div>
            }
            isOpen={activeAccordion === 0}
            toggleAccordion={() => toggleAccordion(0)}
          />

          <Accordion
            title={<p className="text-white">"AVIXOH-KNITTING"</p>}
            content={
              <div className="grid grid-cols-2 gap-y-4">
                <p className='text-sm text-center col-span-2 justify-center px-20 text-gray-400'>
                  Comission piece: Store front for "AVIXOH Knitting Pty Ltd". Built using Next.js, Typescript, Tailwind, Stripe API and NextAuth.
                </p>
                <div className="col-span-2">
                  <ImageText
                    imageSrc={avixohadmin}
                    text=""
                  />
                </div>
                <div className="items-center flex flex-col">
                  <Button
                    text="GitHub"
                    link="https://github.com/JakeHumphrey1707/avixoh-admin.git"
                  />
                </div>
                <div className="items-center flex flex-col">
                  <Button text="Live Site" link="/" />
                </div>
              </div>
            }
            isOpen={activeAccordion === 1}
            toggleAccordion={() => toggleAccordion(1)}
          />

          <Accordion
            title={<p className="text-white">"ASCII-VIDEO"</p>}
            content={
              <div className="grid grid-cols-2 gap-y-4">
                <div className="col-span-2">
                  <ImageText
                    imageSrc={ascii}
                    text=""
                  />
                </div>
                <div className="items-center flex flex-col">
                  <Button
                    text="GitHub"
                    link="https://github.com/JakeHumphrey1707/ascii-live-video.git"
                  />
                </div>
                <div className="items-center flex flex-col">
                  <Button text="Demo" link="https://ascii-live-video.vercel.app" />
                </div>
              </div>
            }
            isOpen={activeAccordion === 2}
            toggleAccordion={() => toggleAccordion(2)}
          />
           </Slide>
        </div>
      </div>
     
    </F>
  );
};

export default Work;
