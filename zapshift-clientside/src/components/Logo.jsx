import React from 'react';
import brandLogo from '../assets/logo.png';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
            <Link to="/">
            <div className='flex items-end'>
                <img src={brandLogo} alt="" />
                <h3 className='text-3xl font-bold'>ZapShift</h3>
            </div>
            </Link>
        </div>
    );
};

export default Logo;