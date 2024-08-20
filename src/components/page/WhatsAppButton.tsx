import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const year = new Date().getFullYear();
  return (
    <div className='fixed bottom-4 right-4 '>
      <span className='flex absolute items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 motion-safe:animate-ping '></span>
      <button
        onClick={togglePopup}
        className='relative flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-8 h-8'
        >
          <path d='M12.001 2.002c-5.523 0-10 4.478-10 10a9.933 9.933 0 001.803 5.733L2 22l4.404-1.163A9.946 9.946 0 0012 22.001c5.522 0 10-4.477 10-10 0-5.522-4.478-9.999-10-9.999zm0 18.154a8.116 8.116 0 01-4.222-1.205l-.307-.186-2.611.692.699-2.542-.176-.283A8.086 8.086 0 013.889 12.001c0-4.478 3.635-8.113 8.112-8.113 4.478 0 8.113 3.635 8.113 8.113 0 4.478-3.635 8.113-8.113 8.113z' />
          <path d='M17.472 14.33c-.304-.152-1.798-.887-2.077-.988-.278-.1-.48-.152-.682.152-.199.305-.784.988-.962 1.192-.178.199-.356.225-.66.076-.304-.152-1.283-.47-2.44-1.497-.904-.805-1.515-1.795-1.693-2.099-.178-.305-.019-.469.134-.621.136-.135.304-.356.456-.533.153-.178.203-.304.304-.506.1-.203.051-.38-.025-.533-.077-.152-.682-1.644-.936-2.256-.246-.592-.5-.509-.682-.518-.178-.008-.38-.01-.583-.01-.203 0-.533.076-.813.38-.278.304-1.063 1.039-1.063 2.534 0 1.494 1.087 2.939 1.239 3.137.152.203 2.139 3.26 5.184 4.573.725.313 1.292.5 1.732.64.728.23 1.388.198 1.908.12.582-.086 1.798-.731 2.052-1.438.254-.707.254-1.315.178-1.438-.076-.127-.278-.203-.583-.356z' />
        </svg>
      </button>

      <div
        className={`absolute bottom-0 right-20 w-80 p-4 bg-white rounded-lg shadow-lg border duration-300 ease-in-out border-gray-200 transition-all ${
          isOpen ? 'opacity-100' : ' opacity-0 translate-y-56'
        }`}
      >
        <p>
          If you have any{' '}
          <span className='font-bold'>questions and need help</span>, feel free
          to chat with us on WhatsApp below !
        </p>
        <a
          href='https://wa.me/+62895411695042?text=Halo,%20saya%20ingin%20bertanya%20tentang%20desain'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition duration-300'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6 mr-2'
          >
            <path d='M12.001 2.002c-5.523 0-10 4.478-10 10a9.933 9.933 0 001.803 5.733L2 22l4.404-1.163A9.946 9.946 0 0012 22.001c5.522 0 10-4.477 10-10 0-5.522-4.478-9.999-10-9.999zm0 18.154a8.116 8.116 0 01-4.222-1.205l-.307-.186-2.611.692.699-2.542-.176-.283A8.086 8.086 0 013.889 12.001c0-4.478 3.635-8.113 8.112-8.113 4.478 0 8.113 3.635 8.113 8.113 0 4.478-3.635 8.113-8.113 8.113z' />
            <path d='M17.472 14.33c-.304-.152-1.798-.887-2.077-.988-.278-.1-.48-.152-.682.152-.199.305-.784.988-.962 1.192-.178.199-.356.225-.66.076-.304-.152-1.283-.47-2.44-1.497-.904-.805-1.515-1.795-1.693-2.099-.178-.305-.019-.469.134-.621.136-.135.304-.356.456-.533.153-.178.203-.304.304-.506.1-.203.051-.38-.025-.533-.077-.152-.682-1.644-.936-2.256-.246-.592-.5-.509-.682-.518-.178-.008-.38-.01-.583-.01-.203 0-.533.076-.813.38-.278.304-1.063 1.039-1.063 2.534 0 1.494 1.087 2.939 1.239 3.137.152.203 2.139 3.26 5.184 4.573.725.313 1.292.5 1.732.64.728.23 1.388.198 1.908.12.582-.086 1.798-.731 2.052-1.438.254-.707.254-1.315.178-1.438-.076-.127-.278-.203-.583-.356z' />
          </svg>
          Chat with us !
        </a>
        <p className='mt-2 text-sm text-gray-500 text-center'>
          {year} ©Vonk’s Design
        </p>
      </div>
    </div>
  );
};

export default WhatsAppButton;
