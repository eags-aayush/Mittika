import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

import CeramicWaveVase from '../assets/images/Vases/CeramicWaveVase.png'
import SculpturalPlantPot from '../assets/images/Vases/SculpturalPlantPot.png'
import MinimalistClayVase from '../assets/images/Vases/MinimalistClayVase.png'
import GlassRippleVase from '../assets/images/Vases/GlassRippleVase.png'
import BlackStoneVase from '../assets/images/Vases/BlackStoneVase.png'
import TerracottaDuoVase from '../assets/images/Vases/TerracottaDuoVase.png'
import ArchedGlowVase from '../assets/images/Vases/ArchedGlowVase.png'
import MatteTubeVase from '../assets/images/Vases/MatteTubeVase.png'
import BlushFoldVase from '../assets/images/Vases/BlushFoldVase.png'
import CorkNeckVase from '../assets/images/Vases/CorkNeckVase.png'

const featuredProductsData = [
  {
    id: 'ceramicWave85',
    type: 'vases',
    name: 'Ceramic Wave Vase',
    description: 'Hand-thrown, glazed finish.',
    price: 85.00,
    imageUrl: CeramicWaveVase
  },
  {
    id: 'sculptPot65',
    type: 'vases',
    name: 'Sculptural Plant Pot',
    description: 'Indoor/outdoor, with drainage hole.',
    price: 65.00,
    imageUrl: SculpturalPlantPot
  },
  {
    id: 'clayMinimal70',
    type: 'vases',
    name: 'Minimalist Clay Vase',
    description: 'Matte finish, natural tones.',
    price: 70.00,
    imageUrl: MinimalistClayVase
  },
  {
    id: 'glassRipple90',
    type: 'vases',
    name: 'Glass Ripple Vase',
    description: 'Hand-blown, rippled design.',
    price: 90.00,
    imageUrl: GlassRippleVase
  },
  {
    id: 'blackStone75',
    type: 'vases',
    name: 'Black Stone Vase',
    description: 'Heavy ceramic with stone texture.',
    price: 75.00,
    imageUrl: BlackStoneVase
  },
  {
    id: 'terraDuo60',
    type: 'vases',
    name: 'Terracotta Duo Vase',
    description: 'Rustic design with dual openings.',
    price: 60.00,
    imageUrl: TerracottaDuoVase
  },
  {
    id: 'archGlow80',
    type: 'vases',
    name: 'Arched Glow Vase',
    description: 'Glossy finish with arched silhouette.',
    price: 80.00,
    imageUrl: ArchedGlowVase
  },
  {
    id: 'matteTube55',
    type: 'vases',
    name: 'Matte Tube Vase',
    description: 'Tall and slim, matte surface.',
    price: 55.00,
    imageUrl: MatteTubeVase
  },
  {
    id: 'blushFold88',
    type: 'vases',
    name: 'Blush Fold Vase',
    description: 'Elegant folds with blush pink glaze.',
    price: 88.00,
    imageUrl: BlushFoldVase
  },
  {
    id: 'corkNeck72',
    type: 'vases',
    name: 'Cork Neck Vase',
    description: 'Textured body with cork-wrapped neck.',
    price: 72.00,
    imageUrl: CorkNeckVase
  }
];

const Vases = () => {
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

export default Vases
