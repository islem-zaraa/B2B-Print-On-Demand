import React, { useRef, useEffect, useState } from 'react';
import { RotateCw } from 'lucide-react';
import { useDesignStore } from '../../../stores/designStore';

interface DesignManipulatorProps {
  imageUrl: string;
  onUpdate?: (transform: TransformState) => void;
}

interface TransformState {
  scale: number;
  rotation: number;
  position: { x: number; y: number };
}

export default function DesignManipulator({ imageUrl, onUpdate }: DesignManipulatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [transform, setTransform] = useState<TransformState>({
    scale: 1,
    rotation: 0,
    position: { x: 0, y: 0 }
  });

  // Track mouse position for calculations
  const mouseRef = useRef({ x: 0, y: 0 });
  const startTransformRef = useRef<TransformState>(transform);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging && !isResizing && !isRotating) return;
      if (!containerRef.current) return;

      const dx = e.clientX - mouseRef.current.x;
      const dy = e.clientY - mouseRef.current.y;
      const container = containerRef.current.getBoundingClientRect();
      const centerX = container.left + container.width / 2;
      const centerY = container.top + container.height / 2;

      if (isDragging) {
        setTransform(prev => ({
          ...prev,
          position: {
            x: startTransformRef.current.position.x + dx,
            y: startTransformRef.current.position.y + dy
          }
        }));
      }

      if (isResizing) {
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        const startDistance = Math.sqrt(
          Math.pow(mouseRef.current.x - centerX, 2) + 
          Math.pow(mouseRef.current.y - centerY, 2)
        );
        const scale = (distance / startDistance) * startTransformRef.current.scale;
        
        setTransform(prev => ({
          ...prev,
          scale: Math.max(0.1, Math.min(3, scale))
        }));
      }

      if (isRotating) {
        const startAngle = Math.atan2(
          mouseRef.current.y - centerY,
          mouseRef.current.x - centerX
        );
        const currentAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const rotation = startTransformRef.current.rotation + 
          ((currentAngle - startAngle) * 180) / Math.PI;

        setTransform(prev => ({
          ...prev,
          rotation: rotation % 360
        }));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
      setIsRotating(false);
      onUpdate?.(transform);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, isRotating, transform, onUpdate]);

  const startTransform = (
    e: React.MouseEvent,
    type: 'drag' | 'resize' | 'rotate'
  ) => {
    e.preventDefault();
    mouseRef.current = { x: e.clientX, y: e.clientY };
    startTransformRef.current = transform;

    switch (type) {
      case 'drag':
        setIsDragging(true);
        break;
      case 'resize':
        setIsResizing(true);
        break;
      case 'rotate':
        setIsRotating(true);
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
    >
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          transform: `translate(-50%, -50%) translate(${transform.position.x}px, ${transform.position.y}px) scale(${transform.scale}) rotate(${transform.rotation}deg)`,
          transformOrigin: 'center'
        }}
      >
        {/* Main Image */}
        <img
          ref={imageRef}
          src={imageUrl}
          alt="Design"
          className="max-w-[600px] max-h-[600px] select-none"
          onMouseDown={(e) => startTransform(e, 'drag')}
          draggable={false}
        />

        {/* Resize Handles */}
        <div className="absolute -right-3 -bottom-3 w-6 h-6 bg-green-500 rounded-full cursor-se-resize"
             onMouseDown={(e) => startTransform(e, 'resize')} />
        <div className="absolute -left-3 -bottom-3 w-6 h-6 bg-green-500 rounded-full cursor-sw-resize"
             onMouseDown={(e) => startTransform(e, 'resize')} />
        <div className="absolute -right-3 -top-3 w-6 h-6 bg-green-500 rounded-full cursor-ne-resize"
             onMouseDown={(e) => startTransform(e, 'resize')} />
        <div className="absolute -left-3 -top-3 w-6 h-6 bg-green-500 rounded-full cursor-nw-resize"
             onMouseDown={(e) => startTransform(e, 'resize')} />

        {/* Rotation Handle */}
        <div 
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full cursor-pointer flex items-center justify-center"
          onMouseDown={(e) => startTransform(e, 'rotate')}
        >
          <RotateCw size={16} className="text-black" />
        </div>

        {/* Transform Info */}
        {(isResizing || isRotating) && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded">
            {isResizing && `Scale: ${(transform.scale * 100).toFixed(0)}%`}
            {isRotating && `Rotation: ${Math.round(transform.rotation)}°`}
          </div>
        )}
      </div>
    </div>
  );
}