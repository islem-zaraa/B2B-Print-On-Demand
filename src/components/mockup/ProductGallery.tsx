import React from 'react';
import { useMockupStore } from '../../stores/mockupStore';
import type { ProductTemplate } from '../../types/product';

const mockProducts: ProductTemplate[] = [
  {
    id: '1',
    type: 'tshirt',
    name: 'Classic T-Shirt',
    description: 'Premium cotton t-shirt',
    basePrice: 19.99,
    sizes: ['s', 'm', 'l', 'xl'],
    mockupImages: {
      front: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      back: 'https://images.unsplash.com/photo-1562157873-818bc0726f68'
    },
    printAreas: {
      front: {
        x: 150,
        y: 100,
        width: 300,
        height: 400,
        maxWidth: 400,
        maxHeight: 500,
        minWidth: 100,
        minHeight: 100
      }
    }
  }
];

export default function ProductGallery() {
  const { setProduct } = useMockupStore();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mockProducts.map((product) => (
        <button
          key={product.id}
          onClick={() => setProduct(product)}
          className="group relative aspect-square overflow-hidden rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all"
        >
          <img
            src={product.mockupImages.front}
            alt={product.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <div>
              <h3 className="text-white font-semibold">{product.name}</h3>
              <p className="text-gray-300 text-sm">From ${product.basePrice}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}