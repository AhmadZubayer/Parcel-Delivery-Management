import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../assets/brands/amazon.png';
import amazon_vector from '../../assets/brands/amazon_vector.png';
import casio from '../../assets/brands/casio.png';
import moonstar from '../../assets/brands/moonstar.png';
import randstad from '../../assets/brands/randstad.png';
import star from '../../assets/brands/star.png';
import start_people from '../../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';
import '../../App.css';

const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, start_people];

const Brands = () => {
    return (
        <div className='w-full m-2 flex flex-col gap-y-5'>
            <div className='text-2 text-center'>We've helped thousands of sales teams</div>
            <div>
            <Swiper
                loop={true}
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={20}
                grabCursor={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={1000}
                className="h-6"
            >
                {
                    brandLogos.map((logo, index) => <SwiperSlide key={index}>
                        <img src={logo} alt="" className="h-full w-auto object-contain" />
                </SwiperSlide>)
                }

            </Swiper>
            </div>
        </div>
    );
};

export default Brands;