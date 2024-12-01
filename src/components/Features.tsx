import React from 'react';
import { Zap, Globe, Palette, BarChart3, Shield, Clock, Cloud, Gift } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Easy Integration',
    description: 'Connect your store in minutes with our plug-and-play API solutions'
  },
  {
    icon: Globe,
    title: 'Global Fulfillment',
    description: 'Ship to customers worldwide with our network of print facilities'
  },
  {
    icon: Palette,
    title: 'Advanced Design Tools',
    description: 'Create and customize products with our intuitive design interface'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track performance and optimize your business with real-time insights'
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'Every product passes our rigorous quality control standards'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most orders ship within 2-3 business days'
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'Unlimited design storage with automatic file optimization'
  },
  {
    icon: Gift,
    title: 'Custom Packaging',
    description: 'Brand your shipments with custom packaging options'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to <span className="text-green-500">Scale</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform provides all the tools and features you need to grow your print-on-demand business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6 hover:border-green-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}