import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';

import data from '@/data/projects.json';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Footer from '@/components/page/Footer';
import Navbar from '@/components/page/Navbar';
import Seo from '@/components/Seo';

import Startproject from '@/pages/component/Startproject';

interface Project {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  location: string;
  year: string;
  budget: string;
  description: string;
  gallery: {
    src: string;
    alt: string;
  }[];
}

interface ProjectsProps {
  projects: Project[];
}

export async function getStaticProps() {
  // Simulasi pengambilan data
  const projects: Project[] = data; // Pastikan data sudah sesuai dengan tipe Project[]

  return {
    props: {
      projects,
    },
  };
}

function Projects({ projects }: ProjectsProps) {
  const swiperRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop(); // Hentikan autoplay saat hover
      // console.log('Autoplay stopped');
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start(); // Mulai autoplay saat keluar hover
      // console.log('Autoplay resumed');
    }
  };

  const scrollToProject = () => {
    const element = document.getElementById('project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Layout>
      <Seo templateTitle='Projects' />
      <main>
        <Navbar />
        <section className='bg-white'>
          <div
            className='pt-[123px] bg-fixed bg-cover bg-center flex min-h-screen flex-col justify-center items-center text-white'
            style={{
              backgroundImage: "url('/images/pagecover/landingpage.png')",
            }}
          >
            <p className='text-center md:text-2xl font-thin font-futura tracking-[0.90em]'>
              VONK's DESIGN
            </p>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-center mt-4 font-black text-6xl md:text-8xl font-helvetica'>
                Projects
              </h1>
              <p className='tracking-[0.90em] font-helveticalight text-center md:text-xl pt-10'>
                Home / Projects
              </p>
            </div>

            <Button
              onClick={scrollToProject}
              className='rounded-full bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white mt-10 motion-safe:animate-bounce'
            >
              <FaArrowDown />
            </Button>
          </div>
        </section>

        <section
          id='project'
          className='bg-warna-abu flex justify-center xl:p-20 p-5'
        >
          <div className='w-full max-w-screen-2xl flex flex-col'>
            <div
              className='w-full h-80 md:h-96 my-5'
              onMouseEnter={handleMouseEnter} // Hentikan autoplay saat hover
              onMouseLeave={handleMouseLeave} // Mulai autoplay saat keluar hover
            >
              <Swiper
                ref={swiperRef} // Set ref here
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className='mySwiper'
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={700}
                      height={500}
                      className='rounded-xl absolute group-hover:scale-105'
                    />
                    <div className='relative rounded-xl w-full h-full  flex flex-col md:flex-row items-end justify-between group opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-25 hover:backdrop-blur-sm transition-all duration-300 ease-in-out p-10 text-white'>
                      <div className='flex flex-col  md:w-1/2 group-hover:translate-y-5 translate-y-40 duration-500 ease-in-out transition-all blur-sm group-hover:blur-0'>
                        <h1 className='font-helvetica font-bold text-warna-gold text-3xl md:text-5xl'>
                          {project.title}
                        </h1>
                        <h2 className='md:text-2xl '>{project.location}</h2>
                        <p className='text-sm md:text-lg'>
                          {project.description}
                        </p>
                        <a
                          href={`projects/${project.id}`}
                          className='blur group-hover:blur-0  transition-all  md:hidden flex items-center mt-5 justify-center'
                        >
                          <Button className='rounded-none bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white '>
                            VIEW PROJECTS
                          </Button>
                        </a>
                      </div>
                      <a
                        href={`projects/${project.id}`}
                        className='blur group-hover:blur-0 group-hover:-translate-x-4 transition-all hidden md:block'
                      >
                        <Button className='rounded-none bg-transparent font-helvetica hover:bg-white hover:text-warna-abu hover:shadow-2xl border-white px-10 py-3 mt-10'>
                          VIEW PROJECTS
                        </Button>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className='overflow-hidden bg-white auto rounded-xl h-[400px]'
                >
                  <div className='relative h-2/3'>
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      layout='fill'
                      objectFit='cover'
                      className='rounded-t-lg'
                    />
                  </div>

                  <div className='p-5 h-1/3'>
                    <h2>{project.location}</h2>
                    <h1 className='text-3xl text-warna-abu font-helvetica font-bold'>
                      {project.title}
                    </h1>
                    <a
                      href={`/projects/${project.id}`}
                      className='items-center group cursor-pointer flex flex-row w-fit font-bold text-warna-abu font-helveticalight mt-5'
                    >
                      <h1>Details</h1>
                      <ArrowRight
                        size={15}
                        className='ml-1 group-hover:ml-2 transition-all'
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Startproject />
        <Footer />
      </main>
    </Layout>
  );
}

export default Projects;
