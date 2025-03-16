import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-12">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              Thank You!
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              We've received your submission and will get back to you shortly. Our team typically responds within 24 hours.
            </p>

            <div className="space-y-4">
              <p className="text-gray-400">
                While you wait, you might want to:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-400 transition-all"
                >
                  <ArrowLeft size={20} />
                  Return Home
                </Link>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center border border-green-500/20 text-white px-6 py-3 rounded-full hover:bg-green-500/10 transition-all"
                >
                  Browse Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}