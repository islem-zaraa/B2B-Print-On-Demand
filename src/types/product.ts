export type ProductType = 'tshirt' | 'mug' | 'poster';
export type ProductSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

export interface ProductTemplate {
  id: string;
  type: ProductType;
  name: string;
  description: string;
  basePrice: number;
  sizes: ProductSize[];
  mockupImages: {
    front: string;
    back?: string;
    side?: string;
  };
  printAreas: {
    front: PrintArea;
    back?: PrintArea;
  };
}

export interface PrintArea {
  x: number;
  y: number;
  width: number;
  height: number;
  maxWidth: number;
  maxHeight: number;
  minWidth: number;
  minHeight: number;
}