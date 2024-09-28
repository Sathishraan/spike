import React from 'react'
import ServiceCart from '../Components/ServiceCart'
import { services } from '../constant'

const Service = () => {
  return (
    <section className='max-container flex  justify-center flex-wrap gap-9'>

      {services.map((service) =>(
        <ServiceCart key={service.label} {...service} />
      )

)}


    </section>

    
    )
}

export default Service