import React from 'react';

const products = [
  {
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80",
    title: 'Apparel',
    description: 'Custom t-shirts, hoodies, and more with premium quality printing'
  },
  {
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=300&q=80",
    title: 'Drinkware',
    description: 'Personalized mugs, water bottles, and tumblers'
  },
  {
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=300&q=80",
    title: 'Stationery',
    description: 'Business cards, notebooks, and promotional materials'
  },
  {
    image: "https://images.unsplash.com/photo-1589384267710-7a25bc5b4862?auto=format&fit=crop&w=300&q=80",
    title: 'Stickers',
    description: 'Die-cut stickers, labels, and decals in any shape'
  },
  {
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80",
    title: 'Wall Art',
    description: 'Posters, canvas prints, and framed artwork'
  },
  {
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=300&q=80",
    title: 'Phone Cases',
    description: 'Custom cases for all popular smartphone models'
  },
  {
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=300&q=80",
    title: 'Packaging',
    description: 'Custom boxes, mailers, and packaging materials'
  },
  {
    image: "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?auto=format&fit=crop&w=300&q=80",
    title: 'Home & Living',
    description: 'Pillows, blankets, and home decor items'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-green-500">Products</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            High-quality custom products for every business need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6 hover:border-green-500/30 transition-all group"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
              <p className="text-gray-400">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}