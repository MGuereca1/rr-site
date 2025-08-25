import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  console.log('RootLayout component is rendering') // Debug log
  
  return (
    <div>
      <Navbar/>
        <div className="container">
        <Outlet />
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout