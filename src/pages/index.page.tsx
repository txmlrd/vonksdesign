import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
//data
import fs from 'fs';
import Image from 'next/image';
import path from 'path';
import { useState } from 'react';
// Remove the import statement for 'useState'
import * as React from 'react';
import { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { IoConstructOutline } from 'react-icons/io5';
import { TfiWrite } from 'react-icons/tfi';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
// Import Swiper styles
// Import Swiper styles
import 'swiper/css';

//end data
import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Footer from '@/components/page/Footer';
import Navbar from '@/components/page/Navbar';
import Seo from '@/components/Seo';

import Startproject from '@/pages/component/Startproject';
export async function getStaticProps() {
  try {
    const projectsFilePath = path.join(process.cwd(), 'src/data/projects.json');
    const reviewFilePath = path.join(process.cwd(), 'src/data/review.json');

    const projectsJsonData = fs.readFileSync(projectsFilePath, 'utf-8');
    const reviewJsonData = fs.readFileSync(reviewFilePath, 'utf-8');

    const projects = JSON.parse(projectsJsonData);
    const reviews = JSON.parse(reviewJsonData);

    return {
      props: {
        projects,
        reviews,
      },
    };
  } catch (error) {
    console.error('Error loading data:', error);
    return {
      props: {
        projects: [],
        reviews: [],
      },
    };
  }
}

interface Project {
  image: {
    src: string;
    alt: string;
  };
  link: string;
  title: string;
  location: string;
  year: string;
  budget: string;
  description: string;
  gallery: {
    src: string;
    alt: string;
  }[];
}

interface HomePageProps {
  projects: Project[];
  reviews: {
    quote: string;
    author: string;
    year: string;
    content: string;
  }[];
}

const HomePage = ({ projects, reviews }: HomePageProps) => {
  const [openingOn, setOpeningOn] = useState(false);
  const [companyValueOn, setCompanyValueOn] = useState(false);
  const [ourMissionOn, setOurMissionOn] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const [isPopupConstructionOpen, setIsPopupConstructionOpen] = useState(false);
  const handlePopupConstructionOpen = () => {
    setIsPopupConstructionOpen(true);
  };

  const handlePopupConstructionClose = () => {
    setIsPopupConstructionOpen(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeAndSlideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const slideUpWithBlur = {
    hidden: { y: 50, opacity: 0, filter: 'blur(5px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  };
  const slideRight = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideLeft = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const tagLine = useInView(ref, { once: true });
  const companyValue = useInView(ref2, { once: true });
  const ourMission = useInView(ref3, { once: true });

  return (
    <Layout>
      <Seo />
      <main className='justify-center bg-warna-abu'>
        <Navbar />

        {/* START LANDING PAGE */}
        <section ref={ref} className='bg-warna-abu'>
          <div
            className='pt-[123px] bg-fixed bg-cover bg-center flex min-h-screen flex-col justify-center items-center text-white'
            style={{
              backgroundImage: "url('/images/pagecover/landingpage.png')",
            }}
          >
            <motion.p
              initial='hidden'
              animate={tagLine ? 'visible' : 'hidden'}
              variants={slideUpWithBlur}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='text-center md:text-2xl font-thin font-futura tracking-[0.90em]'
            >
              VONK's DESIGN
            </motion.p>
            <motion.div
              initial='hidden'
              animate={tagLine ? 'visible' : 'hidden'}
              variants={slideUpWithBlur}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='flex flex-col justify-center items-center'
            >
              <h1 className='text-center mt-4 font-black text-6xl xl:text-8xl md:text-7xl font-helvetica'>
                TURNING IDEAS INTO <br /> REALITY
              </h1>
              <p className='w-3/4 font-helvetica text-center md:text-xl pt-10'>
                We specialize in providing top-notch contracting services for
                residential and commercial projects.
              </p>
            </motion.div>
            <motion.a
              href='/projects'
              initial='hidden'
              animate={tagLine ? 'visible' : 'hidden'}
              variants={slideUpWithBlur}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Button className='rounded-none bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white px-10 py-3 mt-10'>
                VIEW PROJECTS
              </Button>
            </motion.a>
          </div>
        </section>

        {/* END LANDING PAGE */}

        {/* START COMPANY VALUE  */}

        <section ref={ref2} className='bg-warna-abu'>
          <div className='flex md:flex-row flex-col md:space-y-0 space-y-10 xl:scale-100 scale-90 justify-center items-center bg-warna-abu text-white py-32'>
            <motion.div
              initial='hidden'
              animate={companyValue ? 'visible' : 'hidden'}
              variants={slideUpWithBlur}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              onClick={handlePopupOpen}
              className='hover:scale-y-125 cursor-pointer transition-all group duration-300 rounded-lg hover:bg-warna-gold py-10 flex flex-col justify-center items-center'
            >
              <div className=' pb-5 group-hover:scale-110 transition-all duration-300 group-hover:-rotate-3 '>
                <TfiWrite
                  size={100}
                  className='text-warna-gold group-hover:text-warna-abu '
                />
              </div>

              <h1 className=' font-helvetica text-2xl group-hover:text-warna-abu font-bold'>
                Design Consultation
              </h1>
              <p className=' font-helvetica text-center w-3/4 group-hover:text-warna-abu '>
                Collaborate with our expert designers to conceptualize and plan
                your project.
              </p>
            </motion.div>
            {/* <div className='flex flex-col justify-center items-center '>
              <div className='pb-5'>
                <PiProjectorScreenChart
                  size={100}
                  className='text-warna-gold '
                />
              </div>

              <h1 className='font-helvetica text-xl font-normal'>
                Project Management
              </h1>
              <p className='font-helveticalight  text-center w-3/4'>
                Ensure your project stays on track with our efficient and
                transparent management processes.
              </p>
            </div> */}
            <motion.div
              initial='hidden'
              animate={companyValue ? 'visible' : 'hidden'}
              variants={slideUpWithBlur}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              onClick={handlePopupConstructionOpen}
              className='hover:scale-125 cursor-pointer transition-all group duration-300 rounded-lg hover:bg-warna-gold py-10  flex flex-col justify-center items-center'
            >
              <div className=' pb-5 group-hover:scale-110 transition-all duration-300 group-hover:-rotate-3 '>
                <IoConstructOutline
                  size={100}
                  className='text-warna-gold group-hover:text-warna-abu '
                />
              </div>

              <h1 className=' font-helvetica text-2xl group-hover:text-warna-abu font-bold'>
                Construction
              </h1>
              <p className=' font-helvetica text-center w-3/4 group-hover:text-warna-abu '>
                Benefit from our skilled craftsmen and advanced construction
                techniques.
              </p>
            </motion.div>
          </div>

          {isPopupOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50'>
              <div className='bg-white text-warna-abu p-8 rounded-lg relative'>
                <AiOutlineClose
                  size={24}
                  className='absolute top-4 right-4 cursor-pointer'
                  onClick={handlePopupClose}
                />
                <h2 className='text-2xl font-bold mb-4'>
                  Hitung Biaya Jasa Design
                </h2>
                <p className='mb-4'>
                  Hitung biaya design anda gratis yuk mulai dengan menghubungi
                  WhatsApp ini.
                </p>
                <a
                  href='https://wa.me/1234567890' // Replace with your WhatsApp number
                  className='text-blue-500 underline'
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          )}

          {isPopupConstructionOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50'>
              <div className='bg-white text-warna-abu p-8 rounded-lg relative'>
                <AiOutlineClose
                  size={24}
                  className='absolute top-4 right-4 cursor-pointer'
                  onClick={handlePopupConstructionClose}
                />
                <h2 className='text-2xl font-bold mb-4'>
                  Hitung Biaya Jasa Arsitek
                </h2>
                <p className='mb-4'>
                  Hitung biaya design anda gratis yuk mulai dengan menghubungi
                  WhatsApp ini.
                </p>
                <a
                  href='https://wa.me/1234567890' // Replace with your WhatsApp number
                  className='text-blue-500 underline'
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          )}
        </section>

        {/* END COMPANY VALUE */}

        {/* START LANDING PAGE OUR MISSION */}

        <motion.section
          ref={ref3}
          initial='hidden'
          animate={ourMission ? 'visible' : 'hidden'}
          variants={slideUpWithBlur}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className=' max-w-screen-2xl text-white bg-warna-abu mx-auto flex xl:flex-row flex-col items-center justify-center p-10 md:p-20'
        >
          <div className=' flex xl:hidden flex-col space-y-1 pb-10 xl:pb-0'>
            <h1 className='text-4xl font-helvetica font-bold'>
              Our mission is to build lasting relationships through exceptional
              craftsmanship and service.
            </h1>
            <div className='w-1/4 border-warna-gold rounded-xl border-2'></div>
          </div>
          <div className=' xl:w-1/2 w-full xl:mr-28 flex justify-center items-center  hover:cursor-grab'>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className='mySwiper'
            >
              <SwiperSlide>
                <Image
                  src='/images/pagecover/landingpage.png'
                  alt='Landing Page'
                  width={700}
                  height={500}
                  className='rounded-xl'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src='/images/pagecover/landingpage.png'
                  alt='Landing Page'
                  width={700}
                  height={500}
                  className='rounded-xl'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src='/images/pagecover/landingpage.png'
                  alt='Landing Page'
                  width={700}
                  height={500}
                  className='rounded-xl'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src='/images/pagecover/landingpage.png'
                  alt='Landing Page'
                  width={700}
                  height={500}
                  className='rounded-xl'
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=' flex flex-col w-full xl:w-1/2 items-start space-y-10'>
            <div className='hidden xl:flex flex-col space-y-1 w-3/4'>
              <h1 className='text-4xl font-helvetica font-bold'>
                Our mission is to build lasting relationships through
                exceptional craftsmanship and service.
              </h1>
              <div className='w-1/4 border-warna-gold rounded-xl border-2'></div>
            </div>
            <div className=' gap-10 grid grid-cols-2 grid-row-4'>
              <div className=''>
                <h1 className='font-helvetica font-bold text-2xl'>
                  30+ Years Experience
                </h1>
                <p>
                  Leveraging decades of expertise to deliver exceptional
                  results, since 1994. Our extensive experience ensures that
                  every project is completed to the highest standards of quality
                  and professionalism.
                </p>
              </div>
              <div className=''>
                <h1 className='font-helvetica font-bold text-2xl'>
                  50+ Project
                </h1>
                <p>
                  Providing detailed and accurate budget plans to ensure
                  financial transparency and efficiency. Our diverse portfolio
                  showcases our ability to handle projects of varying scales and
                  complexities.
                </p>
              </div>
              <div className=''>
                <h1 className='font-helvetica font-bold text-2xl'>
                  100+ Satisfied Clients
                </h1>
                <p>
                  We have built a strong reputation based on trust and client
                  satisfaction. Over 100 clients have chosen Vonk Design for
                  their projects, and many continue to work with us for their
                  ongoing needs.
                </p>
              </div>
              <div className=''>
                <h1 className='font-helvetica font-bold text-2xl'>
                  10+ Expert Teams
                </h1>
                <p>
                  Our firm comprises over 10 specialized teams, each focusing on
                  different aspects of design and construction. This allows us
                  to provide comprehensive services that cover every detail of a
                  project.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* END LANDING PAGE OUR MISSION */}

        {/* START LATEST PROJECT */}
        <section className='bg-warna-abu'>
          <div className='max-w-[2000px] mx-auto text-white flex flex-col bg-warna-abu p-10 md:p-20'>
            <div className='md:w-3/4 flex flex-col items-start py-10'>
              <h1 className='md:text-center font-helvetica text-5xl font-bold pb-1'>
                Latest Projects
              </h1>
              <div className='md:w-1/12 w-1/6 border-warna-gold rounded-xl border-2 '></div>
              <p className='font-helvetica text-xl pt-5'>
                Explore our extensive portfolio of completed projects. From
                small renovations to large-scale constructions, see how we’ve
                helped our clients bring their visions to life with exceptional
                craftsmanship and attention to detail.
              </p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 shadow-sm'>
              {Array.isArray(projects) &&
                projects.slice(0, 4).map((project: any, index: any) => (
                  <div key={index} className='relative w-full h-[500px]'>
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      layout='fill'
                      objectFit='cover'
                      className='rounded-xl'
                    />
                    <div className='bg-black group rounded-xl bg-opacity-20 opacity-0 hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500'>
                      <h1 className='group-hover:-translate-y-0 translate-y-10 transition-transform duration-500 font-helvetica font-bold text-3xl uppercase  text-center'>
                        {project.title}
                      </h1>
                      <a href={`/projects/${project.id}`}>
                        <Button className='group-hover:translate-y-0 translate-y-10 transition-transform duration-500 rounded-none bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white mt-3'>
                          Details Project
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
            <a href='/projects' className=' flex justify-center'>
              <Button className=' w-fit rounded-none bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white px-10 py-3 mt-10'>
                VIEW ALL PROJECTS
              </Button>
            </a>
          </div>
        </section>
        {/* END LATEST PROJECT */}

        {/* START TESTIMONIAL */}
        <section className=' bg-white'>
          <div className='mx-auto max-w-[1800px] flex flex-col bg-white p-10 md:p-20 text-warna-abu'>
            <div className=' flex flex-col justify-center items-center'>
              <h1 className='text-center font-helvetica md:text-6xl text-5xl font-bold pb-1 '>
                Their Experience, Our Inspiration
              </h1>
              <p className='font-helvetica text-xl pt-5 text-center md:w-1/2'>
                At <span className=' font-bold'>Vonk's Design</span>, we are
                committed to delivering the best services in every project we
                undertake. Here are some testimonials from our customers who are
                satisfied with our work.
              </p>
            </div>
            <div className='flex justify-center py-10'>
              {Array.isArray(reviews) && reviews.length > 0 && (
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className='mySwiper'
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                      <div className='mb-10 mx-10 flex flex-col p-6 bg-gray-100 rounded-lg shadow-lg'>
                        <div className='flex items-start mb-4'>
                          <BiSolidQuoteLeft
                            size={50}
                            className='text-warna-gold mr-4'
                          />
                          <h2 className='font-helvetica text-2xl xl:text-5xl font-semibold'>
                            {review.quote}
                          </h2>
                        </div>
                        <div className='border-l-2 pl-4 border-warna-abu'>
                          <p className='xl:text-lg text-sm'>{review.content}</p>
                        </div>
                        <p className='mt-4 font-bold text-lg'>
                          {review.author}, {review.year}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </section>
        {/* END TESTIMONIAL */}

        <Startproject />
        <Footer />
      </main>
    </Layout>
  );
};

export default HomePage;
