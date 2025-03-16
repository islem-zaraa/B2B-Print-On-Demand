import React, { useState, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomIn, ZoomOut, RotateCw, Save } from 'lucide-react';
import { useMockupStore } from '../../stores/mockupStore';

export default function MockupEditor() {
  const { selectedProduct, designFile, designScale, updateDesignScale } = useMockupStore();
  const [rotation, setRotation] = useState(0);
  const designRef = useRef<HTMLImageElement>(null);

  if (!selectedProduct || !designFile) return null;

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleScale = (newScale: number) => {
    updateDesignScale(Math.max(0.1, Math.min(3, newScale)));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={handleRotate}
          className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20"
        >
          <RotateCw size={20} />
        </button>
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
      </div>

      <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
        <img
          src={selectedProduct.mockupImages.front}
          alt="Product mockup"
          className="w-full h-full object-contain"
        />
        {designFile && (
          <div className="absolute inset-0">
            <TransformComponent>
              <img
                ref={designRef}
                src={URL.createObjectURL(designFile)}
                alt="Design"
                className="max-w-full h-auto transform transition-transform"
                style={{
                  transform: `rotate(${rotation}deg) scale(${designScale})`,
                }}
              />
            </TransformComponent>
          </div>
        )}
      </div>

      <button className="w-full bg-green-500 text-black py-3 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2">
        <Save size={20} />
        Save Design
      </button>
    </div>
  );
}