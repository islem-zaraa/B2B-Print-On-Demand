import { useCallback, useRef } from 'react';

interface UseRotatableProps {
  ref: React.RefObject<HTMLElement>;
  rotation: number;
  onRotate: (rotation: number) => void;
}

export function useRotatable({ ref, rotation, onRotate }: UseRotatableProps) {
  const isRotating = useRef(false);
  const startAngle = useRef(0);

  const handleRotateStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!ref.current) return;
    
    isRotating.current = true;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    startAngle.current = Math.atan2(e.clientY - centerY, e.clientX - centerX);

    const handleRotate = (moveEvent: MouseEvent) => {
      if (!isRotating.current) return;

      const angle = Math.atan2(moveEvent.clientY - centerY, moveEvent.clientX - centerX);
      const newRotation = ((angle - startAngle.current) * 180) / Math.PI + rotation;
      onRotate(newRotation % 360);
    };

    const handleRotateEnd = () => {
      isRotating.current = false;
      window.removeEventListener('mousemove', handleRotate);
      window.removeEventListener('mouseup', handleRotateEnd);
    };

    window.addEventListener('mousemove', handleRotate);
    window.addEventListener('mouseup', handleRotateEnd);
  }, [rotation, onRotate]);

  return { handleRotateStart };
}