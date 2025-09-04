import React, { useState } from 'react'
import {Menu, X} from 'lucide-react'
import { navItems } from '../constants'
import plogo from '../assets/plogo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState()

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }
  
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="relative flex items-center justify-center lg:justify-between">
          {/* Empty div for desktop spacing - keeps logo centered on mobile */}
          <div className="hidden lg:block flex-1"></div>
          
          {/* Centered logo and company name */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={plogo} alt="logo" />
            <span className="text-xl tracking-tight">
              RR Construction Solutions LLC.
            </span>
          </div>
          
          {/* Mobile menu button - positioned absolutely on mobile, normally on desktop */}
          <div className="lg:hidden absolute right-0">
            <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu/>}
            </button>
          </div>
          
          {/* Empty div for desktop spacing - keeps logo centered */}
          <div className="hidden lg:block flex-1"></div>
        </div>
        
        {/* Navigation items - centered below logo */}
        <ul className="hidden lg:flex justify-center space-x-10 mt-4">
          {navItems.map((item, index) =>(
            <li key={index}>
                {item.href.startsWith('#') ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <NavLink to={item.href}>{item.label}</NavLink>
                )}
              </li>
          ))}
          <button className='text-white hover:rounded-md hover:bg-yellow-500 hover:text-black cursor-pointer px-3 py-1 transition-all duration-200' onClick={() => window.location.href = '#contact'}>Contact Us</button>
        </ul>
        
        {mobileDrawerOpen && (
        <div className="absolute top-full right-0 z-20 bg-neutral-900 w-80 p-6 flex flex-col justify-start items-start lg:hidden shadow-lg rounded-bl-lg">
            <ul className="w-full">
              {navItems.map((item, index) => (
                <li key={index} className="py-3 border-b border-neutral-700 last:border-b-0">
                  {item.href.startsWith('#') ? (
                    <a href={item.href} className="block hover:text-neutral-300 transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <NavLink to={item.href} className="block hover:text-neutral-300 transition-colors">
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <button 
                  onClick={() => window.location.href = '#contact'} 
                  className="w-full text-left hover:text-neutral-300 transition-colors"
                >
                  Contact us
                </button>
              </li>
            </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar