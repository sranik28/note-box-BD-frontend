import React, { useState } from 'react';
import note from '../assets/new arrival/f9fc7155-1bed-4e40-b988-6d24407ca0e9.jpg';
import book from '../assets/new arrival/0187201a-6bb4-4a47-8069-a9d1f97dc615.jpg';
import colorPen from '../assets/new arrival/41915.jpg';
import colorPaper from '../assets/new arrival/overhead-view-colorful-craftpapers.jpg';
import colorPencils from '../assets/new arrival/group-colored-pencils-with-heart-shaped.jpg';

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// }

const products = [
  {
    id: "1",
    image: note,
    title: "Note book",
    price: 10,
    discount: "5%",
  },
  {
    id: "2",
    image: book,
    title: "pen",
    price: 10,
    discount: "5%",
    description: "This is a description "
  },
  {
    id: "3",
    image: colorPen,
    title: "Note book",
    price: 10,
    discount: "5%",
    description: "This is a description "
  },
  {
    id: "4",
    image: colorPen,
    title: "Note book",
    price: 10,
    discount: "5%",
    description: "This is a description "
  },
  {
    id: "5",
    image: colorPaper,
    title: "Color paper",
    price: 5,
    discount: "5%",
    description: "This is a description "
  },
  {
    id: "6",
    image: colorPencils,
    title: "Color pencils",
    price: 60,
    discount: "5%",
    description: "This is a description "
  },
]
const ProductPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<string>('all');

  // Filter products based on search query and price filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'under50' && product.price < 50) ||
      (priceFilter === '50to100' && product.price >= 50 && product.price <= 100) ||
      (priceFilter === 'over100' && product.price > 100);
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      {/* Search Field */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Price Filter Dropdown */}
      <div className="mb-6">
        <label htmlFor="priceFilter" className="block text-sm font-medium text-gray-700">
          Filter by Price
        </label>
        <select
          id="priceFilter"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All</option>
          <option value="under50">Under $50</option>
          <option value="50to100">$50 - $100</option>
          <option value="over100">Over $100</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center mx-auto lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg relative">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <div  className="absolute top-4 left-4  bg-red-500 text-white px-3 py-1 rounded-full text-sm z-10">
              <p>{product.discount}</p>
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* No Products Found Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 mt-6">No products found.</div>
      )}
    </div>
  );
};

export default ProductPage;