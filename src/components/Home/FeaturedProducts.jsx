import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import CeramicWaveVase from '../../assets/images/Hero/CeramicWaveVase.png'
import GeometricalTableLamp from '../../assets/images/Hero/GeometricalTableLamp.png'
import AbstractWallArt from '../../assets/images/Hero/AbstractWallArt.png'
import SculpturalPlantPot from '../../assets/images/Hero/SculpturalPlantPot.png'

const featuredProductsData = [
  { id: 'ceramicWave85', type:'vases', name: 'Ceramic Wave Vase', description: 'Hand-thrown, glazed finish.', price: 85.00, imageUrl: CeramicWaveVase  },
  { id: 'sculptPot65', type: 'lamps', name: 'Geometric Table Lamp', description: 'Modern design, warm glow.', price: 65.00, imageUrl: GeometricalTableLamp },
  { id: 'geoGlow120', type: 'wallart', name: 'Abstract Wall Art', description: 'Textured canvas, unique colors.', price: 120.00, imageUrl: AbstractWallArt   },
  { id: 'absWall180', type: 'vases', name: 'Sculptural Plant Pot', description: 'Indoor/outdoor, drainage.', price: 180.00, imageUrl: SculpturalPlantPot },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest Creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProductsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/vases"
            className="bg-primary-500 hover:bg-primary-600 text-black font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;