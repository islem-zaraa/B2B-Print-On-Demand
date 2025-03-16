import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const openings = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering"
  },
  {
    title: "Product Marketing Manager",
    location: "New York, NY",
    type: "Full-time",
    department: "Marketing"
  },
  {
    title: "Customer Success Specialist",
    location: "London, UK",
    type: "Full-time",
    department: "Customer Support"
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    department: "Design"
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-green-500">Team</span>
            </h1>
            <p className="text-xl text-gray-300">
              Help us revolutionize the print-on-demand industry
            </p>
          </div>

          <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Why PrintFlow?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Growth Opportunities</h3>
                <p className="text-gray-400">Develop your skills and advance your career</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Remote-First</h3>
                <p className="text-gray-400">Work from anywhere in the world</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Work-Life Balance</h3>
                <p className="text-gray-400">Flexible hours and unlimited PTO</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-xl p-6 hover:border-green-500/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} className="text-green-500" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} className="text-green-500" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} className="text-green-500" />
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-green-500 text-black px-6 py-2 rounded-full hover:bg-green-400 transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}