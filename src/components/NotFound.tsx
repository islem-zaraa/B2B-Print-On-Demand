import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-12">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-green-500" />
            </div>

            <h1 className="text-6xl font-bold text-white mb-4">
              404
            </h1>
            
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Page Not Found
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            <div className="space-y-6">
              <p className="text-gray-400">
                Here are some helpful links:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-400 transition-all"
                >
                  <Home size={20} />
                  Back to Home
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border border-green-500/20 text-white px-6 py-3 rounded-full hover:bg-green-500/10 transition-all"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}