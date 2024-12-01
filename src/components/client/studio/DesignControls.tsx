import React from 'react';
import { RotateCcw, RotateCw, Maximize, Minimize, Move } from 'lucide-react';
import { useDesignStore } from '../../../stores/designStore';

export default function DesignControls() {
  const { 
    designScale, 
    designRotation,
    updateDesignScale,
    updateDesignRotation,
    canUndo,
    canRedo,
    undo,
    redo
  } = useDesignStore();

  return (
    <div className="space-y-6 p-6 border border-green-500/10 rounded-xl">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Design Controls</h3>
        
        {/* Scale Controls */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Scale</label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => updateDesignScale(Math.max(0.5, designScale - 0.1))}
              className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20"
            >
              <Minimize size={20} />
            </button>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={designScale}
              onChange={(e) => updateDesignScale(parseFloat(e.target.value))}
              className="flex-1"
            />
            <button
              onClick={() => updateDesignScale(Math.min(2, designScale + 0.1))}
              className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20"
            >
              <Maximize size={20} />
            </button>
            <span className="text-sm text-gray-400 w-16">
              {(designScale * 100).toFixed(0)}%
            </span>
          </div>
        </div>

        {/* Rotation Controls */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Rotation</label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => updateDesignRotation(designRotation - 1)}
              className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20"
            >
              <RotateCcw size={20} />
            </button>
            <input
              type="range"
              min="0"
              max="359"
              value={designRotation}
              onChange={(e) => updateDesignRotation(parseInt(e.target.value))}
              className="flex-1"
            />
            <button
              onClick={() => updateDesignRotation(designRotation + 1)}
              className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20"
            >
              <RotateCw size={20} />
            </button>
            <span className="text-sm text-gray-400 w-16">
              {designRotation}°
            </span>
          </div>
        </div>

        {/* Position Indicator */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Position</label>
          <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-green-500/10">
            <Move size={20} className="text-green-500" />
            <span className="text-sm text-gray-400">
              Drag design to reposition
            </span>
          </div>
        </div>

        {/* History Controls */}
        <div className="flex gap-2">
          <button
            onClick={undo}
            disabled={!canUndo}
            className="flex-1 p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Undo
          </button>
          <button
            onClick={redo}
            disabled={!canRedo}
            className="flex-1 p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Redo
          </button>
        </div>
      </div>
    </div>
  );
}