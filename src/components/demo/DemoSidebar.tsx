import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Image, 
  History, 
  Download,
  Settings,
  HelpCircle
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/demo' },
  { icon: Image, label: 'Mockups', path: '/demo/mockups' },
  { icon: History, label: 'History', path: '/demo/history' },
  { icon: Download, label: 'Downloads', path: '/demo/downloads' },
  { icon: Settings, label: 'Settings', path: '/demo/settings' },
  { icon: HelpCircle, label: 'Help', path: '/demo/help' }
];

export default function DemoSidebar() {
  return (
    <aside className="w-64 border-r border-green-500/10 backdrop-blur-xl bg-black/30">
      <div className="p-6">
        <Link to="/demo" className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold text-green-500">PrintFlow Demo</span>
        </Link>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-green-500 hover:bg-green-500/5 transition-all"
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