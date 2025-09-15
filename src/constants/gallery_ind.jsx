// import pictures for gallery
// TODO: figure out easier way to import all pictures from gallery!!!!!!!

// This glob pattern should read from subfolders: gallery/subfolder/image.jpg
// Added uppercase extensions for case sensitivity
const images = import.meta.glob('../assets/gallery/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true })

// Debug: Log what images were found
console.log('Found images paths:', Object.keys(images))
console.log('Total images found:', Object.keys(images).length)

// Check if we're getting subfolder structure
Object.keys(images).forEach(path => {
  const parts = path.split('/')
  console.log(`Path: ${path}`)
  console.log(`Parts: [${parts.join(', ')}]`)
  console.log(`Gallery folder index: ${parts.findIndex(part => part === 'gallery')}`)
  console.log(`Service folder (should be after gallery): ${parts[parts.length - 2]}`)
  console.log('---')
})

export const galleryImages = Object.entries(images).map(([path, mod], index) => {
  const parts = path.split('/')
  const galleryIndex = parts.findIndex(part => part === 'gallery')
  
  // Make sure we have a subfolder structure: .../gallery/subfolder/image.jpg
  if (galleryIndex === -1 || galleryIndex >= parts.length - 2) {
    console.warn(`Skipping image - not in expected subfolder structure: ${path}`)
    return null
  }
  
  const serviceFolder = parts[galleryIndex + 1] // The folder right after 'gallery'
  const filename = parts[parts.length - 1]
  
  console.log(`Processing: ${filename} from ${serviceFolder} folder`)

  // Use folder name as service, just capitalize it
  const serviceName = serviceFolder.charAt(0).toUpperCase() + serviceFolder.slice(1)

  const imageObj = {
    id: index + 1,
    src: mod.default || mod,
    alt: `${serviceName} project`,
    service: serviceName,
  }

  return imageObj
}).filter(Boolean) // Remove any null entries

console.log('Final galleryImages:', galleryImages)
console.log('Services found:', [...new Set(galleryImages.map(img => img.service))])