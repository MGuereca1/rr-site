import React from 'react'
import Hero from '../components/Hero'
import About_prev from './About_prev'
import ServicePrev from './ServicePrev'
import Contact from '../components/Contact'


const Home = () => {
    // call st
  return (
    <div>
        <Hero />
        <About_prev/>
        <ServicePrev/>
        <Contact/>
    </div>
  )
}

export default Home