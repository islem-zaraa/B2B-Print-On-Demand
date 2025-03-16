import React from 'react';
import RevenueChart from '../RevenueChart';
import CustomerMetrics from '../CustomerMetrics';
import OrdersOverview from '../OrdersOverview';
import TopProducts from '../TopProducts';
import Notifications from '../Notifications';

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <RevenueChart />
        <CustomerMetrics />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <OrdersOverview />
        <TopProducts />
      </div>
      <Notifications />
    </div>
  );
}