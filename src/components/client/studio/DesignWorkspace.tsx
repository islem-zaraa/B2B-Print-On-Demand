import React, { useState } from 'react';
import DesignTools from './DesignTools';
import MockupPreview from './MockupPreview';
import ProductOptions from './ProductOptions';
import { useDesignStore } from '../../../stores/designStore';

export default function DesignWorkspace() {
  const { currentDesign } = useDesignStore();
  const [activeTab, setActiveTab] = useState<'design' | 'product'>('design');

  return (
    <div className="flex-1 grid lg:grid-cols-[350px,1fr] gap-6 min-h-0">
      {/* Left Panel */}
      <div className="flex flex-col bg-black/30 border border-green-500/10 rounded-xl overflow-hidden">
        <div className="flex border-b border-green-500/10">
          <button
            onClick={() => setActiveTab('design')}
            className={`flex-1 px-4 py-3 text-sm font-medium ${
              activeTab === 'design'
                ? 'bg-green-500/10 text-green-500'
                : 'text-gray-400 hover:text-green-500'
            }`}
          >
            Design Tools
          </button>
          <button
            onClick={() => setActiveTab('product')}
            className={`flex-1 px-4 py-3 text-sm font-medium ${
              activeTab === 'product'
                ? 'bg-green-500/10 text-green-500'
                : 'text-gray-400 hover:text-green-500'
            }`}
          >
            Product Options
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'design' ? <DesignTools /> : <ProductOptions />}
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-black/30 border border-green-500/10 rounded-xl p-6">
        <MockupPreview />
      </div>
    </div>
  );
}