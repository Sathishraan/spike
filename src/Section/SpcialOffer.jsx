import React from 'react'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../Components/Button'

const SpcialOffer = () => {
  return (
    <section className='flex  flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>

      <div className='flex-1'>
        <img src={offer} alt="offer" width={773} height={683} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin  capitalize text-4xl  font-bold max-lg:w-full'>

          <span className='text-coral-red mt-3 px-2'>Spcial</span>
          offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Offers are special deals or promotions designed to attract customers by providing discounts,
         incentives, or exclusive benefits. They often include price reductions, bundled products, 
         limited-time deals, or loyalty rewards, and are a key strategy for boosting sales and customer
          engagement in retail or e-commerce platforms.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          To enjoy our offers 
        </p>

        <div className='mt-11'><Button iconUrl={arrowRight} label="Shop now" /> 
        </div>

      </div>
    </section>
  )
}

export default SpcialOffer