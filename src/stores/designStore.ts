import { create } from 'zustand';
import type { Design } from '../types/design';

interface DesignState {
  currentDesign: Design | null;
  designPosition: { x: number; y: number };
  designScale: number;
  designRotation: number;
  history: Array<{
    position: { x: number; y: number };
    scale: number;
    rotation: number;
  }>;
  historyIndex: number;
  loading: boolean;
  error: string | null;
  uploadDesign: (file: File) => Promise<void>;
  updateDesignPosition: (x: number, y: number) => void;
  updateDesignScale: (scale: number) => void;
  updateDesignRotation: (rotation: number) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const useDesignStore = create<DesignState>((set, get) => ({
  currentDesign: null,
  designPosition: { x: 0, y: 0 },
  designScale: 1,
  designRotation: 0,
  history: [],
  historyIndex: -1,
  loading: false,
  error: null,
  canUndo: false,
  canRedo: false,

  uploadDesign: async (file: File) => {
    set({ loading: true, error: null });
    try {
      // Simulate API upload
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const design: Design = {
        id: Math.random().toString(),
        user_id: '1',
        name: file.name,
        image_url: URL.createObjectURL(file),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        status: 'draft',
        version: 1
      };
      
      set({ currentDesign: design });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  updateDesignPosition: (x: number, y: number) => {
    const { designPosition, designScale, designRotation, history, historyIndex } = get();
    const newState = { position: { x, y }, scale: designScale, rotation: designRotation };
    
    set({
      designPosition: { x, y },
      history: [...history.slice(0, historyIndex + 1), newState],
      historyIndex: historyIndex + 1,
      canUndo: true,
      canRedo: false
    });
  },

  updateDesignScale: (scale: number) => {
    const { designPosition, designRotation, history, historyIndex } = get();
    const newState = { position: designPosition, scale, rotation: designRotation };
    
    set({
      designScale: scale,
      history: [...history.slice(0, historyIndex + 1), newState],
      historyIndex: historyIndex + 1,
      canUndo: true,
      canRedo: false
    });
  },

  updateDesignRotation: (rotation: number) => {
    const { designPosition, designScale, history, historyIndex } = get();
    const newState = { position: designPosition, scale: designScale, rotation };
    
    set({
      designRotation: rotation,
      history: [...history.slice(0, historyIndex + 1), newState],
      historyIndex: historyIndex + 1,
      canUndo: true,
      canRedo: false
    });
  },

  undo: () => {
    const { history, historyIndex } = get();
    if (historyIndex > 0) {
      const previousState = history[historyIndex - 1];
      set({
        designPosition: previousState.position,
        designScale: previousState.scale,
        designRotation: previousState.rotation,
        historyIndex: historyIndex - 1,
        canUndo: historyIndex - 1 > 0,
        canRedo: true
      });
    }
  },

  redo: () => {
    const { history, historyIndex } = get();
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      set({
        designPosition: nextState.position,
        designScale: nextState.scale,
        designRotation: nextState.rotation,
        historyIndex: historyIndex + 1,
        canUndo: true,
        canRedo: historyIndex + 1 < history.length - 1
      });
    }
  }
}));