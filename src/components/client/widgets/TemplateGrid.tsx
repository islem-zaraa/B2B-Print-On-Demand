import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const templates = [
  {
    id: 1,
    name: 'Classic T-Shirt Design',
    category: 'Apparel',
    preview: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80',
    likes: 128
  },
  {
    id: 2,
    name: 'Modern Business Card',
    category: 'Business Cards',
    preview: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=300&q=80',
    likes: 89
  },
  {
    id: 3,
    name: 'Minimalist Logo Sticker',
    category: 'Stickers',
    preview: 'https://images.unsplash.com/photo-1589384267710-7a25bc5b4862?auto=format&fit=crop&w=300&q=80',
    likes: 256
  },
  {
    id: 4,
    name: 'Abstract Wall Art',
    category: 'Wall Art',
    preview: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80',
    likes: 167
  }
];

export default function TemplateGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {templates.map((template) => (
        <div
          key={template.id}
          className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all group"
        >
          <div className="aspect-square relative">
            <img
              src={template.preview}
              alt={template.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <button className="w-full bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center justify-center gap-2">
                  Use Template
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold text-white">{template.name}</h3>
              <button className="flex items-center gap-1 text-gray-400 hover:text-green-500 transition-colors">
                <Heart size={16} />
                <span className="text-sm">{template.likes}</span>
              </button>
            </div>
            <p className="text-sm text-gray-400">{template.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}