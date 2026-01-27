import React from 'react';
import '../../App.css';
import img1 from '../../assets/customer-top.png';
import img2 from '../../assets/reviewQuote.png';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';


const profileImage = "https://cdn-icons-png.freepik.com/256/11136/11136505.png?semt=ais_white_label";

const reviewsData = [
    {
        id: 1,
        review: "ZapShift has been a game-changer for my online business. The delivery is always on time, and my customers are extremely satisfied with the service. Highly recommend!",
        reviewerName: "Sarah Ahmed",
        reviewerProfession: "E-commerce Store Owner",
        profileImg: profileImage
    },
    {
        id: 2,
        review: "I've tried multiple courier services, but ZapShift stands out with their professionalism and reliability. The tracking feature gives me peace of mind knowing exactly where my parcels are.",
        reviewerName: "Mohammad Rahman",
        reviewerProfession: "Small Business Owner",
        profileImg: profileImage
    },
    {
        id: 3,
        review: "Excellent service! The delivery charges are very reasonable and the customer support team is always helpful. They've never let me down with any of my shipments.",
        reviewerName: "Nusrat Jahan",
        reviewerProfession: "Fashion Boutique Owner",
        profileImg: profileImage
    },
    {
        id: 4,
        review: "As a merchant, I need a reliable courier partner and ZapShift has proven to be exactly that. Fast, safe, and professional - everything I need for my business.",
        reviewerName: "Kamal Hossain",
        reviewerProfession: "Electronics Retailer",
        profileImg: profileImage
    },
    {
        id: 5,
        review: "The best courier service in Bangladesh! Their 24/7 support is incredible and they handle my parcels with utmost care. My go-to choice for all deliveries.",
        reviewerName: "Fatima Begum",
        reviewerProfession: "Handicraft Business Owner",
        profileImg: profileImage
    },
    {
        id: 6,
        review: "ZapShift has made my life so much easier. The pickup and delivery process is seamless, and I love how transparent they are with their pricing and tracking.",
        reviewerName: "Rahim Uddin",
        reviewerProfession: "Book Store Owner",
        profileImg: profileImage
    },
    {
        id: 7,
        review: "I've been using ZapShift for over a year now and they've consistently delivered excellence. My customers always receive their orders safely and on time.",
        reviewerName: "Ayesha Khan",
        reviewerProfession: "Cosmetics Seller",
        profileImg: profileImage
    },
    {
        id: 8,
        review: "Trustworthy and efficient! ZapShift handles my fragile items with great care. Their delivery network covers every corner of Bangladesh which is perfect for my business.",
        reviewerName: "Tarek Islam",
        reviewerProfession: "Gift Shop Owner",
        profileImg: profileImage
    },
    {
        id: 9,
        review: "Outstanding service quality! The real-time tracking feature is amazing and the delivery charges are very competitive. Couldn't ask for a better courier partner.",
        reviewerName: "Sabrina Akter",
        reviewerProfession: "Jewelry Designer",
        profileImg: profileImage
    },
    {
        id: 10,
        review: "ZapShift has transformed how I run my business. Their merchant support is top-notch and the delivery speed is impressive. Highly satisfied with their service!",
        reviewerName: "Imran Chowdhury",
        reviewerProfession: "Mobile Accessories Dealer",
        profileImg: profileImage
    }
];

const CustomerReview = () => {
    return (
        <div className='w-full flex flex-col items-center gap-y-5'>
            <div><img src={img1} alt="" /></div>
            <div className='text-1'>What our customers are sayings</div>
            <div className='text-3'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</div>
            <div className='w-full max-w-7xl px-4 py-10'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 1.5,
                        slideShadows: false,
                    }}
                    pagination={false}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    className="pb-12"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {reviewsData.map((data) => (
                        <SwiperSlide key={data.id} className='pb-4'>
                            {({ isActive }) => (
                                <div className={`bg-white rounded-2xl p-8 shadow-lg h-full transition-all duration-500 ${
                                    isActive 
                                        ? 'opacity-100 scale-100' 
                                        : 'opacity-40 scale-95 blur-[2px]'
                                }`}>
                                    <div className='mb-4'>
                                        <img src={img2} alt="quote" className='w-12 h-12 opacity-60' />
                                    </div>

                                    <p className='text-3 mb-6'>
                                        {data.review}
                                    </p>

                                    <div className='border-t-2 border-dotted border-gray-300 my-6'></div>
                                    <div className='flex items-center gap-4'>
                                        <img 
                                            src={data.profileImg} 
                                            alt={data.reviewerName}
                                            className='w-14 h-14 rounded-full object-cover bg-[#0A4B52]'
                                        />
                                        <div>
                                            <h4 className='font-bold text-lg text-gray-900'>{data.reviewerName}</h4>
                                            <p className='text-gray-600 text-sm'>{data.reviewerProfession}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CustomerReview;