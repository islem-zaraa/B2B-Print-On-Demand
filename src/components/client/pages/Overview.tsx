import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import RecentDesigns from '../widgets/RecentDesigns';
import DesignStats from '../widgets/DesignStats';
import PopularTemplates from '../widgets/PopularTemplates';

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
        <button className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2">
          New Design
          <ArrowUpRight size={20} />
        </button>
      </div>

      <DesignStats />
      
      <div className="grid lg:grid-cols-2 gap-6">
        <RecentDesigns />
        <PopularTemplates />
      </div>
    </div>
  );
}