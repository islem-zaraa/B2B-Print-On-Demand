import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Orders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Orders</h2>
        <div className="flex gap-2">
          <button className="border border-green-500/20 text-white px-4 py-2 rounded-lg hover:bg-green-500/10 transition-all">
            Export
          </button>
          <button className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-all">
            New Order
          </button>
        </div>
      </div>
      
      <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
            <ShoppingCart className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Orders Yet</h3>
          <p className="text-gray-400">Orders will appear here once customers start purchasing</p>
        </div>
      </div>
    </div>
  );
}