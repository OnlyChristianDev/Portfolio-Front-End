"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import projects from "../components/projects"
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

export default function Projects() {
  return (
    <Element name="Projects">
      <div className='w-full h-screen flex flex-col items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-10 dark:text-white">
            Meus <span className="text-PrimaryPurple">projetos.</span>
          </h1>
        </motion.div>
        <div className="w-full flex items-center justify-center max-w-4xl relative">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            loop={true}
            spaceBetween={-50}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >

            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`hover:brightness-75 transition duration-700 w-full cursor-pointer flex flex-col gap-4 h-80 rounded-xl bg-gradient-to-r ${project.gradient} justify-center items-center shadow-xl p-6`}
                >
                  <div>{project.icon}</div>
                  <h2 className='text-white text-4xl font-bold'>{project.title}</h2>
                  <p className='text-white text-lg text-center'>{project.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </div>
    </Element>
  );
}
