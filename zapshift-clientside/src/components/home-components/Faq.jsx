import React from 'react';
import '../../App.css';


const faqData = [
    {
        id: 1,
        ques: "How do I create a merchant account?",
        ans: "Click the 'Become a Merchant' button and fill out the registration form with your business details. Our team will verify your information and activate your account within 24-48 hours."
    },
    {
        id: 2,
        ques: "What are the delivery charges?",
        ans: "Our delivery charges vary based on weight, distance, and delivery speed. We offer the most competitive rates in Bangladesh with transparent pricing. You can check exact charges using our pricing calculator on the merchant dashboard."
    },
    {
        id: 3,
        ques: "How can I track my parcel?",
        ans: "You can track your parcel in real-time using the tracking number provided. Simply enter the tracking ID on our website or mobile app to see live updates of your shipment's journey from pickup to delivery."
    },
    {
        id: 4,
        ques: "What areas do you deliver to?",
        ans: "We deliver to every corner of Bangladesh including all major cities, districts, and remote areas. Our extensive network ensures your parcels reach their destination safely and on time, no matter where it is."
    },
    {
        id: 5,
        ques: "How do I schedule a pickup?",
        ans: "Log in to your merchant account, create a new shipment, and select your preferred pickup time. Our courier will arrive at the scheduled time to collect your parcel. You can also call our 24/7 support center to arrange pickups."
    },
    {
        id: 6,
        ques: "What is your return and refund policy?",
        ans: "We offer hassle-free returns and cash-on-delivery refunds. If the customer refuses delivery, we'll return the parcel to you. COD amounts are settled within 3-5 business days after successful delivery confirmation."
    },
    {
        id: 7,
        ques: "Is there insurance for my parcels?",
        ans: "Yes, we provide 100% insurance coverage for your parcels. In the rare case of damage or loss during transit, you'll be fully compensated based on the declared value of your shipment."
    },
    {
        id: 8,
        ques: "How can I contact customer support?",
        ans: "Our dedicated customer support team is available 24/7 via phone, email, and live chat. You can also reach us through our mobile app or social media channels for immediate assistance with any queries or concerns."
    }
];

const Faq = () => {
    return (
        <div className='flex flex-col items-center gap-y-5 w-full'>
            <div className='text-1'>Frequently Asked Question (FAQ)</div>
            <div className='text-3'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</div>
            <div className='w-full max-w-4xl px-4 space-y-2'>
                {faqData.map((data) => (
                    <div key={data.id} className="collapse collapse-arrow bg-white border border-gray-200 rounded-xl">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-lg font-semibold">{data.ques}</div>
                        <div className="collapse-content text-3 text-gray-700">
                            <p>{data.ans}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;