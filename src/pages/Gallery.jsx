import { useState } from 'react'
import { services, galleryImages } from '../constants'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')


  // Filter images based on selected service
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.service === activeFilter)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Gallery</h1>
          <h3 className="text-xl text-gray-600">See our work below</h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-yellow-500 text-black font-semibold'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
            }`}
          >
            All Projects
          </button>
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(service.title)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                activeFilter === service.title
                  ? 'bg-yellow-500 text-black font-semibold'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Coming+Soon'
                  }}
                />
              </div>
              <div className="p-4">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mb-2">
                  {image.service}
                </span>
                <h3 className="font-semibold text-gray-800 mb-2">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for this service.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery