"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Projects() {
  return (
    <>
      <div className='w-full mt-16 h-screen flex flex-col items-center justify-center'>
        <h1 className="text-5xl font-bold mb-10 dark:text-white">
          Meus <span className="text-PrimaryPurple">projetos.</span>
        </h1>
        <div className="w-full max-w-5xl relative">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            loop={true} 
            spaceBetween={-100}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{  
              delay: 3000,  
              disableOnInteraction: false, 
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}  
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-80 rounded-xl bg-gradient-to-r from-purple-400 to-blue-400 flex justify-center items-center shadow-xl">
                <h2 className="text-white text-3xl font-bold">Slide 1</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-80 rounded-xl bg-gradient-to-r from-green-400 to-blue-400 flex justify-center items-center shadow-xl">
                <h2 className="text-white text-3xl font-bold">Slide 2</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-80 rounded-xl bg-gradient-to-r from-red-400 to-yellow-400 flex justify-center items-center shadow-xl">
                <h2 className="text-white text-3xl font-bold">Slide 3</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-80 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 flex justify-center items-center shadow-xl">
                <h2 className="text-white text-3xl font-bold">Slide 4</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}