import React from 'react';
import { Card, Title, Text, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody, Badge } from '@tremor/react';
import { Package, Truck, CheckCircle } from 'lucide-react';

// Sample data for orders
const orders = [
  { 
    id: 'ORD-1234', 
    date: '2023-03-15', 
    items: 'Custom T-shirts (150)', 
    total: '$1,875.00', 
    status: 'In Production',
    statusColor: 'blue'
  },
  { 
    id: 'ORD-1235', 
    date: '2023-03-10', 
    items: 'Polo Shirts with Logo (75)', 
    total: '$1,125.00', 
    status: 'Shipped',
    statusColor: 'amber' 
  },
  { 
    id: 'ORD-1236', 
    date: '2023-03-05', 
    items: 'Hoodies with Embroidery (50)', 
    total: '$1,250.00', 
    status: 'Delivered',
    statusColor: 'green' 
  },
  { 
    id: 'ORD-1237', 
    date: '2023-02-28', 
    items: 'Baseball Caps (100)', 
    total: '$800.00', 
    status: 'Delivered',
    statusColor: 'green' 
  },
];

export default function Orders() {
  return (
    <div className="space-y-6">
      <div>
        <Title className="text-white text-2xl">My Orders</Title>
        <Text className="text-gray-400">Track and manage your current orders</Text>
      </div>

      <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow className="border-b border-gray-800">
                <TableHeaderCell className="text-gray-400">Order ID</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Date</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Items</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Total</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Status</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="border-b border-gray-800">
                  <TableCell className="text-white font-medium">{order.id}</TableCell>
                  <TableCell className="text-white">{order.date}</TableCell>
                  <TableCell className="text-white">{order.items}</TableCell>
                  <TableCell className="text-white">{order.total}</TableCell>
                  <TableCell>
                    <Badge
                      color={order.statusColor as 'green' | 'amber' | 'blue'}
                      className={`bg-opacity-10 ${
                        order.status === 'In Production'
                          ? 'bg-blue-500/20 text-blue-500'
                          : order.status === 'Shipped'
                          ? 'bg-amber-500/20 text-amber-500' 
                          : 'bg-green-500/20 text-green-500'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        {order.status === 'In Production' && <Package size={14} />}
                        {order.status === 'Shipped' && <Truck size={14} />}
                        {order.status === 'Delivered' && <CheckCircle size={14} />}
                        <span>{order.status}</span>
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <button className="text-green-500 hover:text-green-400 transition-colors">
                        View
                      </button>
                      <button className="text-blue-500 hover:text-blue-400 transition-colors">
                        Track
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
} 