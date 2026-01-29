import '../App.css';
import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import SearchBar from '../components/SearchBar';

const Coverage = () => {
     const position = [23.6850, 90.3563];
     const mapRef = useRef(null);
     const serviceData = useLoaderData();
    
    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceData.find(c => c.district.toLowerCase().includes(location.toLowerCase()));

        if (district) {
            const coord = [district.latitude, district.longitude];
            // console.log(district, coord)
            // go to the location
            mapRef.current.flyTo(coord, 14);
        }
    };
    
    return (
        <div className="coverage-container flex flex-col items-center">
             <div className='text-1'>We are Available in {serviceData.length} Districts</div>
             
             <SearchBar onSearch={handleSearch} />
             
             <div className='bg-white rounded-4xl w-full max-w-7xl p-6'>
                 <div className='text-2 text-center mb-5'>We Deliver Almost All Over Bangladesh</div>
             <div className='h-[800px] w-full rounded-3xl overflow-hidden'>
                <MapContainer
                center={position}
                    zoom={8}
                    scrollWheelZoom={true}
                    ref={mapRef}
                    style={{ height: '100%', width: '100%' }}
                    >
                      
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {serviceData.map((data, i) => <Marker
                            key={i}
                            position={[data.latitude, data.longitude]}>
                            <Popup>
                                <strong>{data.district}</strong> <br /> Service Area: {data.covered_area.join(', ')}.
                            </Popup>
                        </Marker>)}
                </MapContainer>
                
             </div>
             </div>
            
        </div>
    );
};

export default Coverage;