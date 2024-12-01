import React from 'react';
import { Book, Code, FileText } from 'lucide-react';

export default function Documentation() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Documentation <span className="text-green-500">Center</span>
          </h1>

          <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Book className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Getting Started</h3>
                <p className="text-gray-400">Quick start guides and tutorials</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">API Guides</h3>
                <p className="text-gray-400">Detailed API documentation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
                <p className="text-gray-400">Sample code and SDKs</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Platform Overview</h2>
              <p className="text-gray-300 mb-4">
                Learn about PrintFlow's architecture, core concepts, and best practices for 
                implementing our print-on-demand solutions in your business.
              </p>
              <button className="text-green-500 hover:text-green-400 font-semibold">
                Read More →
              </button>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Integration Guides</h2>
              <p className="text-gray-300 mb-4">
                Step-by-step tutorials for integrating PrintFlow with popular e-commerce 
                platforms and custom solutions.
              </p>
              <button className="text-green-500 hover:text-green-400 font-semibold">
                View Guides →
              </button>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">API Reference</h2>
              <p className="text-gray-300 mb-4">
                Complete API documentation with examples, authentication guides, and 
                endpoint references.
              </p>
              <button className="text-green-500 hover:text-green-400 font-semibold">
                Explore API →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}