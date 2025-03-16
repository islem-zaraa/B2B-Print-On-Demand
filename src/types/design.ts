export interface Design {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  status: 'draft' | 'published';
  version: number;
}

export interface DesignVersion {
  id: string;
  design_id: string;
  version: number;
  image_url: string;
  created_at: string;
  metadata: {
    rotation?: number;
    zoom?: number;
    position?: { x: number; y: number };
  };
}