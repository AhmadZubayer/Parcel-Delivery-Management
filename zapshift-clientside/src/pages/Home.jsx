import React from 'react';
import Banner from '../components/home-components/Banner';
import HowItWorks from '../components/home-components/HowItWorks';
import '../App.css';
import OurServices from '../components/home-components/OurServices';
import Brands from '../components/home-components/Brands';
import Features from '../components/home-components/Features';
import Satisfaction from '../components/home-components/Satisfaction';
import CustomerReview from '../components/home-components/CustomerReview';
import Faq from '../components/home-components/Faq';

const Home = () => {
    return (
        <div className='mt-5 gap-y-10 max-w-7xl mx-auto flex flex-col items-center '>
                <Banner></Banner>
                <HowItWorks></HowItWorks>
                <OurServices></OurServices>
                <Brands></Brands>
                <Features></Features>
                <Satisfaction></Satisfaction>
                <CustomerReview></CustomerReview>
                <Faq></Faq>
        </div>
    );
};

export default Home;