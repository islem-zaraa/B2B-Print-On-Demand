import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  User, 
  Bell, 
  Lock, 
  CreditCard, 
  Shield, 
  PaintBucket, 
  Languages, 
  Eye, 
  EyeOff,
  Save,
  AlertCircle
} from 'lucide-react';
import { useAuthStore } from '../../../stores/authStore';

type ProfileFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  bio: string;
};

type PasswordFormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { user } = useAuthStore();
  
  const profileForm = useForm<ProfileFormData>({
    defaultValues: {
      fullName: user?.full_name || '',
      email: user?.email || '',
      phone: '',
      company: '',
      bio: ''
    }
  });

  const passwordForm = useForm<PasswordFormData>();

  const onProfileSubmit = (data: ProfileFormData) => {
    console.log('Profile data submitted:', data);
    // Here you would update the user's profile
    alert('Profile updated successfully!');
  };

  const onPasswordSubmit = (data: PasswordFormData) => {
    console.log('Password form submitted:', data);
    if (data.newPassword !== data.confirmPassword) {
      passwordForm.setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match'
      });
      return;
    }
    // Here you would update the user's password
    alert('Password updated successfully!');
    passwordForm.reset();
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'password', label: 'Password', icon: Lock },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: PaintBucket },
    { id: 'language', label: 'Language', icon: Languages }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-white">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Tabs */}
        <div className="lg:col-span-1">
          <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl overflow-hidden">
            <nav className="flex flex-col">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 text-left ${
                      isActive 
                        ? 'bg-green-500/10 text-green-500 border-l-2 border-green-500' 
                        : 'text-gray-400 hover:text-green-500 hover:bg-green-500/5'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Profile Settings</h2>
                <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        {...profileForm.register("fullName", { required: "Full name is required" })}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                      />
                      {profileForm.formState.errors.fullName && (
                        <p className="mt-1 text-sm text-red-500">{profileForm.formState.errors.fullName.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...profileForm.register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                      />
                      {profileForm.formState.errors.email && (
                        <p className="mt-1 text-sm text-red-500">{profileForm.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...profileForm.register("phone")}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...profileForm.register("company")}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-400 mb-2">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      {...profileForm.register("bio")}
                      className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                      placeholder="Tell us about yourself or your business..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2"
                    >
                      <Save size={20} />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'password' && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Password Settings</h2>
                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-400 mb-2">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        id="currentPassword"
                        type={showCurrentPassword ? "text" : "password"}
                        {...passwordForm.register("currentPassword", { required: "Current password is required" })}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500"
                      >
                        {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {passwordForm.formState.errors.currentPassword && (
                      <p className="mt-1 text-sm text-red-500">{passwordForm.formState.errors.currentPassword.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-400 mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        id="newPassword"
                        type={showNewPassword ? "text" : "password"}
                        {...passwordForm.register("newPassword", {
                          required: "New password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                          }
                        })}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500"
                      >
                        {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {passwordForm.formState.errors.newPassword && (
                      <p className="mt-1 text-sm text-red-500">{passwordForm.formState.errors.newPassword.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-2">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        {...passwordForm.register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: value =>
                            value === passwordForm.watch("newPassword") || "Passwords do not match"
                        })}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {passwordForm.formState.errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-500">{passwordForm.formState.errors.confirmPassword.message}</p>
                    )}
                  </div>

                  <div className="flex items-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <AlertCircle size={20} className="text-blue-500 mr-2" />
                    <p className="text-sm text-blue-500">Password should be at least 8 characters and include numbers, letters, and special characters.</p>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2"
                    >
                      <Save size={20} />
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Notification Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-green-500/10 pb-4">
                    <div>
                      <h3 className="text-white font-medium">Email Notifications</h3>
                      <p className="text-gray-400 text-sm mt-1">Receive emails about order updates, promotions, and account activity</p>
                    </div>
                    <div className="relative inline-block w-12 h-6">
                      <input type="checkbox" id="emailToggle" className="sr-only" defaultChecked />
                      <span className="block w-12 h-6 bg-green-500/20 rounded-full cursor-pointer"></span>
                      <span className="absolute left-1 top-1 bg-green-500 w-4 h-4 rounded-full transition-transform duration-200 ease-in-out transform translate-x-6"></span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b border-green-500/10 pb-4">
                    <div>
                      <h3 className="text-white font-medium">Order Updates</h3>
                      <p className="text-gray-400 text-sm mt-1">Notifications about status changes to your orders</p>
                    </div>
                    <div className="relative inline-block w-12 h-6">
                      <input type="checkbox" id="orderToggle" className="sr-only" defaultChecked />
                      <span className="block w-12 h-6 bg-green-500/20 rounded-full cursor-pointer"></span>
                      <span className="absolute left-1 top-1 bg-green-500 w-4 h-4 rounded-full transition-transform duration-200 ease-in-out transform translate-x-6"></span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b border-green-500/10 pb-4">
                    <div>
                      <h3 className="text-white font-medium">Marketing</h3>
                      <p className="text-gray-400 text-sm mt-1">Promotional emails, new features, and special offers</p>
                    </div>
                    <div className="relative inline-block w-12 h-6">
                      <input type="checkbox" id="marketingToggle" className="sr-only" />
                      <span className="block w-12 h-6 bg-green-500/20 rounded-full cursor-pointer"></span>
                      <span className="absolute left-1 top-1 bg-green-500 w-4 h-4 rounded-full transition-transform duration-200 ease-in-out transform"></span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2"
                    >
                      <Save size={20} />
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}

            {(activeTab === 'payment' || activeTab === 'privacy' || activeTab === 'appearance' || activeTab === 'language') && (
              <div className="text-center py-8">
                <h2 className="text-xl font-semibold text-white mb-4">{tabs.find(tab => tab.id === activeTab)?.label} Settings</h2>
                <p className="text-gray-400">This section is currently under development.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 