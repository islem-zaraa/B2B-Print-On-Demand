import React, { useEffect, useRef } from 'react';
import { useDesignStore } from '../../../stores/designStore';
import type { Design } from '../../../types/design';
import { useResizable } from '../../../hooks/useResizable';
import { useDraggable } from '../../../hooks/useDraggable';
import { useRotatable } from '../../../hooks/useRotatable';

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
  const imageRef = useRef<HTMLImageElement>(null);

  // Initialize design position and scale
  useEffect(() => {
    if (imageRef.current) {
      const img = imageRef.current;
      const initialScale = Math.min(
        (printableArea.width * 0.3) / img.naturalWidth,
        (printableArea.height * 0.3) / img.naturalHeight
      );
      
      updateDesignScale(initialScale);
      updateDesignPosition(
        printableArea.x + (printableArea.width - img.naturalWidth * initialScale) / 2,
        printableArea.y + (printableArea.height - img.naturalHeight * initialScale) / 2
      );
    }
  }, [design, view]);

  const { handleResizeStart } = useResizable({
    ref: designRef,
    scale: designScale,
    onScale: updateDesignScale,
    minScale: 0.1,
    maxScale: 3,
    aspectRatio: true,
    bounds: printableArea
  });

  const { handleDragStart } = useDraggable({
    ref: designRef,
    position: designPosition,
    onMove: updateDesignPosition,
    bounds: printableArea,
    scale: designScale
  });

  const { handleRotateStart } = useRotatable({
    ref: designRef,
    rotation: designRotation,
    onRotate: updateDesignRotation
  });

  return (
    <div
      ref={designRef}
      className="absolute"
      style={{
        transform: `translate(${designPosition.x}px, ${designPosition.y}px) scale(${designScale}) rotate(${designRotation}deg)`,
        transformOrigin: 'top left',
        cursor: 'move',
        zIndex: 20
      }}
      onMouseDown={handleDragStart}
    >
      <img
        ref={imageRef}
        src={design.image_url}
        alt="Design overlay"
        className="max-w-full h-auto select-none"
        draggable={false}
      />
      
      {/* Resize handles */}
      <div className="absolute -right-3 -bottom-3 w-6 h-6 bg-green-500 rounded-full cursor-se-resize z-30"
           onMouseDown={handleResizeStart} />
      <div className="absolute -left-3 -bottom-3 w-6 h-6 bg-green-500 rounded-full cursor-sw-resize z-30"
           onMouseDown={handleResizeStart} />
      <div className="absolute -right-3 -top-3 w-6 h-6 bg-green-500 rounded-full cursor-ne-resize z-30"
           onMouseDown={handleResizeStart} />
      <div className="absolute -left-3 -top-3 w-6 h-6 bg-green-500 rounded-full cursor-nw-resize z-30"
           onMouseDown={handleResizeStart} />
      
      {/* Rotation handle */}
      <div className="absolute top-1/2 -right-8 w-6 h-6 bg-green-500 rounded-full cursor-e-resize z-30"
           onMouseDown={handleRotateStart} />
    </div>
  );
}