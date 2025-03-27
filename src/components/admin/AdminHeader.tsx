import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Notification from '../shared/Notification';
import { useNotificationStore } from '../../stores/notificationStore';

const AdminHeader: React.FC = () => {
  const { logout } = useAuth();
  const { notifications, showNotificationPanel, toggleNotificationPanel, markAsRead, markAllAsRead, removeNotification, clearAll, closeNotificationPanel } = useNotificationStore();
  
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="bg-black text-white py-3 px-6 flex justify-between items-center shadow-md border-b border-gray-800">
      <div className="flex items-center">
        <Link to="/admin/dashboard" className="text-xl font-bold text-green-500">
          PrintFlow Admin
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          className="relative p-2 rounded-full hover:bg-gray-800 transition-all"
          onClick={toggleNotificationPanel}
        >
          <Bell size={20} />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-green-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
        <Link to="/admin/dashboard" className="text-white hover:text-green-500 transition-all">
          Dashboard
        </Link>
        <Link to="/admin/panel" className="text-white hover:text-green-500 transition-all">
          Admin Panel
        </Link>
        <button
          onClick={logout}
          className="text-white bg-red-600 hover:bg-red-700 px-4 py-1 rounded transition-all"
        >
          Logout
        </button>
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
};

export default AdminHeader; 