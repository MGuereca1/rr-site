import React from 'react'
import {about} from '../constants'

const About = () => {
//   is mapping correct???
  return(
    <section className="bg-neutral-900 text-white py-16 border-t border-neutral-700/80">
  <div className="container mx-auto px-6">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
      About Us
    </h2>

    {/* Loop through about items */}
    <div className="space-y-16">
      {about.map((item, index) => (
        <div
          key={index}
          className={`grid md:grid-cols-2 gap-10 items-center ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              {item.title}
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-neutral-700/60">
            <img
              src={item.img || "/api/placeholder/500/300"}
              alt={item.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  )

}

export default About