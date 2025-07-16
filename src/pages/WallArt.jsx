import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import AbstractWallArt from '../assets/images/Wall Art/AbstractWallArt.png'
import GeometricGridPrint from '../assets/images/Wall Art/GeometricGridPrint.png'
import SunsetCurveArt from '../assets/images/Wall Art/SunsetCurveArt.png'
import LinenTextureLines from '../assets/images/Wall Art/LinenTextureLines.png'
import RetroPulsePoster from '../assets/images/Wall Art/RetroPulsePoster.png'
import NatureFrameSketch from '../assets/images/Wall Art/NatureFrameSketch.png'
import ArchLayerPanel from '../assets/images/Wall Art/ArchLayerPanel.png'
import MinimalLineArt from '../assets/images/Wall Art/MinimalLineArt.png'
import UrbanMoodPrint from '../assets/images/Wall Art/UrbanMoodPrint.png'
import CircleBlendCanvas from '../assets/images/Wall Art/CircleBlendCanvas.png'

const featuredProductsData = [
  {
    id: 'absWall180',
    type: 'wallart',
    name: 'Abstract Wall Art',
    description: 'Bold strokes with a modern twist.',
    price: 180.00,
    imageUrl: AbstractWallArt
  },
  {
    id: 'geoGrid140',
    type: 'wallart',
    name: 'Geometric Grid Print',
    description: 'Symmetrical patterns in pastel tones.',
    price: 140.00,
    imageUrl: GeometricGridPrint
  },
  {
    id: 'sunsetCurve165',
    type: 'wallart',
    name: 'Sunset Curve Art',
    description: 'Blended hues of sunset with flowing lines.',
    price: 165.00,
    imageUrl: SunsetCurveArt
  },
  {
    id: 'linenLines150',
    type: 'wallart',
    name: 'Linen Texture Lines',
    description: 'Minimalist lines on linen-textured backdrop.',
    price: 150.00,
    imageUrl: LinenTextureLines
  },
  {
    id: 'retroPulse135',
    type: 'wallart',
    name: 'Retro Pulse Poster',
    description: 'Vintage waves and muted retro colors.',
    price: 135.00,
    imageUrl: RetroPulsePoster
  },
  {
    id: 'natureFrame175',
    type: 'wallart',
    name: 'Framed Nature Sketch',
    description: 'Hand-sketched botanical with oak frame.',
    price: 175.00,
    imageUrl: NatureFrameSketch
  },
  {
    id: 'archLayer160',
    type: 'wallart',
    name: 'Layered Arch Panel',
    description: 'Textured arch panels in earth tones.',
    price: 160.00,
    imageUrl: ArchLayerPanel
  },
  {
    id: 'lineArt110',
    type: 'wallart',
    name: 'Minimal Line Art',
    description: 'Simple yet expressive black ink lines.',
    price: 110.00,
    imageUrl: MinimalLineArt
  },
  {
    id: 'urbanMood145',
    type: 'wallart',
    name: 'Urban Mood Print',
    description: 'Dark city tones with abstract buildings.',
    price: 145.00,
    imageUrl: UrbanMoodPrint
  },
  {
    id: 'circleBlend155',
    type: 'wallart',
    name: 'Circle Blend Canvas',
    description: 'Overlapping circles with gradient blends.',
    price: 155.00,
    imageUrl: CircleBlendCanvas
  }
];

const WallArt = () => {
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 p-10'>
      {featuredProductsData.map(product => (
        <div className='bg-gray-100 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'>
          {/* <Link to={`/${product.type}/${product.id}`}>
            <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
          </Link> */}
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

export default WallArt
