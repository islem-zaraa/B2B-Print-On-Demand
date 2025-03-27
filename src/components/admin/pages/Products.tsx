import React, { useState } from 'react';
import { Package, X, Save, Plus, Upload, DollarSign, ClipboardEdit, Pencil, Layers } from 'lucide-react';

export default function Products() {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Apparel',
    stock: '',
    imageUrl: ''
  });
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Product data submitted:', formData);
    // Close the modal and reset form
    setShowAddProductModal(false);
    setFormData({
      name: '',
      description: '',
      price: '',
      category: 'Apparel',
      stock: '',
      imageUrl: ''
    });
    alert('Product added successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Products</h2>
        <button 
          className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2"
          onClick={() => setShowAddProductModal(true)}
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>
      
      <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
            <Package className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Products Yet</h3>
          <p className="text-gray-400">Start by adding your first product</p>
        </div>
      </div>
      
      {/* Add Product Modal */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-green-500/40 via-green-500/30 to-green-500/40 -z-10"></div>
            
            <div className="border-b border-gray-800/60 p-4 flex justify-between items-center sticky top-0 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm z-10 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
                  <Package className="text-green-400 h-6 w-6 drop-shadow-md" />
                </div>
                <div>
                  <h2 className="text-white text-xl drop-shadow-md">Add New Product</h2>
                </div>
              </div>
              <button 
                onClick={() => setShowAddProductModal(false)} 
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Product Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Product Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="Premium T-Shirt"
                      />
                      <Pencil className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                  
                  {/* Product Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">
                      Description
                    </label>
                    <div className="relative">
                      <textarea
                        id="description"
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="High-quality product description..."
                      />
                      <ClipboardEdit className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                  
                  {/* Product Price */}
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-400 mb-2">
                      Price
                    </label>
                    <div className="relative">
                      <input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        required
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="29.99"
                      />
                      <DollarSign className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                  
                  {/* Product Category */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-2">
                      Category
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-green-500/50 backdrop-blur-xl appearance-none"
                      >
                        <option value="Apparel">Apparel</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Home Decor">Home Decor</option>
                      </select>
                      <Layers className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                  
                  {/* Stock Quantity */}
                  <div>
                    <label htmlFor="stock" className="block text-sm font-medium text-gray-400 mb-2">
                      Stock Quantity
                    </label>
                    <div className="relative">
                      <input
                        id="stock"
                        name="stock"
                        type="number"
                        required
                        value={formData.stock}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="100"
                      />
                      <Package className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                  
                  {/* Product Image */}
                  <div>
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-400 mb-2">
                      Image URL
                    </label>
                    <div className="relative">
                      <input
                        id="imageUrl"
                        name="imageUrl"
                        type="text"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="https://example.com/image.jpg"
                      />
                      <Upload className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddProductModal(false)}
                    className="bg-transparent border border-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2"
                  >
                    <Save size={20} />
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}