import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  ArrowLeft, 
  ShoppingCart, 
  Heart, 
  Share2,
  Truck, 
  Shield,
  CreditCard,
  Check 
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

type FormData = {
  size: string;
  color: string;
  quantity: number;
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  customization: string;
};

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colors = [
  { name: 'Black', value: 'black', hex: '#000000' },
  { name: 'White', value: 'white', hex: '#FFFFFF' },
  { name: 'Green', value: 'green', hex: '#10B981' },
  { name: 'Blue', value: 'blue', hex: '#3B82F6' },
  { name: 'Red', value: 'red', hex: '#EF4444' },
  { name: 'Gray', value: 'gray', hex: '#6B7280' },
];

export default function TemplateDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [selectedColor, setSelectedColor] = useState('black');
  const [isLiked, setIsLiked] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      size: 'M',
      color: 'black',
      quantity: 1,
    }
  });

  // This would normally come from an API call using the ID
  const template = {
    id: id || '1',
    name: 'Classic T-Shirt Design',
    category: 'T-Shirts',
    description: 'A premium quality t-shirt with a modern design that is perfect for casual wear or special events. Made with 100% organic cotton for maximum comfort.',
    price: 29.99,
    preview: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically process the order or add to cart
    alert('Order submitted successfully!');
    navigate('/client');
  };

  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <button 
          onClick={() => navigate(-1)} 
          className="text-gray-400 hover:text-green-500 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <span className="text-gray-400">/ Templates / {template.category} /</span>
        <span className="text-white">{template.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl overflow-hidden">
          <img 
            src={template.preview} 
            alt={template.name} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details and Form */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl font-bold text-white">{template.name}</h1>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-full ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-green-500'} transition-colors`}
                >
                  <Heart size={20} />
                </button>
                <button className="p-2 rounded-full text-gray-400 hover:text-green-500 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
            <p className="text-green-500 text-xl font-semibold mb-4">${template.price}</p>
            <p className="text-gray-400 mb-6">{template.description}</p>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Truck size={18} className="text-green-500" />
                <span className="text-sm text-gray-400">Free shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-green-500" />
                <span className="text-sm text-gray-400">Quality guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard size={18} className="text-green-500" />
                <span className="text-sm text-gray-400">Secure payment</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Size
              </label>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map((size) => (
                  <label 
                    key={size}
                    className="relative"
                  >
                    <input
                      type="radio"
                      value={size}
                      {...register("size", { required: "Size is required" })}
                      className="sr-only"
                    />
                    <div className={`w-full py-2 text-center rounded-lg cursor-pointer ${
                      selectedColor === 'white' 
                        ? 'border border-green-500/20 hover:border-green-500/50' 
                        : 'bg-black/30 border border-green-500/20 hover:border-green-500/50'
                    } ${errors.size ? 'border-red-500' : ''}`}>
                      {size}
                    </div>
                  </label>
                ))}
              </div>
              {errors.size && (
                <p className="mt-1 text-sm text-red-500">{errors.size.message}</p>
              )}
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Color
              </label>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <label 
                    key={color.value}
                    className="relative"
                  >
                    <input
                      type="radio"
                      value={color.value}
                      {...register("color", { required: "Color is required" })}
                      className="sr-only"
                      onChange={() => setSelectedColor(color.value)}
                    />
                    <div 
                      className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                        selectedColor === color.value 
                          ? 'border-green-500' 
                          : 'border-transparent hover:border-green-500/50'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor === color.value && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Check size={16} className={color.value === 'white' ? 'text-black' : 'text-white'} />
                        </div>
                      )}
                    </div>
                    <span className="sr-only">{color.name}</span>
                  </label>
                ))}
              </div>
              {errors.color && (
                <p className="mt-1 text-sm text-red-500">{errors.color.message}</p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-400 mb-2">
                Quantity
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                {...register("quantity", {
                  required: "Quantity is required",
                  min: {
                    value: 1,
                    message: "Minimum quantity is 1"
                  }
                })}
                className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
              />
              {errors.quantity && (
                <p className="mt-1 text-sm text-red-500">{errors.quantity.message}</p>
              )}
            </div>

            {/* Customization */}
            <div>
              <label htmlFor="customization" className="block text-sm font-medium text-gray-400 mb-2">
                Customization Instructions (Optional)
              </label>
              <textarea
                id="customization"
                rows={3}
                {...register("customization")}
                className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                placeholder="Add any specific instructions for customization..."
              />
            </div>

            <div className="border-t border-green-500/10 pt-6">
              <h2 className="text-xl font-bold text-white mb-4">Shipping Information</h2>
              
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Full name is required",
                  })}
                  className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Address */}
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-400 mb-2">
                  Street Address
                </label>
                <input
                  id="address"
                  type="text"
                  {...register("address", {
                    required: "Address is required",
                  })}
                  className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                  placeholder="123 Main St"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
                )}
              </div>

              {/* City, State, Zip */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-400 mb-2">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    {...register("city", {
                      required: "City is required",
                    })}
                    className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                    placeholder="City"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-400 mb-2">
                    State/Province
                  </label>
                  <input
                    id="state"
                    type="text"
                    {...register("state", {
                      required: "State is required",
                    })}
                    className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                    placeholder="State"
                  />
                  {errors.state && (
                    <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-400 mb-2">
                    ZIP/Postal Code
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    {...register("zipCode", {
                      required: "ZIP code is required",
                    })}
                    className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                    placeholder="ZIP Code"
                  />
                  {errors.zipCode && (
                    <p className="mt-1 text-sm text-red-500">{errors.zipCode.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-400 mb-2">
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    {...register("country", {
                      required: "Country is required",
                    })}
                    className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                    placeholder="Country"
                  />
                  {errors.country && (
                    <p className="mt-1 text-sm text-red-500">{errors.country.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-green-500 text-black px-8 py-3 rounded-full hover:bg-green-400 transition-all hover:shadow-lg hover:shadow-green-500/20 flex items-center justify-center gap-2 font-semibold"
              >
                <ShoppingCart size={20} />
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 