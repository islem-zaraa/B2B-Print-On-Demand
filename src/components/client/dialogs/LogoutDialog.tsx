import React from 'react';
import { useAuthStore } from '../../../stores/authStore';

interface LogoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogoutDialog({ isOpen, onClose }: LogoutDialogProps) {
  const { signOut } = useAuthStore();

  if (!isOpen) return null;

  const handleLogout = () => {
    signOut();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-black border border-green-500/10 rounded-2xl p-6 max-w-md w-full mx-4">
        <h2 className="text-xl font-semibold text-white mb-4">Confirm Logout</h2>
        <p className="text-gray-400 mb-6">
          Are you sure you want to log out? Your session will be terminated.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
} 