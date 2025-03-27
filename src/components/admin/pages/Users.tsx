import React, { useState } from 'react';
import { Users as UsersIcon, User, Mail, Shield, Lock, X, Eye, EyeOff, Save, Plus } from 'lucide-react';

export default function Users() {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'User',
    password: '',
    confirmPassword: ''
  });
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form data
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle form submission logic here
    console.log('User data submitted:', formData);
    // Close the modal and reset form
    setShowAddUserModal(false);
    setFormData({
      fullName: '',
      email: '',
      role: 'User',
      password: '',
      confirmPassword: ''
    });
    alert('User added successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Users</h2>
        <button 
          className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2"
          onClick={() => setShowAddUserModal(true)}
        >
          <Plus size={18} />
          Add User
        </button>
      </div>
      
      <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
            <UsersIcon className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Users Yet</h3>
          <p className="text-gray-400">Start by adding your first user</p>
        </div>
      </div>
      
      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-green-500/40 via-green-500/30 to-green-500/40 -z-10"></div>
            
            <div className="border-b border-gray-800/60 p-4 flex justify-between items-center sticky top-0 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm z-10 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
                  <User className="text-green-400 h-6 w-6 drop-shadow-md" />
                </div>
                <div>
                  <h2 className="text-white text-xl drop-shadow-md">Add New User</h2>
                </div>
              </div>
              <button 
                onClick={() => setShowAddUserModal(false)} 
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="John Doe"
                      />
                      <User className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="user@example.com"
                      />
                      <Mail className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-400 mb-2">
                      User Role
                    </label>
                    <div className="relative">
                      <select
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-green-500/50 backdrop-blur-xl appearance-none"
                      >
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="User">User</option>
                      </select>
                      <Shield className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="••••••••••••"
                      />
                      <Lock className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="••••••••••••"
                      />
                      <Lock className="absolute left-3 top-3.5 text-green-500/70" size={18} />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddUserModal(false)}
                    className="bg-transparent border border-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2"
                  >
                    <Save size={20} />
                    Add User
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