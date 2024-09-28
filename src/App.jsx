import React from 'react';
import Nav from './Components/Nav';
import CustomerReview from './Section/CustomerReview';
import Footer from './Section/Footer';
import Hero from './Section/Hero';
import PopularProduct from './Section/PopularProduct';
import Service from './Section/Service';
import SpcialOffer from './Section/SpcialOffer';
import Subcribe from './Section/Subcribe';
import SuperQuality from './Section/SuperQuality';



const App = () => (
  <main className='relative'>
    <Nav />
    <section className='xl:padding-1 wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProduct />
    </section>
    <section className='padding'>
     <SuperQuality />
    </section>
    <section className='padding-x py-10 '>
     <Service />
    </section>
    <section className='padding'>
      <SpcialOffer />
    </section>
    <section className='bg-pale-blue padding'>
     <CustomerReview />
    </section>
    <section className='padding-x sm:py-32 py-16 w-full '>
     <Subcribe />
    </section>
    <section className='padding-x bg-black paddding-t pb-8'>
      <Footer />
    </section>

  </main>
)



export default App