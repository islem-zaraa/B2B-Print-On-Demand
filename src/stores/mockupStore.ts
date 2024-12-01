import { create } from 'zustand';
import type { ProductTemplate, ProductType, ProductSize } from '../types/product';

interface MockupState {
  selectedProduct: ProductTemplate | null;
  selectedSize: ProductSize | null;
  designFile: File | null;
  designPosition: { x: number; y: number };
  designScale: number;
  currentView: 'front' | 'back' | 'side';
  loading: boolean;
  error: string | null;
  setProduct: (product: ProductTemplate) => void;
  setSize: (size: ProductSize) => void;
  setDesignFile: (file: File) => void;
  updateDesignPosition: (x: number, y: number) => void;
  updateDesignScale: (scale: number) => void;
  setView: (view: 'front' | 'back' | 'side') => void;
}

export const useMockupStore = create<MockupState>((set) => ({
  selectedProduct: null,
  selectedSize: null,
  designFile: null,
  designPosition: { x: 0, y: 0 },
  designScale: 1,
  currentView: 'front',
  loading: false,
  error: null,

  setProduct: (product) => set({ selectedProduct: product }),
  setSize: (size) => set({ selectedSize: size }),
  setDesignFile: (file) => set({ designFile: file }),
  updateDesignPosition: (x, y) => set({ designPosition: { x, y } }),
  updateDesignScale: (scale) => set({ designScale: scale }),
  setView: (view) => set({ currentView: view }),
}));