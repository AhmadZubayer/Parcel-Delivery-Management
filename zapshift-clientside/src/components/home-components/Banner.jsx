import React from 'react';
import bnrImg1 from '../../assets/banner/banner1.png';
import bnrImg2 from '../../assets/banner/banner2.png';
import bnrImg3 from '../../assets/banner/banner3.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <div className="w-full  mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                className="rounded-lg overflow-hidden"
            >
                <div className="h-lg">
                    <img src={bnrImg1} className="relative w-full h-full object-cover" alt="Banner 1" />
                 <div className="absolute bottom-0 left-0 translate-x-14 -translate-y-16">
                        <button className="btn btn-1">Track Your Parcel</button>
                        <button className="btn btn-2">Be a Rider</button>
                    </div>
                </div>
                    <div className="h-lg">
                    <img src={bnrImg2} className="relative w-full h-full object-cover" alt="Banner 1" />
                    <div className="absolute bottom-19 left-18">
                        <button className="btn btn-1">Track Your Parcel</button>
                        <button className="btn btn-2">Be a Rider</button>
                    </div>
                </div>
                    <div className="h-lg">
                    <img src={bnrImg3} className="relative w-full h-full object-cover" alt="Banner 1" />
                    <div className="absolute bottom-19 left-18">
                        <button className="btn btn-1">Track Your Parcel</button>
                        <button className="btn btn-2">Be a Rider</button>
                    </div>
                </div>
              
            </Carousel>
        </div>
    );
};

export default Banner;