import React from 'react';
import { Award, Newspaper, Download } from 'lucide-react';

const pressReleases = [
  {
    title: "PrintFlow Raises $50M Series B to Expand Global Print Network",
    date: "March 1, 2024",
    source: "TechCrunch",
    link: "#"
  },
  {
    title: "PrintFlow Named Top 10 E-commerce Solution Provider 2024",
    date: "February 15, 2024",
    source: "Business Weekly",
    link: "#"
  },
  {
    title: "PrintFlow Launches Sustainable Printing Initiative",
    date: "January 30, 2024",
    source: "Green Business Journal",
    link: "#"
  }
];

export default function Press() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Press <span className="text-green-500">Room</span>
          </h1>

          <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Industry Leader</h3>
                <p className="text-gray-400">Recognized for innovation in print-on-demand</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Newspaper className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Media Coverage</h3>
                <p className="text-gray-400">Featured in leading tech publications</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Press Kit</h3>
                <p className="text-gray-400">Download our media resources</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Latest Press Releases</h2>
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-xl p-6 hover:border-green-500/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{release.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <span>{release.date}</span>
                      <span>•</span>
                      <span>{release.source}</span>
                    </div>
                  </div>
                  <a
                    href={release.link}
                    className="mt-4 md:mt-0 text-green-500 hover:text-green-400 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Media Contact</h2>
            <p className="text-gray-300 mb-4">
              For press inquiries, please contact our media relations team:
            </p>
            <p className="text-green-500">press@printflow.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}