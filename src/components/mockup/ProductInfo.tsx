import React from 'react';
import { useMockupStore } from '../../stores/mockupStore';

export default function ProductInfo() {
  const { selectedProduct, selectedSize, designScale } = useMockupStore();

  if (!selectedProduct) return null;

  const calculatePrice = () => {
    const basePrice = selectedProduct.basePrice;
    const sizeMultiplier = selectedSize === 'xl' || selectedSize === '2xl' ? 1.2 : 1;
    const scaleMultiplier = Math.max(1, designScale);
    return (basePrice * sizeMultiplier * scaleMultiplier).toFixed(2);
  };

  return (
    <div className="space-y-6 p-6 border border-green-500/10 rounded-lg">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">{selectedProduct.name}</h2>
        <p className="text-gray-400">{selectedProduct.description}</p>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-2">Size</h3>
        <div className="flex gap-2">
          {selectedProduct.sizes.map((size) => (
            <button
              key={size}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedSize === size
                  ? 'border-green-500 bg-green-500/10 text-green-500'
                  : 'border-green-500/20 text-gray-400 hover:border-green-500/50'
              }`}
            >
              {size.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-gray-400">Price:</span>
        <span className="text-2xl font-bold text-white">${calculatePrice()}</span>
      </div>

      <button className="w-full bg-green-500 text-black py-3 rounded-lg hover:bg-green-400 transition-colors">
        Proceed to Order
      </button>
    </div>
  );
}