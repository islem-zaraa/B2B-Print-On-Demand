import React from 'react';
import { Code } from 'lucide-react';

export default function ApiReference() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-500/10 flex items-center justify-center">
            <Code className="w-12 h-12 text-green-500" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            API Reference
          </h1>

          <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-400 mb-8">
              Our API documentation is currently under development. 
              We're working hard to provide you with comprehensive API references and guides.
            </p>
            <button
              onClick={() => window.history.back()}
              className="bg-green-500 text-black px-8 py-3 rounded-full hover:bg-green-400 transition-all"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}