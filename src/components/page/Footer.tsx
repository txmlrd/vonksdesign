import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='flex flex-col bg-warna-abu pb-5 px-20 pt-10 justify-center items-center'>
      <a href='/'>
        <Image
          src='/images/vonkslogo.svg'
          alt='Logo'
          width={110}
          height={100}
        />
      </a>

      <ul className='mb-10 flex-col md:flex-row flex md:space-x-10 space-y-5 md:space-y-0  justify-center items-center text-xl pt-10 md:pt-0 text-white transition-all mt-10'>
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
          <FaSearch />
        </li> */}
      </ul>
      <h1 className='text-white font-helvetical text-center'>
        Find and Follow Us On :
      </h1>
      <div className='flex flex-row  text-warna-gold space-x-3 mt-3'>
        <a
          href='https://www.instagram.com/vonks_designbali/'
          className='hover:scale-150 hover:animate-pulse hover:rotate-6 transition-all '
        >
          <FaInstagram size={30} />
        </a>
        <a
          href='mailto:galuh_pendit@yahoo.com'
          className='hover:scale-150 hover:animate-pulse hover:rotate-6 transition-all '
        >
          {' '}
          <MdEmail size={30} />
        </a>
        <a
          href='https://wa.me/+62895411695042'
          className='hover:scale-150 hover:animate-pulse hover:rotate-6 transition-all '
        >
          {' '}
          <FaWhatsapp size={30} />
        </a>
        <a
          href='https://maps.app.goo.gl/4KvS6BD4bDhpGRfd8'
          className='hover:scale-150 hover:animate-pulse hover:rotate-6 transition-all '
        >
          {' '}
          <SiGooglemaps size={30} />
        </a>
      </div>
      <p className='text-white font-helvetical text-center mt-5'>
        Jl. Tangkuban Perahu III Gg. Padang Kangkung, Padangsambian, Kec.
        Denpasar Barat, Kota Denpasar, Bali 80118
      </p>
      <div className='border-t-2 flex w-full justify-center pt-5 mt-10'>
        <p className='text-white font-helvetical'>{year} ©Vonk’s Design</p>
      </div>
    </div>
  );
}

export default Footer;
