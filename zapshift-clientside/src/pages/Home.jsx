import React from 'react';
import Banner from '../components/home-components/Banner';
import HowItWorks from '../components/home-components/HowItWorks';
import '../App.css';
import OurServices from '../components/home-components/OurServices';
import Brands from '../components/home-components/Brands';

const Home = () => {
    return (
        <div className='mt-5 gap-y-5 max-w-7xl mx-auto flex flex-col items-center '>
                <Banner></Banner>
                <HowItWorks></HowItWorks>
                <OurServices></OurServices>
                <Brands></Brands>
        </div>
    );
};

export default Home;