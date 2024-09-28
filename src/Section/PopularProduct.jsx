import React from 'react'
import PopularProductCart from '../Components/PopularProductCart'
import { products } from '../constant'

const PopularProduct = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12 '>
      <div className='flex flex-col justify-startgap-5'>
        <h2 className='text-4xl font-palanquin font-bold '>Our <span className='text-coral-red'>Popular </span> Product</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray sm:gap-4 gap-14'>They come in various styles, materials, and designs to cater to different activities, fashion preferences, and weather conditions. From athletic sneakers for sports to elegant formal shoes for special occasions, they offer both functionality and style.</p>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
          {products.map((product) => (
            <PopularProductCart key={product.name}  {...product} />
          ))}
        </div>

      </div>

    </section>
  )
}

export default PopularProduct