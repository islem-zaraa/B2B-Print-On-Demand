import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { NotificationItem, NotificationType } from '../components/shared/Notification';

interface NotificationState {
  notifications: NotificationItem[];
  showNotificationPanel: boolean;
  addNotification: (title: string, message: string, type: NotificationType) => void;
  removeNotification: (id: string) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearAll: () => void;
  toggleNotificationPanel: () => void;
  closeNotificationPanel: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [
    // Sample notifications for demo
    {
      id: '1',
      title: 'Welcome to PrintFlow',
      message: 'Thank you for using our B2B Print-On-Demand platform.',
      type: 'info',
      timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
      read: false,
    },
    {
      id: '2',
      title: 'New Order Received',
      message: 'Order #1234 has been placed successfully.',
      type: 'success',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
      read: true,
    },
    {
      id: '3',
      title: 'Payment Error',
      message: 'There was an issue processing payment for order #5678.',
      type: 'error',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      read: false,
    },
  ],
  showNotificationPanel: false,

  addNotification: (title, message, type) => set((state) => ({
    notifications: [
      {
        id: uuidv4(),
        title,
        message,
        type,
        timestamp: new Date(),
        read: false,
      },
      ...state.notifications,
    ],
  })),

  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter((notification) => notification.id !== id),
  })),

  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    ),
  })),

  markAllAsRead: () => set((state) => ({
    notifications: state.notifications.map((notification) => ({
      ...notification,
      read: true,
    })),
  })),

  clearAll: () => set({ notifications: [] }),

  toggleNotificationPanel: () => set((state) => ({
    showNotificationPanel: !state.showNotificationPanel,
  })),

  closeNotificationPanel: () => set({ showNotificationPanel: false }),
})); 