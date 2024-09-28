import React, { useState } from 'react'
import Button from '../Components/Button'
import ShoeCart from '../Components/ShoeCart'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import { shoes, statistics } from '../constant'

const Hero = () => {

  const[bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section className='w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container justify-center'>
      <div className='relative  xl: w-2/5 flex flex-col justify-center items-start   max-xl:padding-x pt-28 '>
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[83px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Spike</span>
          Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-xl leading-1 mt-5 mb-16 sm:max-w-sm:'>Discover stylish Nike arrival, quality comfort, and innovation for active skill</p>
        <Button iconUrl={arrowRight} label="Shop now" />


        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-14  '> 
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className=' text-4xl font-palanquin font-bold '>{stat.value}</p>
              <p className='font-palanquin leading-7 text-slate-gray'>{stat.label}</p>
            </div >
          ))}
        </ div>
      </div>

      <div className='flex-1 flex relative justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="bigshoe1" height={500} width={610} className='object-contain relative z-10' />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) =>(
            <div key={shoe}>
              <ShoeCart  imgURL={shoe} changeBigShoe={(shoe) =>setBigShoeImg (shoe)} bigShoeImg={bigShoeImg}/>
            </div>
          ))}

        </div>
      </div>




    </section >
  )
}

export default Hero