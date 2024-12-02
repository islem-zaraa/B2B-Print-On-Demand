import React, { useEffect, useRef } from 'react';
import { useDesignStore } from '../../../stores/designStore';
import type { Design } from '../../../types/design';

interface DesignOverlayProps {
  design: Design;
  printableArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  view: 'front' | 'back' | 'side';
}

export default function DesignOverlay({ design, printableArea, view }: DesignOverlayProps) {
  const {
    designPosition,
    designScale,
    designRotation,
    updateDesignPosition,
    updateDesignScale,
    updateDesignRotation
  } = useDesignStore();
  
  const designRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial position to 30% of printable area
    if (designRef.current) {
      const initialScale = Math.min(
        (printableArea.width * 0.3) / designRef.current.offsetWidth,
        (printableArea.height * 0.3) / designRef.current.offsetHeight
      );
      
      updateDesignScale(initialScale);
      updateDesignPosition(
        printableArea.x + (printableArea.width - designRef.current.offsetWidth * initialScale) / 2,
        printableArea.y + (printableArea.height - designRef.current.offsetHeight * initialScale) / 2
      );
    }
  }, [design, view]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startPos.current = {
      x: e.clientX - designPosition.x,
      y: e.clientY - designPosition.y
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;

    let newX = e.clientX - startPos.current.x;
    let newY = e.clientY - startPos.current.y;

    // Constrain to printable area
    newX = Math.max(printableArea.x, Math.min(newX, printableArea.x + printableArea.width - (designRef.current?.offsetWidth || 0) * designScale));
    newY = Math.max(printableArea.y, Math.min(newY, printableArea.y + printableArea.height - (designRef.current?.offsetHeight || 0) * designScale));

    updateDesignPosition(newX, newY);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={designRef}
      className="absolute cursor-move"
      style={{
        transform: `translate(${designPosition.x}px, ${designPosition.y}px) scale(${designScale}) rotate(${designRotation}deg)`,
        transformOrigin: 'top left',
        mixBlendMode: 'multiply'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img
        src={design.image_url}
        alt="Design overlay"
        className="max-w-full h-auto pointer-events-none"
        draggable={false}
      />
      
      <div className="absolute -right-4 -bottom-4 w-8 h-8 bg-green-500 rounded-full cursor-se-resize"
           onMouseDown={(e) => {
             e.stopPropagation();
             // Handle resize logic
           }} 
      />
      
      <div className="absolute top-1/2 -right-4 w-8 h-8 bg-green-500 rounded-full cursor-e-resize transform -translate-y-1/2"
           onMouseDown={(e) => {
             e.stopPropagation();
             // Handle rotation logic
           }}
      />
    </div>
  );
}