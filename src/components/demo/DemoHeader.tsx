import React from 'react';
import { Bell, Settings } from 'lucide-react';

export default function DemoHeader() {
  return (
    <header className="bg-black border-b border-green-500/10 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white">Demo Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-400 hover:text-green-500 transition-colors">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
          </button>
          <button className="p-2 text-gray-400 hover:text-green-500 transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}