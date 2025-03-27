import React from 'react';
import { useNotificationStore } from '../../stores/notificationStore';
import { NotificationType } from './Notification';

export default function NotificationDemo() {
  const { addNotification } = useNotificationStore();
  
  const createNotification = (type: NotificationType) => {
    let title = '';
    let message = '';
    
    switch (type) {
      case 'success':
        title = 'Order Completed';
        message = 'Your order has been successfully processed and shipped.';
        break;
      case 'error':
        title = 'Payment Failed';
        message = 'There was an error processing your payment. Please try again.';
        break;
      case 'warning':
        title = 'Low Stock Alert';
        message = 'Product "Custom T-Shirt" is running low on inventory.';
        break;
      case 'info':
      default:
        title = 'System Update';
        message = 'The system will undergo maintenance in 2 hours.';
        break;
    }
    
    addNotification(title, message, type);
  };

  return (
    <div className="flex flex-col p-6 bg-black/20 rounded-xl border border-green-500/20 max-w-md">
      <h2 className="text-xl font-semibold text-white mb-4">Notification Demo</h2>
      <p className="text-gray-400 text-sm mb-4">
        Click the buttons below to test different types of notifications.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => createNotification('success')}
          className="py-2 px-4 bg-green-500/20 hover:bg-green-500/30 text-green-500 rounded-lg transition-colors"
        >
          Success Notification
        </button>
        <button
          onClick={() => createNotification('error')}
          className="py-2 px-4 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded-lg transition-colors"
        >
          Error Notification
        </button>
        <button
          onClick={() => createNotification('warning')}
          className="py-2 px-4 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-500 rounded-lg transition-colors"
        >
          Warning Notification
        </button>
        <button
          onClick={() => createNotification('info')}
          className="py-2 px-4 bg-blue-500/20 hover:bg-blue-500/30 text-blue-500 rounded-lg transition-colors"
        >
          Info Notification
        </button>
      </div>
    </div>
  );
} 