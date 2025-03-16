import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Send, CheckCircle, XCircle } from 'lucide-react';

type FormData = {
  email: string;
};

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setError(null);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Reset Password</h2>
            <p className="text-gray-400">
              Enter your email address and we'll send you instructions to reset your password
            </p>
          </div>

          <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
            {isSubmitted ? (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Check Your Email</h3>
                <p className="text-gray-400 mb-6">
                  If an account exists for {errors.email}, you will receive password reset instructions.
                </p>
                <Link
                  to="/signin"
                  className="inline-flex items-center justify-center gap-2 text-green-500 hover:text-green-400 transition-colors"
                >
                  <ArrowLeft size={20} />
                  Back to Sign In
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
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

                {error && (
                  <div className="flex items-center gap-2 text-red-500">
                    <XCircle size={20} />
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-green-500 text-black px-8 py-3 rounded-full hover:bg-green-400 transition-all hover:shadow-lg hover:shadow-green-500/20 flex items-center justify-center gap-2 font-semibold"
                >
                  Send Reset Link
                  <Send size={20} />
                </button>

                <div className="text-center">
                  <Link
                    to="/signin"
                    className="inline-flex items-center justify-center gap-2 text-green-500 hover:text-green-400 transition-colors"
                  >
                    <ArrowLeft size={20} />
                    Back to Sign In
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}