import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import one from '../assets/banner1.png' ;
import two from '../assets/banner2.png' ;
import three from '../assets/banner3.png' ;

const DynamicBanner = () => {
  const banners = [
    { image: one, text: 'Explore the Himalayas' },
    { image: two, text: 'Cultural Heritage Tours' },
    { image: three, text: 'Adventure Sports' },
  ];

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DynamicBanner;
