import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import image1 from '../assets/gallery/remodeling/FYJI1211.JPG'
import image2 from '../assets/gallery/other/UVTE7010.JPG'
import image3 from '../assets/gallery/carpentry/GATJ5337.JPG'
import image4 from '../assets/gallery/demolition/YCMA8915.JPG'
import image5 from '../assets/gallery/siding/SJKA7466.JPG'
import image6 from '../assets/gallery/other/RZSJ3378.JPG'
import image7 from '../assets/gallery/remodeling/XQID1111.JPG'


// chose best pcitures from gallery to showcase below

const Gallery_prev = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
        <h3 id="gallery" className="text-3xl font-bold text-center mb-6">Gallery</h3>
      {/* Image */}
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="rounded-2xl shadow-lg w-full h-96 object-cover transition duration-500"
      />

      {/* Prev Button */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black cursor-pointer">
        <ChevronLeft className='w-6 h-6'/>
      </button>

      {/* Next Button */}
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black cursor-pointer">
        <ChevronRight className='w-6 h-6'/>
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
            <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full 
                ${index === current ? "bg-yellow-500" : "bg-gray-400"
            }`}>        
            </button>
        ))}
      </div>
      <button onClick={() => navigate("/gallery")} className="inline-block px-6 py-3 rounded-lg bg-yellow-400 text-neutral-900 font-semibold shadow-md hover:bg-yellow-300 transition cursor-pointer">
            Show All Work
          </button>
    </div>
  );
};

export default Gallery_prev;