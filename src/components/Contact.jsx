import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact" className="bg-neutral-900 text-white py-16 border-t border-neutral-700/80">
        <div className="container mx-auto px-4 max-w-3xl">
          
          {/* Section Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              Need a Quote?
            </h1>
            <h3 className="text-lg md:text-xl text-neutral-300">
              Contact us below
            </h3>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your name"
                  className="px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700/60 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 outline-none transition"
                />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700/60 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 outline-none transition"
                />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone_number"
                  required
                  placeholder="123-456-7890"
                  className="px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700/60 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 outline-none transition"
                />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Your Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Enter your message"
                  rows="5"
                  className="px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700/60 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 outline-none transition resize-none"
                ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-yellow-400 text-neutral-900 font-semibold shadow-md hover:bg-yellow-300 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  )
}

export default Contact