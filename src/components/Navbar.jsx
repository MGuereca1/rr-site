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
        <div className="relative flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={plogo} alt="logo" />
            <span className="text-xl tracking-tight">
              RR Construction Solutions LLC.
            </span>
          </div>
        </div>
        
        {/* the hiddden below makes it so the Navitems only show up in bigger screens */}
        <ul className="hidden lg:flex justify-center space-x-10 mt-2 ">
          {navItems.map((item, index) =>(
            <li key={index}>
                {item.href.startsWith('#') ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <NavLink to={item.href}>{item.label}</NavLink>
                )}
              </li>
          ))}
        </ul>
        
        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu/>}
          </button>
        </div>
        
        {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
        </div>
    )}

      </div>


    </nav>
  )
}

export default Navbar