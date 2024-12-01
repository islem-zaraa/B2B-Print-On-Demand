import React from 'react';
import { Image, Clock, Download, Star } from 'lucide-react';

const stats = [
  {
    icon: Image,
    label: 'Total Designs',
    value: '24',
    change: '+3 this month'
  },
  {
    icon: Clock,
    label: 'In Progress',
    value: '5',
    change: '2 need review'
  },
  {
    icon: Download,
    label: 'Downloads',
    value: '128',
    change: '+12% this week'
  },
  {
    icon: Star,
    label: 'Saved Templates',
    value: '16',
    change: '3 new available'
  }
];

export default function DesignStats() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6 hover:border-green-500/30 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className="text-green-500 text-sm mt-2">{stat.change}</p>
          </div>
        );
      })}
    </div>
  );
}