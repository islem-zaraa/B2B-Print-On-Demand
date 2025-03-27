import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../../../stores/authStore';
import Notification from '../../shared/Notification';
import { useNotificationStore } from '../../../stores/notificationStore';

export default function ClientHeader() {
  const { user, signOut } = useAuthStore();
  const { notifications, showNotificationPanel, toggleNotificationPanel, markAsRead, markAllAsRead, clearAll, closeNotificationPanel } = useNotificationStore();

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="bg-black border-b border-green-500/10 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white">Welcome, {user?.full_name}</h1>
        <div className="flex items-center gap-4">
          <button 
            className="relative p-2 text-gray-400 hover:text-green-500 transition-colors"
            onClick={toggleNotificationPanel}
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
            )}
          </button>
          <Link to="/client/settings" className="p-2 text-gray-400 hover:text-green-500 transition-colors">
            <Settings size={20} />
          </Link>
          <button 
            onClick={() => signOut()}
            className="p-2 text-gray-400 hover:text-green-500 transition-colors"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
      
      {showNotificationPanel && (
        <Notification 
          notifications={notifications}
          onClose={closeNotificationPanel}
          onMarkAsRead={markAsRead}
          onMarkAllAsRead={markAllAsRead}
          onClearAll={clearAll}
        />
      )}
    </header>
  );
}