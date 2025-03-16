import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const designs = [
  {
    id: 1,
    name: 'T-Shirt Design',
    preview: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80',
    updatedAt: '2 hours ago'
  },
  {
    id: 2,
    name: 'Business Card',
    preview: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=300&q=80',
    updatedAt: '5 hours ago'
  }
];

export default function RecentDesigns() {
  return (
    <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Recent Designs</h3>
        <Link
          to="/client/designs"
          className="text-green-500 hover:text-green-400 transition-colors flex items-center gap-1"
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="space-y-4">
        {designs.map((design) => (
          <div
            key={design.id}
            className="flex items-center gap-4 p-4 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <img
              src={design.preview}
              alt={design.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="text-white font-medium">{design.name}</h4>
              <p className="text-gray-400 text-sm flex items-center gap-1">
                <Clock size={14} />
                {design.updatedAt}
              </p>
            </div>
            <button className="text-green-500 hover:text-green-400 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}