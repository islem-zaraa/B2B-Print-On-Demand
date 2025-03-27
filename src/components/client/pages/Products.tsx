import React, { useState } from 'react';
import { Card, Title, Text, Grid, Flex, Badge } from '@tremor/react';
import { Search, Filter, ShoppingCart } from 'lucide-react';

// Sample products data
const products = [
  {
    id: 1,
    name: 'Premium Cotton T-Shirt',
    image: 'https://placehold.co/300x300/111/333?text=T-Shirt',
    category: 'T-Shirts',
    basePrice: 12.99,
    minOrder: 25,
    colors: ['Black', 'White', 'Navy', 'Red', 'Green'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    printAreas: ['Front', 'Back', 'Sleeves'],
    description: 'High-quality 100% combed cotton t-shirt, perfect for custom printing and embroidery.'
  },
  {
    id: 2,
    name: 'Classic Polo Shirt',
    image: 'https://placehold.co/300x300/111/333?text=Polo',
    category: 'Polos',
    basePrice: 18.99,
    minOrder: 20,
    colors: ['Black', 'White', 'Navy', 'Red', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    printAreas: ['Left Chest', 'Right Chest', 'Back'],
    description: 'Business-casual polo shirts ideal for company uniforms and corporate events.'
  },
  {
    id: 3,
    name: 'Pullover Hoodie',
    image: 'https://placehold.co/300x300/111/333?text=Hoodie',
    category: 'Hoodies',
    basePrice: 24.99,
    minOrder: 15,
    colors: ['Black', 'Grey', 'Navy', 'Maroon'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    printAreas: ['Front', 'Back', 'Hood'],
    description: 'Warm and comfortable hoodies with double-lined hood, perfect for cooler weather branding.'
  },
  {
    id: 4,
    name: 'Structured Baseball Cap',
    image: 'https://placehold.co/300x300/111/333?text=Cap',
    category: 'Headwear',
    basePrice: 9.99,
    minOrder: 30,
    colors: ['Black', 'White', 'Navy', 'Red', 'Grey', 'Green'],
    sizes: ['One Size'],
    printAreas: ['Front', 'Side', 'Back'],
    description: 'Structured six-panel baseball caps with adjustable closure, ideal for embroidered logos.'
  },
  {
    id: 5,
    name: 'Corporate Jacket',
    image: 'https://placehold.co/300x300/111/333?text=Jacket',
    category: 'Outerwear',
    basePrice: 39.99,
    minOrder: 10,
    colors: ['Black', 'Navy', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    printAreas: ['Left Chest', 'Back', 'Sleeves'],
    description: 'Lightweight softshell jacket with water-resistant finish, perfect for corporate gifting.'
  },
  {
    id: 6,
    name: 'Quarter-Zip Pullover',
    image: 'https://placehold.co/300x300/111/333?text=Quarter-Zip',
    category: 'Outerwear',
    basePrice: 32.99,
    minOrder: 12,
    colors: ['Black', 'Navy', 'Grey', 'Green'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    printAreas: ['Left Chest', 'Back Upper'],
    description: 'Versatile quarter-zip pullover, great for layering and business casual environments.'
  },
];

// Product categories
const categories = ['All', 'T-Shirts', 'Polos', 'Hoodies', 'Headwear', 'Outerwear'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <Title className="text-white text-2xl">Product Catalog</Title>
        <Text className="text-gray-400">Browse and select products for your next order</Text>
      </div>

      {/* Search and Filter */}
      <Flex justifyContent="between" alignItems="center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-green-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        </div>

        <div className="flex space-x-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-green-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Flex>

      {/* Products Grid */}
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6">
        {filteredProducts.map(product => (
          <Card key={product.id} className="bg-black border border-gray-800 hover:border-green-600 transition-all rounded-xl overflow-hidden">
            <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden mb-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <Badge color="gray" className="mb-2">{product.category}</Badge>
            <Title className="text-white text-xl mb-1">{product.name}</Title>
            <Text className="text-gray-400 text-sm h-12 line-clamp-2 mb-2">{product.description}</Text>
            <div className="flex justify-between items-center mt-4">
              <div>
                <Text className="text-gray-500 text-xs">Starting at</Text>
                <Text className="text-green-500 text-xl font-bold">${product.basePrice}</Text>
                <Text className="text-gray-500 text-xs">Min. order: {product.minOrder}</Text>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-black p-2 rounded-lg transition-all">
                <ShoppingCart size={20} />
              </button>
            </div>
          </Card>
        ))}
      </Grid>
    </div>
  );
} 