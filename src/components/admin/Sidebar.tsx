import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart2,
  Settings,
  Palette,
  Tags
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: ShoppingCart, label: 'Orders', path: '/admin/orders' },
  { icon: Package, label: 'Products', path: '/admin/products' },
  { icon: Users, label: 'Customers', path: '/admin/customers' },
  { icon: Palette, label: 'Templates', path: '/admin/templates' },
  { icon: Tags, label: 'Pricing', path: '/admin/pricing' },
  { icon: BarChart2, label: 'Analytics', path: '/admin/analytics' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 border-r border-green-500/10 backdrop-blur-xl bg-black/30">
      <div className="p-6">
        <Link to="/admin" className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold text-green-500">PrintFlow</span>
        </Link>

        <nav className="space-y-1">
          {menuItems.map((item) => {
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
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}