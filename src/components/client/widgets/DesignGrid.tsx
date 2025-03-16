import React from 'react';
import { Edit2, Trash2, Download } from 'lucide-react';

const designs = [
  {
    id: 1,
    name: 'T-Shirt Design',
    preview: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80',
    updatedAt: '2024-03-15'
  },
  {
    id: 2,
    name: 'Business Card',
    preview: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=300&q=80',
    updatedAt: '2024-03-14'
  }
];

export default function DesignGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {designs.map((design) => (
        <div
          key={design.id}
          className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all group"
        >
          <div className="aspect-square relative">
            <img
              src={design.preview}
              alt={design.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <button className="p-2 bg-green-500/10 rounded-lg text-green-500 hover:bg-green-500/20 transition-all">
                <Edit2 size={20} />
              </button>
              <button className="p-2 bg-green-500/10 rounded-lg text-green-500 hover:bg-green-500/20 transition-all">
                <Download size={20} />
              </button>
              <button className="p-2 bg-red-500/10 rounded-lg text-red-500 hover:bg-red-500/20 transition-all">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-1">{design.name}</h3>
            <p className="text-sm text-gray-400">Updated {design.updatedAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}