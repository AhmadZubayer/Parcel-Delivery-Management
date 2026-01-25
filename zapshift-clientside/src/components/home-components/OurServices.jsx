import React from 'react';
import serviceIcon from '../../assets/service.png'

const OurServices = () => {
    const services = [
        {
            id: 1,
            icon: serviceIcon,
            title: "Express & Standard Delivery",
            description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
        },
        {
            id: 2,
            icon: serviceIcon,
            title: "Nationwide Delivery",
            description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        },
        {
            id: 3,
            icon: serviceIcon,
            title: "Fulfillment Solution",
            description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
        },
        {
            id: 4,
            icon: serviceIcon,
            title: "Cash on Home Delivery",
            description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
        },
        {
            id: 5,
            icon: serviceIcon,
            title: "Corporate Service / Contract In Logistics",
            description: "Customized corporate services which includes warehouse and inventory management support."
        },
        {
            id: 6,
            icon: serviceIcon,
            title: "Parcel Return",
            description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
        }
    ];
    
    return (
        <div className='bg-[#03373D] rounded-2xl w-full flex flex-col text-center p-8 md:p-12'>
            <div className='font-bold text-white text-4xl mb-4'>Our Services</div>
            <div className='text-white text-lg mb-8'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map((service) => (
                    <div 
                        key={service.id} 
                        className='bg-[#F5F5F5] hover:bg-[#C1DD59] rounded-2xl p-6 flex flex-col items-center text-center transition-colors duration-300 group'
                    >
                        <div className='bg-[#E8F0F2] rounded-full w-20 h-20 flex items-center justify-center mb-4'>
                            <img src={service.icon} alt={service.title} className='w-12 h-12' />
                        </div>
                        <h3 className='font-bold text-xl mb-3 text-[#03373D]'>
                            {service.title}
                        </h3>
                        <p className='text-sm text-gray-700 group-hover:text-[#03373D]'>
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;