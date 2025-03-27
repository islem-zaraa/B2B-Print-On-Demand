import React from 'react';
import { ArrowUpRight, Clock, Upload, ShoppingBag, Bell, Calendar, Zap, Gift } from 'lucide-react';
import RecentDesigns from '../widgets/RecentDesigns';
import DesignStats from '../widgets/DesignStats';
import PopularTemplates from '../widgets/PopularTemplates';

// Sample data for recent orders
const recentOrders = [
  {
    id: 'ORD-5839',
    product: 'Premium T-Shirts (x200)',
    status: 'In Production',
    date: '2023-04-12',
    statusColor: 'amber'
  },
  {
    id: 'ORD-5823',
    product: 'Business Cards (x1000)',
    status: 'Shipped',
    date: '2023-03-28',
    statusColor: 'green'
  }
];

// Sample data for promotional announcements
const promotions = [
  {
    id: 1,
    title: 'Spring Collection',
    description: 'New templates available for spring promotional campaigns',
    date: 'Apr 15, 2023',
    type: 'update'
  },
  {
    id: 2,
    title: 'Volume Discount',
    description: '15% off on orders over 500 units this month',
    date: 'Apr 5, 2023',
    type: 'promo'
  }
];

export default function Overview() {
  // Upload quota stats 
  const uploadQuota = {
    used: 2.4,
    total: 5,
    files: 28
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="backdrop-blur-xl bg-gradient-to-r from-black/80 to-green-900/30 border border-green-500/20 rounded-2xl p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome back, Client</h1>
            <p className="text-gray-300 mt-1">Your dashboard is up to date as of today</p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <button className="flex items-center gap-2 bg-black/40 hover:bg-black/60 border border-green-500/10 p-3 rounded-xl transition-all">
            <ShoppingBag className="text-green-500" size={18} />
            <span className="text-white">New Order</span>
          </button>
          <button className="flex items-center gap-2 bg-black/40 hover:bg-black/60 border border-green-500/10 p-3 rounded-xl transition-all">
            <Calendar className="text-green-500" size={18} />
            <span className="text-white">Schedule Demo</span>
          </button>
          <button className="flex items-center gap-2 bg-black/40 hover:bg-black/60 border border-green-500/10 p-3 rounded-xl transition-all">
            <Zap className="text-green-500" size={18} />
            <span className="text-white">Quick Actions</span>
          </button>
        </div>
      </div>

      <DesignStats />
      
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders Summary */}
        <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Recent Orders</h3>
            <a href="/client/orders" className="text-green-500 hover:text-green-400 transition-colors flex items-center gap-1">
              View All
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="space-y-4">
            {recentOrders.map(order => (
              <div key={order.id} className="flex items-center justify-between p-4 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-black/50">
                    <ShoppingBag className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{order.id}</h4>
                    <p className="text-gray-400 text-sm">{order.product}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`inline-block px-2 py-1 rounded-full text-xs bg-${order.statusColor}-500/20 text-${order.statusColor}-500`}>
                    {order.status}
                  </div>
                  <p className="text-gray-400 text-xs mt-1 flex items-center justify-end">
                    <Clock size={12} className="mr-1" />
                    {order.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Promotional Announcements */}
        <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Announcements</h3>
            <button className="text-green-500 hover:text-green-400 transition-colors">
              <Bell size={18} />
            </button>
          </div>
          <div className="space-y-4">
            {promotions.map(promo => (
              <div key={promo.id} className="p-4 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all">
                <div className="flex items-center mb-2">
                  <div className={`p-2 rounded-full ${promo.type === 'promo' ? 'bg-amber-500/20' : 'bg-blue-500/20'} mr-3`}>
                    {promo.type === 'promo' ? (
                      <Gift className={`h-4 w-4 ${promo.type === 'promo' ? 'text-amber-500' : 'text-blue-500'}`} />
                    ) : (
                      <Bell className={`h-4 w-4 ${promo.type === 'promo' ? 'text-amber-500' : 'text-blue-500'}`} />
                    )}
                  </div>
                  <h4 className="text-white font-medium flex-1">{promo.title}</h4>
                  <span className="text-gray-400 text-xs">{promo.date}</span>
                </div>
                <p className="text-gray-400 text-sm pl-10">{promo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <RecentDesigns />
        <PopularTemplates />
      </div>
    </div>
  );
}