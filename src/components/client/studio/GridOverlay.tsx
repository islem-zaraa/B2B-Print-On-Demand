import React from 'react';

export default function GridOverlay() {
  return (
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
  );
}