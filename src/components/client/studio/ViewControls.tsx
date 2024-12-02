import React from 'react';
import { Grid, Download } from 'lucide-react';

interface ViewControlsProps {
  currentView: 'front' | 'back' | 'side';
  setCurrentView: (view: 'front' | 'back' | 'side') => void;
  showGrid: boolean;
  setShowGrid: (show: boolean) => void;
}

export default function ViewControls({
  currentView,
  setCurrentView,
  showGrid,
  setShowGrid
}: ViewControlsProps) {
  const views = {
    front: 'Front View',
    back: 'Back View',
    side: 'Side View'
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <button
          onClick={() => setShowGrid(!showGrid)}
          className={`p-2 rounded-lg transition-colors ${
            showGrid 
              ? 'bg-green-500 text-black' 
              : 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
          }`}
        >
          <Grid size={20} />
        </button>
      </div>

      <div className="flex gap-2">
        {Object.entries(views).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setCurrentView(key as 'front' | 'back' | 'side')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentView === key
                ? 'bg-green-500 text-black'
                : 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <button className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20">
        <Download size={20} />
      </button>
    </div>
  );
}