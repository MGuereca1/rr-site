import React from 'react'
import {about} from '../constants'
import { NavLink } from 'react-router-dom'

const About_prev = () => {
    const preview = about.slice(0,2)

  return (
    <section className="bg-neutral-900 text-white py-16 border-t border-neutral-700/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
          About Us
        </h2>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {preview.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-2xl shadow-md p-8 border border-neutral-700/60 hover:border-neutral-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                {item.title}
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center mt-12">
          <NavLink
            to="/about"
            className="inline-block px-6 py-3 rounded-lg bg-yellow-400 text-neutral-900 font-semibold shadow-md hover:bg-yellow-300 transition"
          >
            Learn More About Us
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default About_prev