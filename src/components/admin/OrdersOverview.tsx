import React from 'react';
import { format } from 'date-fns';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

const orders = [
  {
    id: 'ORD-001',
    customer: 'Acme Corp',
    status: 'completed',
    date: new Date(),
    amount: 1234.56
  },
  {
    id: 'ORD-002',
    customer: 'TechStart Inc',
    status: 'processing',
    date: new Date(),
    amount: 856.20
  },
  {
    id: 'ORD-003',
    customer: 'Global Print Ltd',
    status: 'pending',
    date: new Date(),
    amount: 2341.00
  }
];

const statusStyles = {
  completed: { icon: CheckCircle, className: 'text-green-500' },
  processing: { icon: Clock, className: 'text-yellow-500' },
  pending: { icon: Package, className: 'text-blue-500' },
  cancelled: { icon: XCircle, className: 'text-red-500' }
};

export default function OrdersOverview() {
  return (
    <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Recent Orders</h3>
        <button className="text-green-500 hover:text-green-400 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => {
          const StatusIcon = statusStyles[order.status as keyof typeof statusStyles].icon;
          const statusClassName = statusStyles[order.status as keyof typeof statusStyles].className;

          return (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full bg-black/30 ${statusClassName}`}>
                  <StatusIcon size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">{order.customer}</p>
                  <p className="text-gray-400 text-sm">{order.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">
                  ${order.amount.toLocaleString()}
                </p>
                <p className="text-gray-400 text-sm">
                  {format(order.date, 'MMM d, yyyy')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}