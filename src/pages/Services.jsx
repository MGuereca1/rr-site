import React from 'react'
import {services} from '../constants'

const Services = () => {
  return (
    <div>
        <section className="bg-neutral-900 text-white py-16 border-t border-neutral-700/80">
  <div className="container mx-auto px-6">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
      Our Services
    </h2>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <article
          key={index}
          className="bg-neutral-800 rounded-2xl shadow-md border border-neutral-700/60 hover:border-yellow-400 transition overflow-hidden"
        >
          {/* Service Image */}
          <div className="h-48 w-full overflow-hidden">
            <img
              src={service.image || "/api/placeholder/300/200"}
              alt={service.alt}
              className="w-full h-full object-cover transform hover:scale-105 transition"
            />
          </div>

          {/* Service Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              {service.title}
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

export default Services