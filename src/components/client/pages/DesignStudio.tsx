import React, { useState } from 'react';
import DesignWorkspace from '../studio/DesignWorkspace';
import ShippingForm from '../studio/ShippingForm';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function DesignStudio() {
  const [step, setStep] = useState<'design' | 'shipping'>('design');

  return (
    <div className="h-full flex flex-col">
      {/* Progress Steps */}
      <div className="mb-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'design' ? 'bg-green-500 text-black' : 'bg-green-500/10 text-green-500'
            }`}>
              1
            </div>
            <div className={`h-1 w-24 mx-2 ${
              step === 'shipping' ? 'bg-green-500' : 'bg-green-500/10'
            }`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'shipping' ? 'bg-green-500 text-black' : 'bg-green-500/10 text-green-500'
            }`}>
              2
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 text-sm">
          <span className="w-32 text-center">Design</span>
          <span className="w-32 text-center">Shipping</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {step === 'design' ? (
          <div className="h-full flex flex-col">
            <DesignWorkspace />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setStep('shipping')}
                className="bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2"
              >
                Continue to Shipping
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col">
            <ShippingForm />
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setStep('design')}
                className="border border-green-500/20 text-white px-6 py-3 rounded-lg hover:bg-green-500/10 transition-all flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to Design
              </button>
              <button
                onClick={() => {/* Handle order submission */}}
                className="bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2"
              >
                Place Order
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}