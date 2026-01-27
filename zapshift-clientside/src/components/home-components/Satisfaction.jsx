import React from 'react';
import '../../App.css';
import img1 from '../../assets/be-a-merchant-bg.png'
import img2 from '../../assets/location-merchant.png'

const Satisfaction = () => {
    return (
        <div>
            <div 
                className='bg-[#0A4B52] rounded-3xl p-12 flex items-center justify-between gap-12 relative overflow-hidden bg-contain bg-top bg-no-repeat'
                style={{ backgroundImage: `url(${img1})` }}
            >
                <div className='flex-1 z-10'>
                    <h2 className='text-4xl font-bold text-white mb-4 leading-tight'>
                        Merchant and Customer Satisfaction<br />is Our First Priority
                    </h2>
                    <p className='text-gray-200 text-lg mb-8 leading-relaxed'>
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className='flex gap-4'>
                        <button className='btn btn-1 hover:bg-[#b5cc50] transition-all'>
                            Become a Merchant
                        </button>
                        <button className='btn btn-3 hover:bg-[#c4db5f] hover:text-black transition-all'>
                            Earn with ZapShift Courier
                        </button>
                    </div>
                </div>
                <div className='flex-shrink-0 z-10'>
                    <img src={img2} alt="Location" className='w-80 h-auto object-contain' />
                </div>
            </div>
        </div>
    );
};

export default Satisfaction;