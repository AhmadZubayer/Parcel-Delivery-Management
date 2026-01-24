import React from 'react';
import Banner from '../components/home-components/Banner';
import HowItWorks from '../components/home-components/HowItWorks';
import '../App.css';

const Home = () => {
    return (
        <div className='mt-5 gap-y-5 max-w-7xl mx-auto flex flex-col items-center '>
                <div><Banner></Banner></div>
                <div><HowItWorks></HowItWorks></div>
        </div>
    );
};

export default Home;