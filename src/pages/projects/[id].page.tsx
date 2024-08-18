import fs from 'fs';
import { ArrowLeft } from 'lucide-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Footer from '@/components/page/Footer';
import Navbar from '@/components/page/Navbar';
import Seo from '@/components/Seo';

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
  size: string;
  gallery: {
    src: string;
    alt: string;
  }[];
}

interface ProjectPageProps {
  project: Project;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <Layout>
      <Seo templateTitle={project.title} />
      <Navbar />
      <main
        className='bg-fixed bg-cover text-white'
        style={{
          backgroundImage: `url(${project.image.src})`,
        }}
      >
        <section className='bg-gray-950 bg-opacity-80 backdrop-blur-sm xl:p-20 pt-24 md:px-16 px-5'>
          <div className='flex flex-col max-w-[1800px] mx-auto mt-[100px]'>
            <a
              href='/projects'
              className='items-center pl-2 group cursor-pointer flex flex-row font-bold font-helveticalight'
            >
              <ArrowLeft
                size={15}
                className='mr-2 group-hover:-translate-x-2 transition-all'
              />
              <h1>Details</h1>
            </a>
            <div className='mt-20 flex flex-row'>
              <img
                src={project.image.src}
                alt={project.image.alt}
                className='w-1/2 h-[500px] object-cover rounded-xl hidden xl:block'
              />
              <div className='xl:w-1/2 flex flex-col xl:ml-16'>
                <h1 className='font-helvetica font-bold text-5xl mb-5 uppercase'>
                  {project.title}
                </h1>
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className='w-full h-[500px] object-cover rounded-xl xl:hidden'
                />
                <h2 className='font font-helvetica font-normal text-xl border-b-2 pt-5 pb-4'>
                  Location :{' '}
                  <span className='font-helvetica'>{project.location}</span>
                </h2>
                <h3 className='font font-helvetica font-normal text-xl border-b-2 py-4'>
                  Building area :{' '}
                  <span className='font-helvetica'>
                    {project.size.replace(/m2$/, 'm²')}
                  </span>
                </h3>
              </div>
            </div>

            <div className='my-10 border-b-2 pb-10'>
              <h1 className='font-helvetica font-bold text-5xl mb-5'>
                Project Description
              </h1>
              <p className='text-xl'>{project.description}</p>
            </div>

            <div className=''>
              <h1 className='font-helvetica font-bold text-5xl mb-5'>
                Gallery
              </h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {project.gallery.map((item, index) => (
                  <div
                    key={index}
                    className='relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'
                    onClick={() => handleImageClick(index)}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout='responsive'
                      width={500}
                      height={500}
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lightbox for Image Details */}
          {isLightboxOpen && (
            <Lightbox
              mainSrc={project.gallery[photoIndex].src}
              nextSrc={
                project.gallery[(photoIndex + 1) % project.gallery.length].src
              }
              prevSrc={
                project.gallery[
                  (photoIndex + project.gallery.length - 1) %
                    project.gallery.length
                ].src
              }
              onCloseRequest={handleCloseLightbox}
              onMovePrevRequest={() =>
                setPhotoIndex(
                  (photoIndex + project.gallery.length - 1) %
                    project.gallery.length,
                )
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % project.gallery.length)
              }
              imageTitle={project.gallery[photoIndex].alt}
            />
          )}

          <div className='flex py-20 mt-20 flex-col justify-center items-center text-white'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-center mt-4 font-black text-6xl md:text-8xl font-helvetica'>
                START A PROJECT
                <br /> TOGETHER
              </h1>
              <p className='w-3/4 font-helvetica text-center md:text-xl pt-10'>
                Ready to bring your vision to life?
                <br /> Click the button below to start a project with us on
                WhatsApp!
              </p>
              <Button className='rounded-lg bg-green-500 font-helvetica hover:bg-green-600 transition hover:text-white hover:shadow-2xl border-green-500 hover:border-green-600 shadow-inner shadow-lg px-10 py-3 mt-10'>
                <FaWhatsapp className='mr-2' />
                Whatsapp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const projects: Project[] = JSON.parse(fileContents);

  const paths = projects.map((project) => ({
    params: { id: project.title.replace(/\s+/g, '-').toLowerCase() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectPageProps, Params> = async (
  context,
) => {
  const { id } = context.params!;

  const filePath = path.join(process.cwd(), 'src', 'data', 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const projects: Project[] = JSON.parse(fileContents);

  const project = projects.find(
    (project) => project.title.replace(/\s+/g, '-').toLowerCase() === id,
  );

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
