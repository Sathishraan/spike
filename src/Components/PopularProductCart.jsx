import React from 'react'
import { star } from '../assets/icons'

const PopularProductCart = ({ imgURL, name, price }) => {
    return (
        <div className='flex flex-1 flex-col max-sm:w-full'>
            <img src={imgURL} alt="Shoes" className='mt-9 w-[280px] h-[280px]' />

            <div className='mt-8 flex justify-start gap-2.5'>
                <img src={star} alt='star' />
                <p className='font-montserrat text-slate-gray leading-normal text-xl'>4.3</p>
            </div>

            <h3 className='mt-3 font-palanquin font-semibold leading-normal'>{name}</h3>
            <p className='mt-2 font-montserrat text-coral-red font-semibold leading-normal text-2xl'>{price}</p>
        </div>
    )
}

export default PopularProductCart
