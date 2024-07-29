import { motion } from 'framer-motion';
import { Turn as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const [search, setSearch] = useState(false);

  const toggleSearch = () => {
    setSearch(!search);
  };

  // start framer motion animation
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideUpWithBlur = {
    hidden: { y: -10, opacity: 0, filter: 'blur(5px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={slideUpWithBlur}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='sticky top-0 z-50 '
    >
      <nav className='absolute bg-black bg-opacity-70 shadow-xl backdrop-blur-md flex md:flex-row flex-col justify-between w-full px-20 py-10 items-center'>
        <div className='md:hidden w-full justify-between flex flex-row'>
          <a href='/'>
            <Image
              src='/images/vonkslogo.svg'
              alt='Logo'
              width={110}
              height={100}
            />
          </a>

          <Hamburger
            size={20}
            color='#ffffff'
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        <a href='/'>
          {' '}
          <Image
            src='/images/vonkslogo.svg'
            alt='Logo'
            width={100}
            height={100}
            className='hidden md:block'
          />
        </a>

        <ul
          className={`flex md:flex-row flex-col md:space-x-10 space-y-5 md:space-y-0 justify-center items-center text-xl pt-10 md:pt-0 text-white transition-all ${
            isOpen ? 'block max-h-screen' : 'hidden md:flex max-h-0'
          }`}
        >
          <li>
            <a href='/' className='underline-animation'>
              Home
            </a>
          </li>
          <li>
            <a href='/about' className='underline-animation'>
              About{' '}
            </a>
          </li>
          <li>
            <a href='/projects' className='underline-animation'>
              Projects
            </a>
          </li>
          <li>
            <a href='/contact' className='underline-animation'>
              Contact
            </a>
          </li>
          {/* <li>
            <FaSearch onClick={toggleSearch} />
          </li> */}
        </ul>
        {/* <div className='min-h-screen backdrop:blur-sm'> adsad</div> */}
      </nav>
    </motion.div>
  );
}

export default Navbar;
