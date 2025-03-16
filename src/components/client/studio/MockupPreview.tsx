import React, { useState } from 'react';
import { useDesignStore } from '../../../stores/designStore';
import ViewControls from './ViewControls';
import DesignManipulator from './DesignManipulator';

export default function MockupPreview() {
  const { currentDesign } = useDesignStore();
  const [currentView, setCurrentView] = useState<'front' | 'back' | 'side'>('front');
  const [showGrid, setShowGrid] = useState(false);

  // Mockup images for different views
  const mockupImages = {
    front: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    back: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80',
    side: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <div className="space-y-4">
      <ViewControls
        currentView={currentView}
        setCurrentView={setCurrentView}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
      />

      <div className="relative aspect-square bg-white rounded-xl overflow-hidden">
        {/* Base Mockup Image */}
        <img
          src={mockupImages[currentView]}
          alt={`${currentView} view`}
          className="w-full h-full object-cover"
        />

        {/* Design Overlay */}
        {currentDesign && (
          <div className="absolute inset-0">
            <DesignManipulator imageUrl={currentDesign.image_url} />
          </div>
        )}

        {/* Grid Overlay */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full grid grid-cols-8 grid-rows-8">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-green-500/10" />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Help Text */}
      <div className="text-center text-sm text-gray-400">
        <p>Drag to move • Corners to resize • Top handle to rotate</p>
        <p>Hold Shift while resizing to maintain aspect ratio</p>
      </div>
    </div>
  );
}