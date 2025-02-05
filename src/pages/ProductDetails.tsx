import React, { useState } from 'react';
import colorPencils from '../assets/new arrival/group-colored-pencils-with-heart-shaped.jpg';

interface ProductDetailsProps {
  product: {
    name: string;
    brand: string;
    category: string;
    inStock: number;
    discount: string;
    description: string;
    price: number;
    image: string;
  };
}

const product = {
  name: 'Green Handled Scissors',
  brand: 'Various (Common Stationery or Craft Brands)',
  category: 'Stationery',
  inStock: 96,
  discount: 5,
  description:
    'This pair of scissors with a green plastic handle and stainless steel blades is ideal for cutting paper, fabric, ribbons, and other crafting materials. The ergonomic handle ensures a comfortable grip, making it suitable for school, office, and home use.',
  price: 5,
  image: colorPencils,
};

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < product.inStock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-[450px] h-[450px] mx-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">Brand: {product.brand}</p>
          <p className="text-gray-600 mb-4">Category: {product.category}</p>
          <p className="text-gray-600 mb-4">In Stock: {product.inStock}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-sm font-semibold mb-3 text-gray-400">
              <span className="text-3xl text-black  ">${product.price}</span>{' '}
              <span className="text-primary"> ({product.discount}% off)</span>
            </p>
          
          <div className="flex items-center mb-6">
            <button
              className="bg-gray-300 px-3 py-1 rounded-l-lg hover:bg-gray-400"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="px-4 py-1 border-t border-b border-gray-300">{quantity}</span>
            <button
              className="bg-gray-300 px-3 py-1 rounded-r-lg hover:bg-gray-400"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition mr-3 duration-300">
            Add to Cart
          </button>
          <button className=" text-black border border-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-500 hover:duration-500 ease-in hover:scale-105 ">
          By Now
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Order within 4 hours and get it delivered by today
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
