import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <div className="flex justify-center items-center p-5">
            <form onSubmit={onSearch} className="flex items-center bg-white rounded-full px-3 py-2 w-full max-w-4xl shadow-sm">
                <svg 
                    className="text-gray-500 ml-2 mr-3 flex-shrink-0" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input 
                    type="text" 
                    name="location"
                    placeholder="Search here" 
                    className="flex-1 border-none bg-transparent outline-none text-base text-gray-700 py-2"
                />
                <button type="submit" className="bg-[#C4DB5F] text-black border-none rounded-full px-12 py-3 text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0 hover:bg-[#B5CC50] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(196,219,95,0.3)] active:translate-y-0">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;