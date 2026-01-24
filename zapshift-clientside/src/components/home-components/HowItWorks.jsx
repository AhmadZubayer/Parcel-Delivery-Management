import React from 'react';
import bookingIcon from './../../assets/bookingIcon.png';

const HowItWorks = () => {
    const cards = [
        {
            icon: bookingIcon,
            title: "Booking Pick & Drop",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            icon: bookingIcon,
            title: "Cash On Delivery",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            icon: bookingIcon,
            title: "Delivery Hub",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            icon: bookingIcon,
            title: "Booking SME & Corporate",
            description: "From personal packages to business shipments — we deliver on time, every time."
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {cards.map((card, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-md">
                    <img src={card.icon} alt={card.title} className="w-12 h-12" />
                    <h3 className="font-bold mt-2">{card.title}</h3>
                    <p className="text-gray-500 mt-1">{card.description}</p>
                </div>
            ))}
        </div>

    )
};

export default HowItWorks;