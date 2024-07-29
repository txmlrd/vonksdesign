import React from 'react';
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
        'Getting started is easy! Simply fill out our contact form or give us a call. Our team will reach out to you to discuss your project and provide you with a free quote.',
    },
    {
      question: 'What services do you offer?',
      answer:
        'We offer a range of services including web development, mobile app development, and consulting. Reach out to us for more details.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'Our pricing varies based on the project requirements. We offer custom quotes based on your specific needs.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        'The timeline for each project varies based on the scope of work. We will provide you with an estimated timeline during our initial consultation.',
    },
    {
      question: 'Do you offer maintenance services?',
      answer:
        'Yes, we offer ongoing maintenance services to ensure your website or app remains up-to-date and secure.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept a variety of payment methods including credit cards, bank transfers, and PayPal. Contact us for more details.',
    },
  ];
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main>
        <Navbar />

        <section className='bg-warna-abu'>
          <div
            className='pt-[123px] bg-fixed bg-cover bg-center font-helvetica flex min-h-screen flex-col justify-center items-center text-white'
            style={{
              backgroundImage: "url('/images/pagecover/landingpage.png')",
            }}
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
              // onClick={scrollToVisiMisi}
              className='rounded-full bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white mt-10 motion-safe:animate-bounce'
            >
              <FaArrowDown />
            </Button>
          </div>
        </section>

        <section className='bg-warna-abu'>
          <div className='  flex flex-col max-w-[2000px] mx-auto  p-20  text-white items-center justify-center  '>
            <div className=' w-full flex flex-col items-start pb-10'>
              <h1 className='text-center font-helvetica text-7xl font-bold border-warna-gold '>
                Get in touch
              </h1>
              <p className='font-helveticalight text-xl w-1/2 pt-5'>
                We would love to hear from you! Whether you have a question
                about our services, need a consultation, or want to discuss your
                next project, our team is here to help.
              </p>
            </div>
            <div className='flex xl:flex-row flex-col  w-full justify-center '>
              <div className=' xl:pr-10 xl:border-r-2 border-b-2 pb-10   xl:pb-0 xl:border-b-0  xl:mb-0 mb-5 w-full xl:h-auto h-96  border-gray-300 '>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.377268584754!2d115.18670561110474!3d-8.655622591355634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2479a018b7225%3A0x77e8736148c7ee26!2sRumah%20Kost%20G5!5e0!3m2!1sid!2sid!4v1721445741763!5m2!1sid!2sid'
                  className='w-full h-full rounded-lg'
                  loading='lazy'
                />
              </div>
              <div className='pl-10 flex flex-col  w-2/3'>
                <div className='flex flex-col mb-10'>
                  <h1 className=' font-helvetica text-5xl font-bold pb-1'>
                    Call us on WhatsApp
                  </h1>
                  <p>Give us a call for immediate assistance.</p>
                  <Button className='space-x-3 mt-5 rounded-none bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white w-fit'>
                    <FaWhatsapp />
                    <h1>
                      <a href='tel:+6281234567890'>+62 812 3456 7890</a>
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
                      <a href='https://maps.app.goo.gl/uSFofmWE7GzRBTUYA'>
                        Jl. Tangkuban perahu III No.9 kav 11/12
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
                      <a href='mailto:vonksdesign@gmail.com'>
                        vonksdesign@gmail.com
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
            <section className='mt-20 w-full  '>
              <div className=' flex flex-row'>
                <div className='flex flex-col w-1/2'>
                  <h2 className='font-thin text-5xl'>FAQ</h2>
                  <h1 className='font-bold xl:text-8xl md:text-7xl'>
                    Frequently <br />
                    Asked <br />
                    Questions.
                  </h1>
                </div>
                <div className='flex flex-col w-1/2 xl:w-[1000px]'>
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`px-5 pb-3 flex flex-col mb-5 ${
                        index === faqs.length - 1 ? '' : 'border-b-2'
                      }`}
                    >
                      <div className='flex flex-row items-center justify-between'>
                        <h1 className='text-xl'>{faq.question}</h1>
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
                            ? 'faq-answer-visible transition-all duration-500 ease-in-out mr-10'
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
