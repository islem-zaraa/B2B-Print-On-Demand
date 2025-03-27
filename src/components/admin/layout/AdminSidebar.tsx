import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Shield, Users, Package, ShoppingCart, 
  BarChart2, HeadphonesIcon, Settings, FileText
} from 'lucide-react';

const menuItems = [
  { icon: Shield, label: 'Admin Panel', path: '/admin', exact: true },
  { icon: Users, label: 'Users', path: '/admin/users' },
  { icon: Package, label: 'Products', path: '/admin/products' },
  { icon: ShoppingCart, label: 'Orders', path: '/admin/orders' },
  { icon: BarChart2, label: 'Analytics', path: '/admin/analytics' },
  { icon: HeadphonesIcon, label: 'Support', path: '/admin/support' },
  { icon: FileText, label: 'Reports', path: '/admin/reports' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' }
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 border-r border-green-500/10 backdrop-blur-xl bg-black/30">
      <div className="p-6">
        <Link to="/admin" className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold text-green-500">PrintFlow</span>
        </Link>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                  ${isActive 
                    ? 'bg-green-500/10 text-green-500' 
                    : 'text-gray-400 hover:text-green-500 hover:bg-green-500/5'}
                `}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}