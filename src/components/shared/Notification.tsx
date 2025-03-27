import React, { useState, useEffect } from 'react';
import { X, AlertCircle, CheckCircle, Info, Bell } from 'lucide-react';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  timestamp: Date;
  read: boolean;
}

interface NotificationProps {
  notifications: NotificationItem[];
  onClose: () => void;
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onClearAll: () => void;
}

export default function Notification({ 
  notifications, 
  onClose, 
  onMarkAsRead, 
  onMarkAllAsRead,
  onClearAll
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, [notifications]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for animation to complete
  };

  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={18} />;
      case 'error':
        return <AlertCircle className="text-red-500" size={18} />;
      case 'warning':
        return <AlertCircle className="text-yellow-500" size={18} />;
      case 'info':
      default:
        return <Info className="text-blue-500" size={18} />;
    }
  };

  // Format timestamp to relative time (e.g. "5m ago", "2h ago")
  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - timestamp.getTime()) / 1000);
    
    if (diff < 60) {
      return 'Just now';
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes}m ago`;
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours}h ago`;
    } else {
      const days = Math.floor(diff / 86400);
      return `${days}d ago`;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div 
      className={`fixed top-16 right-4 w-80 backdrop-blur-xl bg-black/80 border border-green-500/20 rounded-xl overflow-hidden shadow-lg transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="flex items-center justify-between bg-black/50 px-4 py-3 border-b border-green-500/10">
        <div className="flex items-center gap-2">
          <Bell size={18} className="text-green-500" />
          <h3 className="text-white font-medium">Notifications</h3>
          {unreadCount > 0 && (
            <span className="bg-green-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        <button 
          onClick={handleClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="py-8 px-4 text-center text-gray-400">
            <Bell size={24} className="mx-auto mb-2 text-gray-500" />
            <p>No notifications</p>
          </div>
        ) : (
          <div>
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`px-4 py-3 border-b border-green-500/10 hover:bg-black/40 transition-colors cursor-pointer ${
                  notification.read ? 'opacity-70' : ''
                }`}
                onClick={() => onMarkAsRead(notification.id)}
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h4 className="text-sm font-medium text-white truncate">
                        {notification.title}
                      </h4>
                      <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                        {formatTimestamp(notification.timestamp)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {notification.message}
                    </p>
                  </div>
                </div>
                {!notification.read && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between px-4 py-2 bg-black/50 border-t border-green-500/10">
        <button 
          onClick={onMarkAllAsRead}
          className="text-xs text-green-500 hover:text-green-400 transition-colors"
        >
          Mark all as read
        </button>
        <button 
          onClick={onClearAll}
          className="text-xs text-gray-400 hover:text-white transition-colors"
        >
          Clear all
        </button>
      </div>
    </div>
  );
} 