import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const templates = [
  {
    id: 1,
    name: 'Classic T-Shirt Design',
    preview: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80',
    uses: 1234
  },
  {
    id: 2,
    name: 'Modern Business Card',
    preview: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=300&q=80',
    uses: 856
  }
];

export default function PopularTemplates() {
  return (
    <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Popular Templates</h3>
        <Link
          to="/client/templates"
          className="text-green-500 hover:text-green-400 transition-colors flex items-center gap-1"
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="space-y-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className="flex items-center gap-4 p-4 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <img
              src={template.preview}
              alt={template.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="text-white font-medium">{template.name}</h4>
              <p className="text-gray-400 text-sm">{template.uses.toLocaleString()} uses</p>
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