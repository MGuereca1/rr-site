import hero from '../assets/gallery/siding/MINV6800.JPG'

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8 md:pt-20 md:pb-12">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={hero}
          alt="Premium construction and remodeling work"
        />
        {/* Professional overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto py-8">
        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Licensed & Bonded</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Fully Insured</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>15+ Years Experience</span>
          </div>
        </div>

        {/* Main value proposition */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-slate-200 mb-3 sm:mb-4 leading-relaxed px-2"> 
          <span className="text-amber-400 font-medium"> Stronger Builds</span>, resulting in
          <span className="text-amber-400 font-medium"> Stronger Futures</span>.
        </h1>

        {/* Company name */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
          R&R Construction
          <span className="block text-xl sm:text-2xl md:text-3xl font-normal text-amber-400 mt-1 sm:mt-2 tracking-wide">
            Solutions LLC
          </span>
        </h2>

        {/* Professional description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-2">
          Delivering professional remodeling, carpentry, and construction services with 
          <span className="text-amber-400 font-medium"> honesty</span>, 
          <span className="text-amber-400 font-medium"> hard work</span>, and 
          <span className="text-amber-400 font-medium"> integrity</span>.
        </p>

        {/* Key differentiators */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap sm:gap-2 mb-6 sm:mb-10 max-w-xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2">100%</div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-300 leading-tight">Satisfaction Guaranteed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2">Hundreds</div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-300 leading-tight">Of Completed Projects</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-16 mb-8 sm:mb-6">
          <button onClick={() => window.location.href = '#contact'} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
            Get Your Free Estimate
          </button>
          <button onClick={() => window.location.href = '#gallery'} className="w-full sm:w-auto border-2 border-slate-300 text-slate-200 hover:bg-slate-300 hover:text-slate-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg cursor-pointer">
            View Our Work
          </button>
        </div>

        {/* Contact prompt */}
        <p className="text-slate-400 text-xs sm:text-sm px-2">
          Ready to start your project? Call us today: 
          <a href="tel:+16786290102" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors"> (678) 629-0102</a>
        </p>
      </div>

    </div>
  )
}

export default Hero