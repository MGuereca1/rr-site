import React from 'react'
import Hero from '../components/Hero'
import About_prev from './About_prev'
import ServicePrev from './ServicePrev'
import Contact from '../components/Contact'
import Gallery_prev from './Gallery_prev'


const Home = () => {

  return (
    <div>
        <Hero />
        <About_prev/>
        <ServicePrev/>
        <br></br>
        <Gallery_prev/>
        <br></br>
        <Contact/>
    </div>
  )
}

export default Home