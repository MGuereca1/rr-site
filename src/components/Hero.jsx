import React from 'react'
import placeholder from '../assets/placeholder.jpg'

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
  {/* Background image */}
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src={placeholder}
    alt="construction background"
  />
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-6">
    {/* Subheading / Tagline */}
    <h3 className="text-sm md:text-lg font-semibold uppercase tracking-widest text-yellow-400 mb-4">
      Need Help to Build?
    </h3>

    {/* Main Heading */}
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
      R&amp;R Construction Solutions
    </h1>

    {/* Supporting Message */}
    <p className="text-base md:text-xl max-w-2xl mx-auto mb-6">
      “Here at R&amp;R we only do the best for our customers!”
    </p>

    {/* Experience */}
    <h2 className="text-lg md:text-2xl font-medium text-gray-200">
      Over <span className="text-yellow-400 font-bold">20 years</span> of experience
    </h2>
  </div>
</div>

  )
}

export default Hero
