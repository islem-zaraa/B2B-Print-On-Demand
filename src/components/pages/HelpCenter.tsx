import React from 'react';
import { LifeBuoy, MessageCircle, Phone } from 'lucide-react';

export default function HelpCenter() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Help <span className="text-green-500">Center</span>
          </h1>

          <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-400">24/7 instant support</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-400">Talk to our experts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <LifeBuoy className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Knowledge Base</h3>
                <p className="text-gray-400">Find quick answers</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Popular Topics</h2>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-green-500 hover:text-green-400">
                    How to place your first order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-500 hover:text-green-400">
                    Shipping and delivery information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-500 hover:text-green-400">
                    Returns and refunds policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-500 hover:text-green-400">
                    File preparation guidelines
                  </a>
                </li>
              </ul>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Support</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-black px-8 py-3 rounded-full hover:bg-green-400 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}