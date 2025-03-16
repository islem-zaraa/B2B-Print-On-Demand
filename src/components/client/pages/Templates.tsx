import React from 'react';
import { Plus } from 'lucide-react';
import TemplateGrid from '../widgets/TemplateGrid';
import TemplateCategories from '../widgets/TemplateCategories';

export default function Templates() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Design Templates</h2>
        <button className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2">
          <Plus size={20} />
          Create Template
        </button>
      </div>

      <TemplateCategories />
      <TemplateGrid />
    </div>
  );
}