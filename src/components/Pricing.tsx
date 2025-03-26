import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Business',
    price: '$49',
    period: '/month',
    description: 'Perfect for small to medium businesses',
    features: [
      'Up to 1,000 orders/month',
      'Standard shipping rates',
      'Basic design tools',
      'Email support',
      '5 team members',
      'Analytics dashboard',
      'API access',
      'Custom packaging (basic)'
    ]
  },
  {
    name: 'Enterprise',
    price: 'DZD 199',
    period: '/month',
    description: 'For high-volume businesses with custom needs',
    features: [
      'Unlimited orders',
      'Priority shipping rates',
      'Advanced design tools',
      '24/7 priority support',
      'Unlimited team members',
      'Advanced analytics',
      'Priority API access',
      'Custom packaging (premium)'
    ],
    highlighted: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, <span className="text-green-500">Transparent</span> Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that best fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`backdrop-blur-xl bg-black/30 border rounded-2xl p-8 transition-all relative group ${
                plan.highlighted
                  ? 'border-green-500/50 shadow-lg shadow-green-500/10'
                  : 'border-green-500/10 hover:border-green-500/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 font-semibold ${
                  plan.highlighted
                    ? 'bg-green-500 text-black hover:bg-green-400'
                    : 'border border-green-500/20 text-white hover:bg-green-500/10'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}