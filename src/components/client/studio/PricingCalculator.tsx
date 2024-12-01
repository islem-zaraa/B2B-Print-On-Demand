import React from 'react';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useDesignStore } from '../../../stores/designStore';

export default function PricingCalculator() {
  const { designScale } = useDesignStore();
  
  // Calculate price based on design scale and base price
  const basePrice = 29.99;
  const scaleFactor = Math.max(1, designScale);
  const price = basePrice * scaleFactor;

  // Calculate bulk discounts
  const quantities = [1, 5, 10, 25, 50];
  const getDiscountedPrice = (quantity: number) => {
    const discount = quantity >= 50 ? 0.4 : // 40% off for 50+
                    quantity >= 25 ? 0.3 : // 30% off for 25+
                    quantity >= 10 ? 0.2 : // 20% off for 10+
                    quantity >= 5 ? 0.1 :  // 10% off for 5+
                    0;
    return price * (1 - discount);
  };

  return (
    <div className="space-y-6 p-6 border border-green-500/10 rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Pricing</h3>
        <Calculator className="text-green-500" size={20} />
      </div>

      {/* Price Breakdown */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Base Price</span>
          <span className="text-white">${basePrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Size Adjustment</span>
          <span className="text-white">×{scaleFactor.toFixed(2)}</span>
        </div>
        <div className="border-t border-green-500/10 my-2" />
        <div className="flex justify-between font-semibold">
          <span className="text-white">Unit Price</span>
          <span className="text-green-500">${price.toFixed(2)}</span>
        </div>
      </div>

      {/* Quantity Discounts */}
      <div>
        <h4 className="text-sm font-medium text-gray-400 mb-2">Bulk Discounts</h4>
        <div className="grid grid-cols-5 gap-2">
          {quantities.map((qty) => (
            <button
              key={qty}
              className="p-2 text-center rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors"
            >
              <div className="text-white font-medium">{qty}</div>
              <div className="text-sm text-gray-400">
                ${getDiscountedPrice(qty).toFixed(2)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Order Button */}
      <button className="w-full bg-green-500 text-black py-3 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2 font-semibold">
        <ShoppingCart size={20} />
        Add to Cart
      </button>
    </div>
  );
}