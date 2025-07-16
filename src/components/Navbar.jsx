import React from 'react'
import { Link } from 'react-router-dom';
import { House, Lamp, Amphora, BrickWall, Contact  } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='z-50 sticky top-0 flex justify-between items-center px-10 py-3 bg-white font-heading'>
      <Link to='/' className='flex gap-3'><House /> Home</Link>
      <Link to='/vases' className='flex gap-3'><Amphora /> Vases</Link>
      <Link to='/lamps' className='flex gap-3'><Lamp /> Lamps</Link>
      <Link to='/wallart' className='flex gap-3'><BrickWall /> Wall Art</Link>
      <Link to='/contact' className='flex gap-3'><Contact /> Contact</Link>
    </nav>
  )
}

export default Navbar
