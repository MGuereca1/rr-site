// for content that needs to be constant

export const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
]

export const services = [
    {
      title: "Remodeling",
      description: "Complete home and commercial remodeling services designed to transform your space with quality craftsmanship and attention to detail.",
      image: "", // Add your image path here
      alt: "remodeling example"
    },
    {
      title: "Carpentry",
      description: "Expert carpentry tailored to your needs — from custom builds to structural work. Carpentry is our specialty and most requested service.",
      image: "", 
      alt: "carpentry example"
    },
    {
      title: "Demolition",
      description: "Safe, efficient demolition services to prepare your property for new builds, renovations, or upgrades.",
      image: "",
      alt: "demolition example"
    },
    {
      title: "Siding Packages",
      description: "Durable and attractive siding solutions to enhance curb appeal while protecting your property from the elements.",
      image: "",
      alt: "siding example"
    }
]

export const about = [
    {
      title: "Our Story",
      description: "Founded on a passion for building, R&R Construction Solutions LLC has grown from a family tradition into a professional construction business. With over 15 years of hands-on experience in carpentry and remodeling, our journey began with a love for the trade and a commitment to quality craftsmanship.",
      img: ""
    },
    {
      title: "Our Values",
      description: "We believe in honesty, hard work, and integrity. Our small but dedicated team of professionals is committed to fast, efficient, and reliable service. Every project we take on reflects our motto: 'Quality first — professional, trustworthy, and built for a stronger future.'",
      img: ""
    },
    {
      title: "Our founder",
      description: "Luis Guereca founded the company in 2021 after over a decade of experience in the construction industry. Driven by a commitment to quality and integrity, Luis believes every project should stand the test of time creating not just strong builds, but stronger futures for the people who live and work in them.",
      img: ""
    },
]

export const QuickLink = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/services', text: 'Services' },
    { href: '/contact', text: 'Contact' }
]

export const ServicesLink = [
    { href: '/services', text: 'Remodeling' },
    { href: '/services', text: 'Carpentry' },
    { href: '/services', text: 'Demolition' },
    { href: '/services', text: 'Siding Packages' }
]

export const contactInfo = {
    email: {
        address: 'rrconstruction.solutions1@gmail.com', // replace with actual email
        href: 'mailto:example@gmail.com'
    },
    phone: {
        display: '678-629-0102',
        href: 'tel:6786290102'
    },
    address: {
        full: '123 Main Street\nAtlanta, GA 30309'
    }
}

export const social = {
    message: {
        text: 'Quality first — delivering professional, trustworthy builds for a stronger future since day one.'
    },
    social1: {
        label: 'Facebook',
        href: '#'
    },
    social2: {
        label: 'Instagram',
        href: 'https://www.instagram.com/constructionsatl?igsh=MTB2bm8wa3NlbGxpOQ=='
    }
}

import dune from '../assets/gallery/dune.avif'
import image1 from '../assets/gallery/image-1.jpg'
import image2 from '../assets/gallery/image-2.jpg'
import image3 from '../assets/gallery/image-3.jpg'
import image4 from '../assets/gallery/image-4.jpg'

export const galleryImages = [
    {
      id: 1,
      src: dune,  // Changed from 'imgage' to 'src'
      alt: 'Kitchen remodel project',
      service: 'Remodeling',
      title: 'Modern Kitchen Renovation'
    },
    {
      id: 2,
      src: image1,  
      alt: 'Custom cabinet work',
      service: 'Carpentry',
      title: 'Custom Built-in Cabinets'
    },
    {
      id: 3,
      src: image2, 
      alt: 'Demolition work in progress',
      service: 'Demolition',
      title: 'Bathroom Demolition'
    },
    {
      id: 4,
      src: image3, 
      alt: 'New siding installation',
      service: 'Siding Packages',
      title: 'Vinyl Siding Installation'
    },
    {
      id: 5,
      src: image4, 
      alt: 'Bathroom remodel',
      service: 'Remodeling',
      title: 'Complete Bathroom Renovation'
    }
]