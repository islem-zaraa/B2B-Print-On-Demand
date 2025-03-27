import React from 'react';
import { Shirt, Scissors, ShoppingBag, Ruler, Backpack, Bookmark, Layers, Briefcase } from 'lucide-react';

const categories = [
  { icon: Shirt, label: 'T-Shirts' },
  { icon: Backpack, label: 'Pants' },
  { icon: Scissors, label: 'Shorts' },
  { icon: Layers, label: 'Hoodies' },
  { icon: Bookmark, label: 'Jackets' },
  { icon: Ruler, label: 'Dresses' },
  { icon: ShoppingBag, label: 'Ensembles' },
  { icon: Briefcase, label: 'Uniforms' }
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