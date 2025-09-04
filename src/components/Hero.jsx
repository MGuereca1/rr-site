import placeholder from '../assets/placeholder.jpg'

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={placeholder}
          alt="Premium construction and remodeling work"
        />
        {/* Professional overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        {/* Trust indicators */}
        <div className="flex justify-center items-center space-x-8 mb-8 text-sm text-slate-300">
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
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-200 mb-4 leading-relaxed"> 
          <span className="text-amber-400 font-medium"> Stronger Builds</span>, resulting in
          <span className="text-amber-400 font-medium"> Stronger Futures</span>.
        </h1>

        {/* Company name */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          R&R Construction
          <span className="block text-2xl md:text-3xl font-normal text-amber-400 mt-2 tracking-wide">
            Solutions LLC
          </span>
        </h2>

        {/* Professional description */}
        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Delivering professional remodeling, carpentry, and construction services with 
          <span className="text-amber-400 font-medium"> honesty</span>, 
          <span className="text-amber-400 font-medium"> hard work</span>, and 
          <span className="text-amber-400 font-medium"> integrity</span>.
        </p>

        {/* Key differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-3 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
            <div className="text-sm uppercase tracking-wider text-slate-300">Satisfaction Guaranteed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">Hundreds</div>
            <div className="text-sm uppercase tracking-wider text-slate-300">Of Completed Projects</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button onClick={() => window.location.href = '#contact'} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
            Get Your Free Estimate
          </button>
          <button onClick={() => window.location.href = '#gallery'} className="w-full sm:w-auto border-2 border-slate-300 text-slate-200 hover:bg-slate-300 hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg cursor-pointer">
            View Our Work
          </button>
        </div>

        {/* Contact prompt */}
        <p className="mt-8 text-slate-400 text-sm">
          Ready to start your project? Call us today: 
          <span className="text-amber-400 font-semibold"> (678) 629-0102</span>
        </p>
      </div>

    </div>
  )
}

export default Hero