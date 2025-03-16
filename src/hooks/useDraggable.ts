import { useCallback, useRef } from 'react';

interface UseDraggableProps {
  ref: React.RefObject<HTMLElement>;
  position: { x: number; y: number };
  onMove: (x: number, y: number) => void;
  bounds?: { x: number; y: number; width: number; height: number };
  scale: number;
}

export function useDraggable({ ref, position, onMove, bounds, scale }: UseDraggableProps) {
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    startPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };

    const handleDrag = (moveEvent: MouseEvent) => {
      if (!isDragging.current || !ref.current) return;

      let newX = moveEvent.clientX - startPos.current.x;
      let newY = moveEvent.clientY - startPos.current.y;

      if (bounds) {
        const width = ref.current.offsetWidth * scale;
        const height = ref.current.offsetHeight * scale;

        newX = Math.max(bounds.x, Math.min(newX, bounds.x + bounds.width - width));
        newY = Math.max(bounds.y, Math.min(newY, bounds.y + bounds.height - height));
      }

      onMove(newX, newY);
    };

    const handleDragEnd = () => {
      isDragging.current = false;
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
    };

    window.addEventListener('mousemove', handleDrag);
    window.addEventListener('mouseup', handleDragEnd);
  }, [position, onMove, bounds, scale]);

  return { handleDragStart };
}