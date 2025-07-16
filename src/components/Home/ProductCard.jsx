import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
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
  );
};

export default ProductCard;