import React, { useState } from 'react';
import { ShoppingCart, X, Save, Plus, User, Calendar, DollarSign, Package, Truck, Search, CreditCard } from 'lucide-react';

export default function Orders() {
  const [showNewOrderModal, setShowNewOrderModal] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    customerName: '',
    productName: '',
    quantity: '',
    price: '',
    shippingAddress: '',
    paymentMethod: 'Credit Card',
    deliveryDate: ''
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
    console.log('Order data submitted:', formData);
    // Close the modal and reset form
    setShowNewOrderModal(false);
    setFormData({
      customerName: '',
      productName: '',
      quantity: '',
      price: '',
      shippingAddress: '',
      paymentMethod: 'Credit Card',
      deliveryDate: ''
    });
    alert('Order created successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Orders</h2>
        <div className="flex gap-2">
          <button className="border border-green-500/20 text-white px-4 py-2 rounded-lg hover:bg-green-500/10 transition-all">
            Export
          </button>
          <button 
            className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2"
            onClick={() => setShowNewOrderModal(true)}
          >
            <Plus size={18} />
            New Order
          </button>
        </div>
      </div>
      
      <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
            <ShoppingCart className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Orders Yet</h3>
          <p className="text-gray-400">Orders will appear here once customers start purchasing</p>
        </div>
      </div>
      
      {/* New Order Modal */}
      {showNewOrderModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-green-500/40 via-green-500/30 to-green-500/40 -z-10"></div>
            
            <div className="border-b border-gray-800/60 p-4 flex justify-between items-center sticky top-0 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm z-10 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
                  <ShoppingCart className="text-green-400 h-6 w-6 drop-shadow-md" />
                </div>
                <div>
                  <h2 className="text-white text-xl drop-shadow-md">Create New Order</h2>
                </div>
              </div>
              <button 
                onClick={() => setShowNewOrderModal(false)} 
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Customer Name */}
                  <div>
                    <label htmlFor="customerName" className="block text-sm font-medium text-gray-400 mb-2">
                      Customer Name
                    </label>
                    <div className="relative">
                      <input
                        id="customerName"
                        name="customerName"
                        type="text"
                        required
                        value={formData.customerName}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="John Doe"
                      />
                      <User className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                  
                  {/* Product Name */}
                  <div>
                    <label htmlFor="productName" className="block text-sm font-medium text-gray-400 mb-2">
                      Product
                    </label>
                    <div className="relative">
                      <input
                        id="productName"
                        name="productName"
                        type="text"
                        required
                        value={formData.productName}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="Premium T-Shirt"
                      />
                      <Package className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Quantity */}
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-400 mb-2">
                        Quantity
                      </label>
                      <div className="relative">
                        <input
                          id="quantity"
                          name="quantity"
                          type="number"
                          required
                          value={formData.quantity}
                          onChange={handleInputChange}
                          className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                          placeholder="1"
                        />
                        <Package className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                      </div>
                    </div>
                    
                    {/* Price */}
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
                  </div>
                  
                  {/* Shipping Address */}
                  <div>
                    <label htmlFor="shippingAddress" className="block text-sm font-medium text-gray-400 mb-2">
                      Shipping Address
                    </label>
                    <div className="relative">
                      <textarea
                        id="shippingAddress"
                        name="shippingAddress"
                        required
                        value={formData.shippingAddress}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="123 Main St, City, Country"
                      />
                      <Truck className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Payment Method */}
                    <div>
                      <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-400 mb-2">
                        Payment Method
                      </label>
                      <div className="relative">
                        <select
                          id="paymentMethod"
                          name="paymentMethod"
                          required
                          value={formData.paymentMethod}
                          onChange={handleInputChange}
                          className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-green-500/50 backdrop-blur-xl appearance-none"
                        >
                          <option value="Credit Card">Credit Card</option>
                          <option value="PayPal">PayPal</option>
                          <option value="Bank Transfer">Bank Transfer</option>
                          <option value="Cash on Delivery">Cash on Delivery</option>
                        </select>
                        <CreditCard className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                      </div>
                    </div>
                    
                    {/* Delivery Date */}
                    <div>
                      <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-400 mb-2">
                        Expected Delivery
                      </label>
                      <div className="relative">
                        <input
                          id="deliveryDate"
                          name="deliveryDate"
                          type="date"
                          required
                          value={formData.deliveryDate}
                          onChange={handleInputChange}
                          className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        />
                        <Calendar className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowNewOrderModal(false)}
                    className="bg-transparent border border-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2"
                  >
                    <Save size={20} />
                    Create Order
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