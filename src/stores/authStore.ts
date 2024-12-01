import { create } from 'zustand';
import type { AuthUser, AuthState } from '../types/auth';

interface AuthStore extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, role: 'client') => Promise<void>;
  signOut: () => void;
  resetPassword: (email: string) => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: false,
  error: null,

  signIn: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const user: AuthUser = {
        id: '1',
        email,
        role: email.includes('admin') ? 'admin' : 'client',
        full_name: 'Demo User',
        created_at: new Date().toISOString()
      };

      set({ user });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  signUp: async (email: string, password: string, fullName: string, role: 'client') => {
    set({ loading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const user: AuthUser = {
        id: '1',
        email,
        role,
        full_name: fullName,
        created_at: new Date().toISOString()
      };

      set({ user });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  signOut: () => {
    set({ user: null });
  },

  resetPassword: async (email: string) => {
    set({ loading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  clearError: () => set({ error: null }),
}));