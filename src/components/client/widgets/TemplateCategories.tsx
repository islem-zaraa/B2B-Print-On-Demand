import React from 'react';
import { Shirt, CreditCard, Sticker, Image, Box, Phone, Home, PenTool } from 'lucide-react';

const categories = [
  { icon: Shirt, label: 'Apparel' },
  { icon: CreditCard, label: 'Business Cards' },
  { icon: Sticker, label: 'Stickers' },
  { icon: Image, label: 'Wall Art' },
  { icon: Box, label: 'Packaging' },
  { icon: Phone, label: 'Phone Cases' },
  { icon: Home, label: 'Home & Living' },
  { icon: PenTool, label: 'Custom' }
];

export default function TemplateCategories() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.label}
            className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-xl p-4 hover:border-green-500/30 transition-all flex flex-col items-center gap-2"
          >
            <Icon className="w-6 h-6 text-green-500" />
            <span className="text-sm text-gray-400">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}