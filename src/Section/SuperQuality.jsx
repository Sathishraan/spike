// SuperQuality.jsx
import React from 'react';
import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section id='aboout-us' className='flex justify-center items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin  capitalize text-4xl  font-bold max-lg:w-full'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>We Provide you</span>
          <br />
          <span className='text-coral-red mt-3 px-2'>Super Quality</span>
          Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className='mt-11'><Button iconUrl={arrowRight} label="View Details" />
        </div>

      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="shoes" className='object-contain' width={570} height={570} />

      </div>
    </section>
  );
}

export default SuperQuality;
