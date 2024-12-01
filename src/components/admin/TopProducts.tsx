import React from 'react';
import { TrendingUp } from 'lucide-react';

const products = [
  {
    name: 'Custom T-Shirt',
    sales: 1234,
    revenue: 24680,
    growth: '+12.5%'
  },
  {
    name: 'Business Cards',
    sales: 856,
    revenue: 8560,
    growth: '+8.3%'
  },
  {
    name: 'Posters',
    sales: 654,
    revenue: 13080,
    growth: '+5.7%'
  }
];

export default function TopProducts() {
  return (
    <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Top Products</h3>
        <button className="text-green-500 hover:text-green-400 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <div>
              <p className="text-white font-medium">{product.name}</p>
              <p className="text-gray-400 text-sm">{product.sales.toLocaleString()} sales</p>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">
                ${product.revenue.toLocaleString()}
              </p>
              <p className="text-green-500 text-sm flex items-center gap-1">
                <TrendingUp size={14} />
                {product.growth}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}