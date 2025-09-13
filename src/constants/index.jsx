// for content that needs to be constant

export const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact us', href: '/contact' },
]

import carpentry from '../assets/service_img/carpentry.jpg'
import remodeling from '../assets/service_img/remodeling.jpg'
import demolition from '../assets/service_img/demolition.jpg'
import siding from '../assets/service_img/siding.jpg'
import more from '../assets/service_img/more.jpg'

export const services = [
    {
      title: "Remodeling",
      description: "Complete home and commercial remodeling services designed to transform your space with quality craftsmanship and attention to detail.",
      image: remodeling,
      alt: "remodeling example"
    },
    {
      title: "Carpentry",
      description: "Expert carpentry tailored to your needs — from custom builds to structural work. Carpentry is our specialty and most requested service.",
      image: carpentry, 
      alt: "carpentry example"
    },
    {
      title: "Demolition",
      description: "Safe, efficient demolition services to prepare your property for new builds, renovations, or upgrades.",
      image: demolition,
      alt: "demolition example"
    },
    {
      title: "Siding",
      description: "Durable and attractive siding solutions to enhance curb appeal while protecting your property from the elements.",
      image: siding,
      alt: "siding example"
    },
    {
      title: "Other",
      description: "Need anything else done? Contact us to work out the job you want!",
      image: more,
      alt: "other"
    }
]

import Logo from '../assets/logo.JPG'
import values from '../assets/gallery/siding/SKHC7343.JPG'


export const about = [
    {
      title: "Our Story",
      description: "Founded on a passion for building, R&R Construction Solutions LLC has grown from a family tradition into a professional construction business. With over 15 years of hands-on experience in carpentry and remodeling, our journey began with a love for the trade and a commitment to quality craftsmanship.",
      img: Logo
    },
    {
      title: "Our Values",
      description: "We believe in honesty, hard work, and integrity. Our small but dedicated team of professionals is committed to fast, efficient, and reliable service. Every project we take on reflects our motto: 'Quality first — professional, trustworthy, and built for a stronger future.'",
      img: values
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
        address: 'rrconstruction.solutions1@gmail.com',
        href: 'mailto:rrconstruction.solutions1@gmail.com'
    },
    phone: {
        display: '678-629-0102',
        href: 'tel:6786290102'
    },
    address: {
        full: '1846 Alcovy Trace way \nLawrenceville, GA 30045'
    }
}

export const social = {
    message: {
        text: 'Quality first — delivering professional, trustworthy builds for a stronger future since day one.'
    },
    social1: {
        label: 'Facebook',
        href: 'https://www.facebook.com/share/1HALE6gfAh/?mibextid=wwXIfr'
    },
    social2: {
        label: 'Instagram',
        href: 'https://www.instagram.com/constructionsatl?igsh=MTB2bm8wa3NlbGxpOQ=='
    }
}

