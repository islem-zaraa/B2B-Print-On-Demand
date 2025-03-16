import React from 'react';
import { Users, Target, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-green-500">PrintFlow</span>
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                PrintFlow is revolutionizing the print-on-demand industry with cutting-edge technology 
                and a commitment to quality. Founded in 2020, we've grown from a small startup to a 
                global leader in custom printing solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                <p className="text-gray-400">
                  To empower businesses with seamless print-on-demand solutions that scale.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Our Values</h3>
                <p className="text-gray-400">
                  Quality, innovation, and customer success drive everything we do.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Our Team</h3>
                <p className="text-gray-400">
                  A diverse group of experts passionate about print technology.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                What started as a vision to simplify print-on-demand has evolved into a comprehensive 
                platform serving thousands of businesses worldwide. Our journey is marked by continuous 
                innovation and a relentless focus on customer success.
              </p>
              <p className="text-gray-300">
                Today, PrintFlow processes millions of orders annually, supported by a network of 
                strategic printing facilities across the globe. We're proud to be the trusted partner 
                for businesses ranging from creative startups to enterprise organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}