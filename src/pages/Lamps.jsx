import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

import GeometricTableLamp from '../assets/images/Lamps/GeometricalTableLamp.png'
import WoodenArcLamp from '../assets/images/Lamps/WoodenArcLamp.png'
import GlassOrbLamp from '../assets/images/Lamps/GlassOrbLamp.png'
import VintageDeskLamp from '../assets/images/Lamps/VintageDeskLamp.png'
import CopperPipeLamp from '../assets/images/Lamps/CopperPipeLamp.png'
import MushroomGlowLamp from '../assets/images/Lamps/MushroomGlowLamp.png'
import LinenShadeLamp from '../assets/images/Lamps/LinenShadeLamp.png'
import MetalTowerLamp from '../assets/images/Lamps/MetalTowerLamp.png'
import TripodBeamLamp from '../assets/images/Lamps/TripodBeamLamp.png'
import BambooHaloLamp from '../assets/images/Lamps/BambooHaloLamp.png'

const featuredProductsData = [
  {
    id: 'geoGlow120',
    type: 'lamps',
    name: 'Geometric Table Lamp',
    description: 'Modern design with warm ambient glow.',
    price: 120.00,
    imageUrl: GeometricTableLamp
  },
  {
    id: 'woodArc95',
    type: 'lamps',
    name: 'Wooden Arc Lamp',
    description: 'Curved wooden frame with soft light.',
    price: 95.00,
    imageUrl: WoodenArcLamp
  },
  {
    id: 'glassOrb110',
    type: 'lamps',
    name: 'Glass Orb Lamp',
    description: 'Translucent orb for diffused lighting.',
    price: 110.00,
    imageUrl: GlassOrbLamp
  },
  {
    id: 'vintageDesk89',
    type: 'lamps',
    name: 'Vintage Desk Lamp',
    description: 'Classic design with brass accents.',
    price: 89.00,
    imageUrl: VintageDeskLamp
  },
  {
    id: 'copperPipe102',
    type: 'lamps',
    name: 'Copper Pipe Lamp',
    description: 'Industrial style with exposed bulb.',
    price: 102.00,
    imageUrl: CopperPipeLamp
  },
  {
    id: 'mushroomGlow78',
    type: 'lamps',
    name: 'Mushroom Glow Lamp',
    description: 'Rounded top with soft diffused light.',
    price: 78.00,
    imageUrl: MushroomGlowLamp
  },
  {
    id: 'linenShade84',
    type: 'lamps',
    name: 'Linen Shade Lamp',
    description: 'Natural fabric shade with wooden base.',
    price: 84.00,
    imageUrl: LinenShadeLamp
  },
  {
    id: 'metalTower99',
    type: 'lamps',
    name: 'Metal Tower Lamp',
    description: 'Tall and sleek with chrome finish.',
    price: 99.00,
    imageUrl: MetalTowerLamp
  },
  {
    id: 'tripodBeam105',
    type: 'lamps',
    name: 'Tripod Beam Lamp',
    description: 'Three-legged base with wide beam light.',
    price: 105.00,
    imageUrl: TripodBeamLamp
  },
  {
    id: 'bambooHalo92',
    type: 'lamps',
    name: 'Bamboo Halo Lamp',
    description: 'Eco-friendly bamboo with circular glow.',
    price: 92.00,
    imageUrl: BambooHaloLamp
  }
];

const Lamps = () => {
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 p-10'>
      {featuredProductsData.map(product => (
        <div className='bg-gray-100 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'>
          <Link to={`/${product.type}/${product.id}`}>
            <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
          </Link>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className='text-gray-700 mb-2'>Id: {product.id}</p>
            <p className="text-2xl font-bold text-primary-600">₹{product.price}</p>
            {/* <Link
              to={`/${product.type}/${product.id}`}
              className="mt-4 block text-center bg-secondary-500 hover:bg-secondary-600 text-black py-2 px-4 rounded-md transition duration-300"
            >
              Enquire
            </Link> */}
          </div>
        </div>
      ))}
      </div>
      <Footer />
    </>
  )
}

export default Lamps
