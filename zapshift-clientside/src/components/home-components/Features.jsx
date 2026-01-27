import React from 'react';
import img1 from '../../assets/live-tracking.png';
import img2 from '../../assets/safe-delivery.png';

const featuresData = [
    {
        id: 1,
        img: img1,
        title: 'Live Parcel Tracking',
        description: 'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment\'s journey and get instant status updates for complete peace of mind.'
    },
    {
        id: 2,
        img: img2,
        title: '100% Safe Delivery',
        description: 'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.'
    },
    {
        id: 3,
        img: img2,
        title: '24/7 Call Center Support',
        description: 'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.'
    },
    {
        id: 4,
        img: img2,
        title: 'Fast & Reliable Service',
        description: 'Experience quick and dependable delivery services that meet your deadlines. We prioritize efficiency without compromising on quality.'
    }
];

const Features = () => {
    return (
        <div className='w-full max-w-7xl mx-auto py-10 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {featuresData.map((feature) => (
                    <div key={feature.id} className='bg-white rounded-2xl p-8 shadow-sm flex gap-6 items-start'>
                        {/* Image Section */}
                        <div className='flex-shrink-0'>
                            <img src={feature.img} alt={feature.title} className='w-32 h-32 object-contain' />
                        </div>
                        
                        {/* Divider */}
                        <div className='w-px bg-gray-300 self-stretch'></div>
                        
                        {/* Text Content */}
                        <div className='flex-1'>
                            <h3 className='text-2xl font-bold text-[#03373D] mb-3'>{feature.title}</h3>
                            <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;