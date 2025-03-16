import React from 'react';
import { Bell, Package, Users, AlertCircle } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'order',
    message: 'New order #1234 received from Acme Corp',
    time: '5 minutes ago',
    icon: Package,
    color: 'text-blue-500'
  },
  {
    id: 2,
    type: 'customer',
    message: 'TechStart Inc upgraded to Enterprise plan',
    time: '1 hour ago',
    icon: Users,
    color: 'text-green-500'
  },
  {
    id: 3,
    type: 'alert',
    message: 'Low inventory alert for Custom T-Shirts',
    time: '2 hours ago',
    icon: AlertCircle,
    color: 'text-yellow-500'
  }
];

export default function Notifications() {
  return (
    <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Bell className="text-green-500" size={20} />
          <h3 className="text-xl font-semibold text-white">Recent Notifications</h3>
        </div>
        <button className="text-green-500 hover:text-green-400 transition-colors">
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start gap-4 p-4 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <div className={`p-2 rounded-full bg-black/30 ${notification.color}`}>
              <notification.icon size={20} />
            </div>
            <div className="flex-1">
              <p className="text-white">{notification.message}</p>
              <p className="text-gray-400 text-sm">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}