import React from 'react'

const Button = ({ label, iconUrl }) => {
    return (
        <button className='flex justify-center items-end px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white  hover:bg-red-600' >
            {label}
            <img src={iconUrl} alt="ight Arrow" className='ml-3 rounded-full h-5 w-5  ' />
        </button>
    )
}

export default Button