import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Image, 
  Grid, 
  Palette
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/client' },
  { icon: Image, label: 'My Designs', path: '/client/designs' },
  { icon: Palette, label: 'Design Studio', path: '/client/design-studio' },
  { icon: Grid, label: 'Templates', path: '/client/templates' }
];

export default function ClientSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 border-r border-green-500/10 backdrop-blur-xl bg-black/30">
      <div className="p-6">
        <Link to="/client" className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold text-green-500">PrintFlow</span>
        </Link>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-green-500/10 text-green-500'
                    : 'text-gray-400 hover:text-green-500 hover:bg-green-500/5'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}