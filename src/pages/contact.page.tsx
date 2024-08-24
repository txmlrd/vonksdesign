import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaArrowDown, FaWhatsapp } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Footer from '@/components/page/Footer';
import Navbar from '@/components/page/Navbar';
import Seo from '@/components/Seo';

import Startproject from '@/pages/component/Startproject';

function Contact() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: 'How do I get started?',
      answer:
        'Getting started is simple! Fill out our contact form or give us a call. Our team will schedule an initial consultation to understand your project needs and provide a free estimate.',
    },
    {
      question: 'What services does we offer?',
      answer:
        'We offer a comprehensive range of services, including architectural design, interior design, budget planning (RAB), construction management, and consultation. We also specialize in sustainable design practices.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'Our pricing depends on the project scope, design requirements, and materials used. We create tailored plans that suit your budget while maintaining high-quality standards.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        'The timeline varies depending on the complexity and scale of the project. After our initial consultation, we will provide you with a detailed project schedule and estimated completion date.',
    },
    {
      question: 'Do you offer post-construction services?',
      answer:
        'Yes, we offer post-construction services including maintenance, renovations, and regular inspections to ensure the long-term quality and durability of your property.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept several payment methods, including bank transfers and credit card payments. Specific details can be discussed during our consultation to find a method that works best for you.',
    },
    {
      question: 'Can you work with specific design styles or themes?',
      answer:
        'Absolutely! We specialize in various design styles, from modern and minimalist to traditional and tropical. We work closely with clients to create a design that reflects their personal preferences and vision.',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slideUpWithBlur = {
    hidden: { y: 50, opacity: 0, filter: 'blur(5px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  };

  const ref = useRef(null);

  const tagLine = useInView(ref, { once: true });
  return (
    <Layout>
      <Seo templateTitle='Contact' />
      <main>
        <Navbar />

        <section ref={ref} className='bg-warna-abu'>
          <div
            className='pt-[123px] bg-fixed bg-cover bg-center flex min-h-screen flex-col justify-center items-center text-white relative'
            style={{
              backgroundImage: "url('/images/pagecover/cover.jpg')",
            }}
          >
            <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
            <motion.div
              initial='hidden'
              animate={tagLine ? 'visible' : 'hidden'}
              variants={slideUpWithBlur}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='flex flex-col justify-center items-center z-10'
            >
              <p className='text-center md:text-2xl font-thin font-futura tracking-[0.90em]'>
                VONK's DESIGN
              </p>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-center mt-4 font-black text-6xl md:text-8xl font-helvetica'>
                  Contact
                </h1>
                <p className='tracking-[0.90em] font-helveticalight text-center md:text-xl pt-10'>
                  Home / Contact
                </p>
              </div>

              <Button
                onClick={scrollToContact}
                className='rounded-full bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white mt-10 motion-safe:animate-bounce'
              >
                <FaArrowDown />
              </Button>
            </motion.div>
          </div>
        </section>

        <section id='contact' className='bg-warna-abu'>
          <div className='  flex flex-col max-w-[1700px] mx-auto  xl:p-20 p-10  text-white items-center justify-center  '>
            <div className=' w-full flex flex-col items-start pb-10'>
              <h1 className='text-center font-helvetica xL:text-7xl text-5xl font-bold border-warna-gold '>
                Get in touch
              </h1>
              <p className='font-helvetica text-xl xl:w-1/2 pt-5'>
                We would love to hear from you! Whether you have a question
                about our services, need a consultation, or want to discuss your
                next project, our team is here to help.
              </p>
            </div>
            <div className='flex xl:flex-row flex-col  w-full justify-center '>
              <div className=' xl:pr-10 xl:border-r-2 border-b-2 pb-10   xl:pb-0 xl:border-b-0  xl:mb-0 mb-5 w-full xl:h-auto h-96  border-gray-300 '>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1120.0278809928989!2d115.18948354888046!3d-8.655521852177321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2412b04d911fd%3A0xb1c53bad7f01fe6e!2sVonk&#39;s%20Design!5e0!3m2!1sen!2sid!4v1724521466854!5m2!1sen!2sid'
                  className='w-full h-full rounded-lg'
                  loading='lazy'
                />
              </div>
              <div className='xl:pl-10 flex flex-col xl:w-2/3'>
                <div className='flex flex-col mb-10'>
                  <h1 className=' font-helvetica text-5xl font-bold pb-1'>
                    Chat us on WhatsApp
                  </h1>
                  <p>Give us a chat for immediate assistance.</p>
                  <Button className='space-x-3 mt-5 rounded-none bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white w-fit'>
                    <FaWhatsapp />
                    <h1>
                      <a href='https://wa.me/+62895411695042'>
                        +62 895411695042
                      </a>
                    </h1>
                  </Button>
                </div>
                <div className='flex flex-col mb-10'>
                  <h1 className='font-helvetica text-5xl font-bold pb-1'>
                    Address
                  </h1>
                  <p>Visit our office for a face-to-face consultation.</p>
                  <Button className='space-x-3 mt-5 rounded-none bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white w-fit'>
                    <SiGooglemaps />
                    <h1>
                      <a href='https://maps.app.goo.gl/4KvS6BD4bDhpGRfd8'>
                        Jl. Tangkuban Perahu III Gg. Padang Kangkung,
                        Padangsambian, Bali
                      </a>
                    </h1>
                  </Button>
                </div>
                <div className='flex flex-col mb-10'>
                  <h1 className='font-helvetica text-5xl font-bold pb-1'>
                    Email Us
                  </h1>
                  <p>
                    Send us an email for any inquiries or project discussions.
                  </p>
                  <Button className='space-x-3 mt-5 rounded-none bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white w-fit'>
                    <MdEmail />
                    <h1>
                      <a href='mailto:galuh_pendit@yahoo.com'>
                        galuh_pendit@yahoo.com
                      </a>
                    </h1>
                  </Button>
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-helvetica text-5xl font-bold pb-1'>
                    Follow Us
                  </h1>
                  <p>
                    Stay connected with us on social media for the latest
                    updates, projects, and design inspiration.
                  </p>
                  <Button className='space-x-3 mt-5 rounded-none bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white w-fit'>
                    <AiFillInstagram />
                    <h1>
                      <a href='https://www.instagram.com/vonks_designbali/'>
                        @vonks_designbali
                      </a>
                    </h1>
                  </Button>
                </div>
              </div>
            </div>
            {/* START FAQ */}
            <section className='mt-20 w-full '>
              <div className=' flex flex-col xl:flex-row'>
                <div className='flex flex-col xl:w-1/2 mb-10 xl:mb-0'>
                  <h2 className='font-thin text-5xl'>FAQ</h2>
                  <h1 className='font-bold xl:text-8xl md:text-7xl text-5xl'>
                    Frequently <br />
                    Asked <br />
                    Questions.
                  </h1>
                </div>
                <div className='flex flex-col  xl:w-[1000px]'>
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`px-5 pb-3 flex flex-col mb-5 ${
                        index === faqs.length - 1 ? '' : 'border-b-2'
                      }`}
                    >
                      <div className='flex flex-row items-center justify-between'>
                        <h1 className='text-xl font-bold'>{faq.question}</h1>
                        <div
                          className='p-1 rounded-full border border-white cursor-pointer'
                          onClick={() => toggleIndex(index)}
                        >
                          {activeIndex === index ? (
                            <IoMdArrowDropdown
                              size={25}
                              className='rotate-0 transition-all duration-300 ease-in-out'
                            />
                          ) : (
                            <IoMdArrowDropdown
                              className='rotate-180 transition-all duration-300 ease-in-out'
                              size={25}
                            />
                          )}
                        </div>
                      </div>
                      <p
                        className={
                          activeIndex === index
                            ? 'faq-answer-visible transition-all duration-500 ease-in-out mr-10  '
                            : 'faq-answer-hidden -translate-y-3 blur-sm transition-all duration-500 ease-in-out mr-10'
                        }
                      >
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* END FAQ */}
          </div>
        </section>

        <Startproject />
        <Footer />
      </main>
    </Layout>
  );
}

export default Contact;
