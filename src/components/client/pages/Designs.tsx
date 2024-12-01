import React from 'react';
import DesignUploader from '../widgets/DesignUploader';
import DesignGrid from '../widgets/DesignGrid';

export default function Designs() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">My Designs</h2>
      </div>

      <DesignUploader />
      <DesignGrid />
    </div>
  );
}