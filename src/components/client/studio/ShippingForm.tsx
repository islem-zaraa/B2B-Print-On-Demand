import React from 'react';
import { useForm } from 'react-hook-form';

interface ShippingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export default function ShippingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormData>();

  const onSubmit = (data: ShippingFormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Phone
            </label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Address Line 1
          </label>
          <input
            type="text"
            {...register("address1", { required: "Address is required" })}
            className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
          />
          {errors.address1 && (
            <p className="mt-1 text-sm text-red-500">{errors.address1.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Address Line 2 (Optional)
          </label>
          <input
            type="text"
            {...register("address2")}
            className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              City
            </label>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              State/Province
            </label>
            <input
              type="text"
              {...register("state", { required: "State is required" })}
              className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
            />
            {errors.state && (
              <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              ZIP/Postal Code
            </label>
            <input
              type="text"
              {...register("zipCode", { required: "ZIP code is required" })}
              className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
            />
            {errors.zipCode && (
              <p className="mt-1 text-sm text-red-500">{errors.zipCode.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Country
            </label>
            <select
              {...register("country", { required: "Country is required" })}
              className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
            >
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-500">{errors.country.message}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}