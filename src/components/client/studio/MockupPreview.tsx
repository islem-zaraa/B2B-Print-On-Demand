import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomIn, ZoomOut, RotateCw, Grid, Download } from 'lucide-react';
import { useDesignStore } from '../../../stores/designStore';

export default function MockupPreview() {
  const { currentDesign, designPosition, designScale, updateDesignPosition } = useDesignStore();
  const [showGrid, setShowGrid] = useState(false);
  const [currentView, setCurrentView] = useState<'front' | 'back' | 'side'>('front');

  const views = {
    front: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    back: 'https://images.unsplash.com/photo-1562157873-818bc0726f68',
    side: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <TransformWrapper>
            {({ zoomIn, zoomOut }) => (
              <>
                <button
                  onClick={() => zoomIn()}
                  className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20"
                >
                  <ZoomIn size={20} />
                </button>
                <button
                  onClick={() => zoomOut()}
                  className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20"
                >
                  <ZoomOut size={20} />
                </button>
              </>
            )}
          </TransformWrapper>
          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`p-2 rounded-lg transition-colors ${
              showGrid 
                ? 'bg-green-500 text-black' 
                : 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
            }`}
          >
            <Grid size={20} />
          </button>
        </div>

        <div className="flex gap-2">
          {Object.keys(views).map((view) => (
            <button
              key={view}
              onClick={() => setCurrentView(view as keyof typeof views)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentView === view
                  ? 'bg-green-500 text-black'
                  : 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
              }`}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>

        <button
          className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20"
        >
          <Download size={20} />
        </button>
      </div>

      {/* Preview Area */}
      <div className="relative aspect-square bg-black/30 rounded-xl overflow-hidden">
        <TransformComponent>
          <img
            src={views[currentView]}
            alt={`${currentView} view`}
            className="w-full h-full object-contain"
          />
          
          {currentDesign && (
            <div 
              className="absolute inset-0"
              style={{
                transform: `translate(${designPosition.x}px, ${designPosition.y}px) scale(${designScale})`
              }}
            >
              <img
                src={currentDesign.image_url}
                alt="Design overlay"
                className="max-w-full h-auto"
                draggable={false}
              />
            </div>
          )}

          {showGrid && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full grid grid-cols-12 grid-rows-12">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-green-500/10"
                  />
                ))}
              </div>
            </div>
          )}
        </TransformComponent>
      </div>

      {/* Measurements */}
      <div className="flex justify-center gap-8 text-sm text-gray-400">
        <span>Width: 30cm</span>
        <span>Height: 40cm</span>
        <span>Area: 1200cm²</span>
      </div>
    </div>
  );
}