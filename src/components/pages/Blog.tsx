import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';

const posts = [
  {
    title: "The Future of Print-on-Demand: Trends to Watch in 2024",
    excerpt: "Explore the latest innovations and trends shaping the print-on-demand industry...",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Scaling Your POD Business: Success Stories from Our Customers",
    excerpt: "Learn how successful entrepreneurs built thriving print-on-demand businesses...",
    author: "Michael Chen",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sustainable Printing: Our Commitment to the Environment",
    excerpt: "Discover how we're making print-on-demand more environmentally friendly...",
    author: "Emily Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            PrintFlow <span className="text-green-500">Blog</span>
          </h1>
          
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {post.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <User size={16} className="text-green-500" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} className="text-green-500" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} className="text-green-500" />
                      {post.readTime}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                  <button className="text-green-500 hover:text-green-400 font-semibold transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}