import React from 'react';
import DesignUploader from '../studio/DesignUploader';
import MockupPreview from '../studio/MockupPreview';
import DesignControls from '../studio/DesignControls';
import PricingCalculator from '../studio/PricingCalculator';
import { useDesignStore } from '../../../stores/designStore';

export default function DesignStudio() {
  const { loading } = useDesignStore();

  return (
    <div className="h-full flex flex-col lg:flex-row gap-6 p-6">
      {/* Left Panel - Design Tools */}
      <div className="lg:w-1/3 space-y-6">
        <DesignUploader />
        <DesignControls />
        <PricingCalculator />
      </div>

      {/* Right Panel - Preview */}
      <div className="lg:w-2/3">
        <MockupPreview />
      </div>
    </div>
  );
}