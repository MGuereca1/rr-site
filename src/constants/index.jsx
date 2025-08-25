// for content that needs to be constant

export const navItems = [
    { label: 'Home', href:'/'},
    { label: 'Services', href:'/services'},
    { label: 'About', href:'/about'},
    { label: 'Gallery', href:'/gallery'},
    { label: 'Contact', href:'#contact'}, // Fixed: Added missing forward slash
]

export const services = [
    {
      title: "Frames",
      description: "Professional framing services for residential and commercial projects",
      image: "", // Add your image path here
      alt: "frame example"
    },
    {
      title: "Decks", 
      description: "Custom deck construction and renovation services",
      image: "", // Add your image path here
      alt: "deck example"
    },
    {
      title: "Finishing",
      description: "Interior and exterior finishing work with attention to detail",
      image: "", // Add your image path here
      alt: "finishing example"
    },
    {
      title: "Commercial Builds",
      description: "Large-scale commercial construction projects",
      image: "", // Add your image path here
      alt: "commercial build example"
    }
  ]

export const about = [
    {
      title:'Our Story',
      description:'Founded in 2020 something....say stuff about experience',
      img:''
    },
    {
      title:'Here to help you',
      description:'values and approaches, pricing.....',
      img:''
    },
    {
      title:'Our Team',
      description:'Meet our team....',
      img:''
    }
  ]

export const SocialLinks = [
    { href: '#', label: 'Facebook' },
    { href: '#', label: 'Instagram' },
]

export const QuickLink = [
    { href:'/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/services', text: 'Services' },
    { href: '/contact', text: 'Contact' }
]

export const ServicesLink = [
    { href: '/services', text: 'Carpentry' },
    { href: '/services', text: 'Home Development' },
    { href: '/services', text: 'Finishing' },
    { href: '/services', text: 'other services'}
]

export const contactInfo = {
    email: {
        address: 'example@gmail.com',
        href: 'mailto:example@gmail.com'
    },
    phone: {
        display: '+1 (234) 567-890',
        href: 'tel:+1234567890'
    },
    address: {
        full: '123 Main Street\nAtlanta, GA 30309'
    }
}

export const social = {
    // change message here
    message:{
        text:'Building amazing experiences and delivering quality services to our valued customers since 2020.'
    },
    social1: {
        label: 'Facebook',
        //TODO: href: '#' place facebook link here 
    },
    social2: {
        label: 'Instagram',
        //TODO: href: '#' place INSTAGRAM link here 
    }
}