import { useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRef } from 'react';
import CountUp from 'react-countup';
import { FaArrowDown } from 'react-icons/fa';
import ScrollTrigger from 'react-scroll-trigger';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Footer from '@/components/page/Footer';
import Navbar from '@/components/page/Navbar';
import Seo from '@/components/Seo';

import Startproject from '@/pages/component/Startproject';

function About() {
  // State to manage which section is active
  const [activeSection, setActiveSection] = useState('mission');

  //scroll
  const [counterOn, setCounterOn] = useState(false);

  // Handler to set active section
  const setSection = (section: string) => {
    setActiveSection(section);
  };

  // Scroll to the section with id 'visimisi'
  const scrollToVisiMisi = () => {
    const element = document.getElementById('visimisi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <Layout>
      <Seo templateTitle='About' />
      <main>
        <Navbar />
        <section className='bg-warna-abu'>
          <div
            className='pt-[123px] bg-fixed bg-cover bg-center flex min-h-screen flex-col justify-center items-center text-white'
            style={{
              backgroundImage: "url('/images/pagecover/landingpage.png')",
            }}
          >
            <p className='text-center xl:text-2xl font-thin font-futura tracking-[0.90em]'>
              VONK's DESIGN
            </p>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-center mt-4 font-black text-6xl xl:text-8xl font-helvetica'>
                About Us
              </h1>
              <p className='tracking-[0.90em] font-helveticalight text-center xl:text-xl pt-10'>
                Home / About Us
              </p>
            </div>

            <Button
              onClick={scrollToVisiMisi}
              className='rounded-full bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white mt-10 motion-safe:animate-bounce'
            >
              <FaArrowDown />
            </Button>
          </div>
        </section>

        <section id='visimisi'>
          <div
            className='p-5 xl:p-20 py-20 bg-fixed bg-cover bg-center flex min-h-screen flex-col justify-center items-center text-warna-abu'
            style={{
              backgroundImage: "url('/images/pagecover/visimisi.png')",
            }}
          >
            <div className='flex flex-col justify-center items-center text-center'>
              <h1 className='text-shadow-xl text-center font-helvetica text-4xl xl:text-6xl font-bold pb-5 xl:pb-10'>
                Mission, Vision, and Goals
              </h1>
              <div className='flex flex-row space-x-5 xl:space-x-10'>
                <Button
                  onClick={() => setSection('mission')}
                  className={`font-bold rounded-xl backdrop-blur-sm text-warna-abu bg-transparent font-helvetica hover:bg-warna-gold transition-all hover:text-warna-abu hover:shadow-2xl border-warna-abu px-5 xl:px-10 py-3 ${
                    activeSection === 'mission'
                      ? 'bg-warna-gold'
                      : 'bg-transparent'
                  }`}
                >
                  Our Mission
                </Button>
                <Button
                  onClick={() => setSection('vision')}
                  className={`font-bold rounded-xl backdrop-blur-sm text-warna-abu bg-transparent font-helvetica hover:bg-warna-gold transition-all hover:text-warna-abu hover:shadow-2xl border-warna-abu px-5 xl:px-10 py-3 ${
                    activeSection === 'vision'
                      ? 'bg-warna-gold'
                      : 'bg-transparent'
                  }`}
                >
                  Our Vision
                </Button>
                <Button
                  onClick={() => setSection('aim')}
                  className={`font-bold rounded-xl backdrop-blur-sm text-warna-abu bg-transparent font-helvetica hover:bg-warna-gold transition-all hover:text-warna-abu hover:shadow-2xl border-warna-abu px-5 xl:px-10 py-3 ${
                    activeSection === 'aim' ? 'bg-warna-gold' : 'bg-transparent'
                  }`}
                >
                  Our Aim
                </Button>
              </div>
            </div>

            <div
              className={`mx-5 xl:mx-10 mt-5 xl:mt-10 p-5 xl:p-20 max-w-full xl:max-w-[1500px] bg-gray-200 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl flex flex-col xl:flex-row ${
                activeSection === 'mission'
                  ? 'opacity-100 block'
                  : 'opacity-0 hidden'
              }`}
            >
              <div className='flex flex-col w-full xl:w-1/2 pr-0 xl:pr-10'>
                <div className='flex flex-col items-center xl:items-start space-y-1 pb-5 xl:pb-10'>
                  <h1 className='text-3xl xl:text-5xl  font-black font-helvetica text-warna-abu'>
                    Our Mission
                  </h1>
                  <div className='w-1/2 xl:w-1/4 border-warna-gold rounded-xl xl:border-2'></div>
                </div>
                <div className='w-full xl:hidden flex justify-center items-center mb-5'>
                  <Image
                    src='/images/pagecover/landingpage.png'
                    alt='Landing Page'
                    width={500}
                    height={250}
                    className='rounded-xl'
                  />
                </div>
                <p className='text-lg xl:text-2xl mt-5 xl:mt-10'>
                  At Vonk Design, our mission is to transform your visions into
                  reality. We believe that great design combines creativity,
                  functionality, and sustainability. Our goal is to create
                  spaces that not only meet your needs but also inspire and
                  elevate your everyday life.
                  <br />
                  <br />
                </p>
                <h1 className='text-lg xl:text-2xl'>We strive to :</h1>
                <ul className='text-lg xl:text-2xl list-disc ml-5 mt-2'>
                  <li>Deliver innovative and practical design solutions.</li>
                  <li>
                    Ensure every project reflects the unique needs and desires
                    of our clients.
                  </li>
                  <li>
                    Maintain the highest standards of quality and craftsmanship.
                  </li>
                </ul>
              </div>
              <div className='hidden xl:flex w-1/2 justify-center items-center'>
                <Image
                  src='/images/pagecover/landingpage.png'
                  alt='Landing Page'
                  width={1000}
                  height={500}
                  className='rounded-xl'
                />
              </div>
            </div>

            <div
              className={`mx-5 xl:mx-10 mt-5 xl:mt-10 p-5 xl:p-20 max-w-full xl:max-w-[1500px] bg-gray-200 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl flex flex-col xl:flex-row ${
                activeSection === 'vision'
                  ? 'opacity-100 block'
                  : 'opacity-0 hidden'
              }`}
            >
              <div className='flex flex-col w-full xl:w-1/2 pr-0 xl:pr-10'>
                <div className='flex flex-col items-center xl:items-start space-y-1 pb-5 xl:pb-10'>
                  <h1 className='text-3xl xl:text-5xl font-black font-helvetica text-warna-abu'>
                    Our Vision
                  </h1>
                  <div className='w-1/2 xl:w-1/4 border-warna-gold rounded-xl xl:border-2'></div>
                </div>
                <div className='w-full xl:hidden flex justify-center items-center mb-5'>
                  <Image
                    src='/images/pagecover/landingpage.png'
                    alt='Landing Page'
                    width={500}
                    height={250}
                    className='rounded-xl'
                  />
                </div>
                <p className='text-lg xl:text-2xl mt-5 xl:mt-10'>
                  At Vonk Design, our vision is to create spaces that inspire
                  and elevate daily life through innovative and sustainable
                  design solutions.
                  <br />
                  <br />
                </p>
                <h1 className='text-lg xl:text-2xl'>We aim to :</h1>
                <ul className='text-lg xl:text-2xl list-disc ml-5 mt-2'>
                  <li>Lead the design industry with groundbreaking ideas.</li>
                  <li>
                    Promote sustainability and eco-friendly practices in all
                    projects.
                  </li>
                  <li>
                    Foster creativity and collaboration in every aspect of our
                    work.
                  </li>
                </ul>
              </div>
              <div className='hidden xl:flex w-1/2 justify-center items-center'>
                <Image
                  src='/images/pagecover/landingpage.png'
                  alt='Landing Page'
                  width={1000}
                  height={500}
                  className='rounded-xl'
                />
              </div>
            </div>

            <div
              className={`mx-5 xl:mx-10 mt-5 xl:mt-10 p-5 xl:p-20 max-w-full xl:max-w-[1500px] bg-gray-200 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl flex flex-col xl:flex-row ${
                activeSection === 'aim'
                  ? 'opacity-100 block'
                  : 'opacity-0 hidden'
              }`}
            >
              <div className='flex flex-col w-full xl:w-1/2 pr-0 xl:pr-10'>
                <div className='flex flex-col items-center xl:items-start space-y-1 pb-5 xl:pb-10'>
                  <h1 className='text-3xl xl:text-5xl font-black font-helvetica text-warna-abu'>
                    Our Aim
                  </h1>
                  <div className='w-1/2 xl:w-1/4 border-warna-gold rounded-xl xl:border-2'></div>
                </div>
                <div className='w-full xl:hidden flex justify-center items-center mb-5'>
                  <Image
                    src='/images/pagecover/landingpage.png'
                    alt='Landing Page'
                    width={500}
                    height={250}
                    className='rounded-xl'
                  />
                </div>
                <p className='text-lg xl:text-2xl mt-5 xl:mt-10'>
                  At Vonk Design, our aim is to deliver projects that exceed
                  expectations by combining creativity, functionality, and
                  precision.
                  <br />
                  <br />
                </p>
                <h1 className='text-lg xl:text-2xl'>We focus on :</h1>
                <ul className='text-lg xl:text-2xl list-disc ml-5 mt-2'>
                  <li>Exceeding client expectations with every project.</li>
                  <li>
                    Ensuring that every design element serves a practical
                    purpose while remaining aesthetically pleasing.
                  </li>
                  <li>
                    Maintaining clear and open communication with clients
                    throughout the project.
                  </li>
                </ul>
              </div>
              <div className='hidden xl:flex w-1/2 justify-center items-center'>
                <Image
                  src='/images/pagecover/landingpage.png'
                  alt='Landing Page'
                  width={1000}
                  height={500}
                  className='rounded-xl'
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className=' flex flex-col p-5 xl:p-20 bg-warna-abu justify-center items-center text-white'>
            <div className='mx-5 xl:mx-10 mt-5 xl:mt-10 p-5 xl:p-20 max-w-full xl:max-w-[1500px] bg-opacity-20 backdrop-blur-sm flex flex-col '>
              <div
                ref={ref}
                className={` flex flex-col xl:flex-row transition-all duration-1000 ease-in-out ${
                  isInView ? 'opacity-100' : 'opacity-0 -translate-x-20 blur-xl'
                }`}
                // style={{
                //   transform: isInView ? 'none' : 'translateX(-200px)',
                //   opacity: isInView ? 1 : 0,
                //   transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                // }}
              >
                <div className='w-full xl:w-1/2 flex items-center justify-center mb-5 xl:mb-0'>
                  <Image
                    src='/images/pagecover/landingpage.png'
                    alt='Landing Page'
                    width={500}
                    height={500}
                    className='rounded-xl'
                  />
                </div>

                <div className='flex flex-col w-full xl:w-1/2 font-helvetica xl:pr-32'>
                  <h2 className='font-helvetica text-2xl xl:text-3xl'>
                    About Us
                  </h2>
                  <h1 className='text-3xl xl:text-5xl font-black font-helvetica'>
                    We Always Make The Best
                  </h1>
                  <p className='text-base xl:text-xl font-thin font-helvetica pt-5 xl:pt-10 text-justify'>
                    With over{' '}
                    <span className='font-bold'>
                      30 years of experience in the industry
                    </span>
                    , Vonk's Design has established itself as a trusted name in
                    architectural design, budget planning, and contractor
                    services. Our commitment to excellence and customer
                    satisfaction has driven us to deliver outstanding results in
                    every project we undertake.
                  </p>
                </div>
              </div>

              <div
                className={`grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 transition-all duration-1000 ease-in-out gap-10 xl:gap-20 lg:gap-28 justify-items-center mt-5 xl:mt-10 font-helvetica ${
                  isInView ? 'opacity-100' : 'opacity-0 translate-y-20 blur-xl'
                }`}
              >
                <div className='flex flex-col w-full xl:w-[467px]'>
                  <div className='flex flex-row space-x-5 xl:space-x-10'>
                    <h1 className='text-6xl xl:text-8xl flex justify-center items-center font-bold text-warna-gold'>
                      {counterOn && (
                        <CountUp start={0} end={30} duration={5} delay={0} />
                      )}
                      +
                    </h1>
                    <h2 className='text-4xl xl:text-5xl font-bold'>
                      Years <br />
                      Experience
                    </h2>
                  </div>
                  <p className='text-base xl:text-lg mt-5 text-justify'>
                    Leveraging decades of expertise to deliver exceptional
                    results, <span className='font-bold'>since 1994</span>. Our
                    extensive experience ensures that every project is completed
                    to the highest standards of quality and professionalism.
                  </p>
                </div>
                <div className='flex flex-col w-full xl:w-[467px]'>
                  <div className='flex flex-row space-x-5 xl:space-x-10'>
                    <h1 className='text-6xl xl:text-8xl flex justify-center items-center font-bold text-warna-gold'>
                      {counterOn && (
                        <CountUp start={0} end={50} duration={5} delay={0} />
                      )}
                      +
                    </h1>
                    <h2 className='text-4xl xl:text-5xl font-bold'>
                      Projects
                      <br />
                      Executed
                    </h2>
                  </div>
                  <p className='text-base xl:text-lg mt-5 text-justify'>
                    Providing detailed and accurate budget plans to ensure
                    financial transparency and efficiency. Our diverse portfolio
                    showcases our ability to handle projects of varying scales
                    and complexities.
                  </p>
                </div>
                <div className='flex flex-col w-full xl:w-[467px]'>
                  <div className='flex flex-row space-x-5 xl:space-x-10'>
                    <h1 className='text-6xl xl:text-8xl flex justify-center items-center font-bold text-warna-gold'>
                      {counterOn && (
                        <CountUp start={0} end={100} duration={5} delay={0} />
                      )}
                      +
                    </h1>
                    <h2 className='text-4xl xl:text-5xl font-bold'>
                      Satisfied
                      <br />
                      Clients
                    </h2>
                  </div>
                  <p className='text-base xl:text-lg mt-5 text-justify'>
                    We have built a strong reputation based on trust and client
                    satisfaction. Over 100 clients have chosen Vonk Design for
                    their projects, and many continue to work with us for their
                    ongoing needs.
                  </p>
                </div>
                <div className='flex flex-col w-full xl:w-[467px]'>
                  <div className='flex flex-row space-x-5 xl:space-x-10'>
                    <h1 className='text-6xl xl:text-8xl flex justify-center items-center font-bold text-warna-gold'>
                      {counterOn && (
                        <CountUp start={0} end={10} duration={5} delay={0} />
                      )}
                      +
                    </h1>
                    <h2 className='text-4xl xl:text-5xl font-bold'>
                      Expert
                      <br />
                      Teams
                    </h2>
                  </div>
                  <p className='text-base xl:text-lg mt-5 text-justify'>
                    Our firm comprises over 10 specialized teams, each focusing
                    on different aspects of design and construction. This allows
                    us to provide comprehensive services that cover every detail
                    of a project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Startproject />
        <Footer />
      </main>
    </Layout>
  );
}

export default About;
