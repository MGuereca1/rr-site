import React from "react"
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"
import { contactInfo, QuickLink, ServicesLink, social } from "../constants/index.jsx"
import terms_serv from "../pages/Terms.jsx"
import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 border-t border-neutral-700/80">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4"> R&R Construction Solutions LLC.</h3>
            <p className="mb-4">{social.message.text}</p>
            <div className="flex space-x-4">
              <a
                href={social.social1.href}
                className="hover:text-yellow-400 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href={social.social2.href}
                className="hover:text-yellow-400 transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QuickLink.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {ServicesLink.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <a
                  href={contactInfo.email.href}
                  className="hover:text-yellow-400 transition"
                >
                  {contactInfo.email.address}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <a
                  href={contactInfo.phone.href}
                  className="hover:text-yellow-400 transition"
                >
                  {contactInfo.phone.display}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} />
                <span>{contactInfo.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-neutral-700/80 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>&copy; {currentYear} R&R Construction Solutions LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="Terms" className="hover:text-yellow-400 transition">
              Terms of Service
            </Link>
            <Link to="Privacy" className="hover:text-yellow-400 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
