import React from 'react';

const Hero = ({ inProgressCount, resolvedCount }) => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-8 my-12 max-w-11/12 mx-auto'>
          <div className='rounded-md text-white h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center gap-3.5'>
            <h2 className='font-bold text-3xl'>In-Progress</h2>
            <p className='font-semibold text-5xl'>{inProgressCount}</p>
          </div>
          <div className='rounded-md text-white h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] flex flex-col justify-center items-center'>
            <h2 className='font-bold text-3xl'>Resolved</h2>
            <p className='font-semibold text-5xl'>{resolvedCount}</p>
          </div>
        </div>
        </div>
    );
};

export default Hero;