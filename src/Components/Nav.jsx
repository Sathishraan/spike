import React from 'react'
import { hamburger } from '../assets/icons'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constant'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute  z-10  w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Header Logo"  height={55} width={56}/>
          <h2 className='text-lg text-coral-red font-palanquin font-bold'>Spike</h2>
        </a>
        <ul className='flex relative right-[22%] justify-center items-center gap-16 max-lg:hidden '>
          {navLinks.map((items) => (
            <li key={items.label}>
              <a href={items.href} className='text-lg font-montserrat leading-normal text-slate-gray'>
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburger" height={23} width={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav 