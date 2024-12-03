import React from 'react';
import { useDesignStore } from '../../../stores/designStore';

const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
const colors = [
  { name: 'White', value: '#ffffff' },
  { name: 'Black', value: '#000000' },
  { name: 'Navy', value: '#1e3a8a' },
  { name: 'Gray', value: '#6b7280' },
];

export default function ProductOptions() {
  const [selectedSize, setSelectedSize] = React.useState('M');
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);

  return (
    <div className="space-y-6">
      {/* Size Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Size
        </label>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedSize === size
                  ? 'border-green-500 bg-green-500/10 text-green-500'
                  : 'border-green-500/20 text-gray-400 hover:border-green-500/50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Color
        </label>
        <div className="grid grid-cols-4 gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`group relative aspect-square rounded-lg border-2 transition-colors ${
                selectedColor.name === color.name
                  ? 'border-green-500'
                  : 'border-transparent hover:border-green-500/50'
              }`}
              style={{ backgroundColor: color.value }}
            >
              <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Quantity
        </label>
        <input
          type="number"
          min="1"
          defaultValue="1"
          className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
        />
      </div>

      {/* Price Calculation */}
      <div className="border-t border-green-500/10 pt-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Base Price</span>
          <span className="text-white">$24.99</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Print Area</span>
          <span className="text-white">$5.00</span>
        </div>
        <div className="flex justify-between font-medium mt-4">
          <span className="text-white">Total</span>
          <span className="text-green-500">$29.99</span>
        </div>
      </div>
    </div>
  );
}