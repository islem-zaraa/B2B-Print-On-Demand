import React, { useState, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomIn, ZoomOut, RotateCw, Grid, Download } from 'lucide-react';
import { useDesignStore } from '../../../stores/designStore';
import DesignOverlay from './DesignOverlay';
import ViewControls from './ViewControls';
import GridOverlay from './GridOverlay';

export default function MockupPreview() {
  const { currentDesign } = useDesignStore();
  const [showGrid, setShowGrid] = useState(false);
  const [currentView, setCurrentView] = useState<'front' | 'back' | 'side'>('front');
  const containerRef = useRef<HTMLDivElement>(null);

  const views = {
    front: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    back: 'https://images.unsplash.com/photo-1562157873-818bc0726f68',
    side: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'
  };

  const printableAreas = {
    front: { x: 150, y: 100, width: 300, height: 400 },
    back: { x: 150, y: 100, width: 300, height: 400 },
    side: { x: 200, y: 150, width: 200, height: 300 }
  };

  return (
    <div className="space-y-4">
      <ViewControls
        currentView={currentView}
        setCurrentView={setCurrentView}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
      />

      <div 
        ref={containerRef}
        className="relative aspect-square bg-black/30 rounded-xl overflow-hidden"
      >
        <TransformWrapper
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
          minScale={0.5}
          maxScale={2}
          limitToBounds={true}
          centerOnInit={true}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="absolute top-4 left-4 z-30 flex gap-2">
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
                <button
                  onClick={() => resetTransform()}
                  className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20"
                >
                  <RotateCw size={20} />
                </button>
              </div>

              <TransformComponent
                wrapperClass="!w-full !h-full"
                contentClass="!w-full !h-full"
              >
                <div className="relative w-full h-full">
                  {/* Base Mockup Image */}
                  <div className="absolute inset-0 z-10">
                    <img
                      src={views[currentView]}
                      alt={`${currentView} view`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Design Overlay */}
                  {currentDesign && (
                    <div className="absolute inset-0 z-20">
                      <DesignOverlay
                        design={currentDesign}
                        printableArea={printableAreas[currentView]}
                        view={currentView}
                      />
                    </div>
                  )}

                  {/* Grid Overlay */}
                  {showGrid && (
                    <div className="absolute inset-0 z-30">
                      <GridOverlay />
                    </div>
                  )}
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>

      <div className="flex justify-center gap-8 text-sm text-gray-400">
        <span>Width: 30cm</span>
        <span>Height: 40cm</span>
        <span>Area: 1200cm²</span>
      </div>
    </div>
  );
}