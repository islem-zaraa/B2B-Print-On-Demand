import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTIyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Your Business. <br />
              Your Designs. <br />
              <span className="text-green-500">Printed On Demand,</span> <br />
              Simplified.
            </h1>
            <p className="text-xl text-gray-400 max-w-lg">
              Transform your ideas into reality with our enterprise-grade print-on-demand platform. Scale your business without limits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="bg-green-500 text-black px-8 py-4 rounded-full hover:bg-green-400 transition-all hover:shadow-lg hover:shadow-green-500/20 flex items-center gap-2 font-semibold"
              >
                Start Now
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/demo"
                className="border border-green-500/20 text-white px-8 py-4 rounded-full hover:bg-green-500/10 transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <PlayCircle size={20} />
                Schedule a Demo
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Dashboard Preview"
                className="rounded-xl shadow-2xl shadow-green-500/5"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ['2M+', 'Products Printed'],
            ['10k+', 'Active Users'],
            ['99.9%', 'Uptime'],
            ['24/7', 'Support'],
          ].map(([stat, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-green-500">{stat}</div>
              <div className="text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}