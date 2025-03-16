import React from 'react';
import { Cookie } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
              <Cookie className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
              <p className="text-gray-300">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide a better user experience.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <div className="space-y-4 text-gray-300">
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Authentication and security</li>
                  <li>Preferences and settings</li>
                  <li>Analytics and performance</li>
                  <li>Advertising and targeting</li>
                </ul>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-300">Required for the website to function properly.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Functional Cookies</h3>
                  <p className="text-gray-300">Remember your preferences and settings.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300">Help us understand how visitors use our website.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p className="text-gray-300">Track visitors across websites to display relevant advertisements.</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300">
                Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may affect your experience of our website.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <p className="mt-4 text-green-500">privacy@printflow.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}