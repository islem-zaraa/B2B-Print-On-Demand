import React from 'react';
import TemplateGrid from '../widgets/TemplateGrid';
import TemplateCategories from '../widgets/TemplateCategories';

export default function Templates() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Design Templates</h2>
      </div>

      <TemplateCategories />
      <TemplateGrid />
    </div>
  );
}