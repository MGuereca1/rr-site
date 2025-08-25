import React from 'react'
import {services} from '../constants'
import { useNavigate } from 'react-router-dom'


const ServicePrev = () => {
    const preview = services.slice(0,3)
    
    const navigate = useNavigate()
  
    return (
        <section className="bg-neutral-900 text-white py-16 border-t border-neutral-700/80">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
          Our Services
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preview.map((service, index) => (
            <article
              key={index}
              className="bg-neutral-800 rounded-2xl shadow-md border border-neutral-700/60 hover:border-neutral-500 transition overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image || "/api/placeholder/300/200"}
                  alt={service.alt}
                  className="w-full h-full object-cover transform hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                  {service.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/services")}
            className="inline-block px-6 py-3 rounded-lg bg-yellow-400 text-neutral-900 font-semibold shadow-md hover:bg-yellow-300 transition"
          >
            Show All Services
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicePrev