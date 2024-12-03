import { useCallback, useRef } from 'react';

interface UseResizableProps {
  ref: React.RefObject<HTMLElement>;
  scale: number;
  onScale: (scale: number) => void;
  minScale?: number;
  maxScale?: number;
  aspectRatio?: boolean;
  bounds?: { width: number; height: number };
}

export function useResizable({
  ref,
  scale,
  onScale,
  minScale = 0.1,
  maxScale = 3,
  aspectRatio = true,
  bounds
}: UseResizableProps) {
  const isResizing = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const startScale = useRef(scale);

  const handleResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    isResizing.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
    startScale.current = scale;

    const handleResize = (moveEvent: MouseEvent) => {
      if (!isResizing.current || !ref.current) return;

      const deltaX = moveEvent.clientX - startPos.current.x;
      const deltaY = moveEvent.clientY - startPos.current.y;
      
      const element = ref.current;
      const originalWidth = element.offsetWidth;
      const originalHeight = element.offsetHeight;

      let newScale = startScale.current;

      if (aspectRatio) {
        const scaleFactor = Math.max(
          (originalWidth + deltaX) / originalWidth,
          (originalHeight + deltaY) / originalHeight
        );
        newScale = startScale.current * scaleFactor;
      }

      // Apply bounds
      if (bounds) {
        const maxScaleX = bounds.width / originalWidth;
        const maxScaleY = bounds.height / originalHeight;
        const maxAllowedScale = Math.min(maxScaleX, maxScaleY);
        newScale = Math.min(newScale, maxAllowedScale);
      }

      // Constrain scale
      newScale = Math.max(minScale, Math.min(maxScale, newScale));
      onScale(newScale);
    };

    const handleResizeEnd = () => {
      isResizing.current = false;
      window.removeEventListener('mousemove', handleResize);
      window.removeEventListener('mouseup', handleResizeEnd);
    };

    window.addEventListener('mousemove', handleResize);
    window.addEventListener('mouseup', handleResizeEnd);
  }, [scale, onScale, minScale, maxScale, aspectRatio, bounds]);

  return { handleResizeStart };
}