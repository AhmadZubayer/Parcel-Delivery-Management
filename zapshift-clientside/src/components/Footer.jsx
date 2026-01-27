import React from 'react';
import Logo from './Logo';
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router';
import '../App.css';

const Footer = () => {
    return (
        <footer className='bg-black text-white py-12 mt-10'>
            <div className='max-w-7xl mx-auto px-4'>
                {/* Logo and Description */}
                <div className='flex flex-col items-center gap-y-6 mb-8'>
                    <div className='text-white'>
                        <Logo />
                    </div>
                    <p className=' text-white'>
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Dotted Divider */}
                <div className='border-t border-dotted border-gray-600 my-8'></div>

                {/* Navigation Links */}
                <div className='flex justify-center gap-8 mb-8 flex-wrap'>
                    <Link to="/services" className='text-gray-300 hover:text-[#c4db5f] transition-colors'>Services</Link>
                    <Link to="/coverage" className='text-gray-300 hover:text-[#c4db5f] transition-colors'>Coverage</Link>
                    <Link to="/about" className='text-gray-300 hover:text-[#c4db5f] transition-colors'>About Us</Link>
                    <Link to="/pricing" className='text-gray-300 hover:text-[#c4db5f] transition-colors'>Pricing</Link>
                    <Link to="/blog" className='text-gray-300 hover:text-[#c4db5f] transition-colors'>Blog</Link>
                    <Link to="/contact" className='text-gray-300 hover:text-[#c4db5f] transition-colors'>Contact</Link>
                </div>

                <div className='border-t border-dotted border-gray-600 my-8'></div>
                <div className='flex justify-center gap-4'>
                    <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors'
                    >
                        <FaLinkedinIn className='text-black text-xl' />
                    </a>
                    <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors'
                    >
                        <FaXTwitter className='text-black text-xl' />
                    </a>
                    <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors'
                    >
                        <FaFacebookF className='text-black text-xl' />
                    </a>
                    <a 
                        href="https://youtube.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors'
                    >
                        <FaYoutube className='text-black text-xl' />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;