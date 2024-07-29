import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className='fixed bottom-24 right-4 transition-all'>
      <button
        onClick={scrollToTop}
        className={`flex items-center justify-center w-12 h-12 bg-warna-abu border border-black text-white rounded-full shadow-lg hover:bg-black transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6 rotate-180'
        >
          <path d='M12 5c.552 0 1 .448 1 1v11.586l3.293-3.293c.391-.391 1.023-.391 1.414 0 .391.391.391 1.023 0 1.414l-5 5c-.391.391-1.023.391-1.414 0l-5-5c-.391-.391-.391-1.023 0-1.414.391-.391 1.023-.391 1.414 0L11 17.586V6c0-.552.448-1 1-1z' />
        </svg>
      </button>
    </div>
  );
};

export default BackToTopButton;
