import { motion } from 'framer-motion';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import Button from '@/components/buttons/Button';

// Define the animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Startproject() {
  return (
    <div
      className='bg-fixed bg-cover bg-center flex min-h-screen flex-col justify-center items-center text-white'
      style={{
        backgroundImage: "url('/images/pagecover/landingpage.png')",
      }}
    >
      <motion.div
        className='flex flex-col justify-center items-center'
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className='text-center mt-4 font-black text-6xl md:text-8xl font-helvetica'>
          START A PROJECT
          <br /> TOGETHER
        </h1>
        <p className='w-3/4 font-helvetica text-center md:text-xl pt-10'>
          Ready to bring your vision to life?
          <br /> Click the button below to start a project with us on WhatsApp!
        </p>
        <Button className='rounded-lg bg-green-500 font-helvetica hover:bg-green-600 transition hover:text-white hover:shadow-2xl border-green-500 hover:border-green-600 shadow-inner shadow-lg px-10 py-3 mt-10'>
          <FaWhatsapp className='mr-2' />
          Whatsapp
        </Button>
      </motion.div>
    </div>
  );
}

export default Startproject;
