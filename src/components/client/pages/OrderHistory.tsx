import React, { useState } from 'react';
import { Card, Title, Text, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody, Badge, Grid, Flex, Select, SelectItem, DateRangePicker, DateRangePickerValue } from '@tremor/react';
import { Download, Search } from 'lucide-react';

// Sample data for order history
const orderHistory = [
  { 
    id: 'ORD-1001', 
    date: '2023-01-15', 
    items: 'Corporate Polos (200)', 
    total: '$3,000.00', 
    status: 'Completed',
    invoice: 'INV-1001'
  },
  { 
    id: 'ORD-0985', 
    date: '2022-12-10', 
    items: 'Event T-shirts (500)', 
    total: '$4,250.00', 
    status: 'Completed',
    invoice: 'INV-0985'
  },
  { 
    id: 'ORD-0967', 
    date: '2022-11-22', 
    items: 'Staff Uniforms (100)', 
    total: '$1,800.00', 
    status: 'Completed',
    invoice: 'INV-0967'
  },
  { 
    id: 'ORD-0940', 
    date: '2022-10-05', 
    items: 'Conference Merch Bundle (300)', 
    total: '$5,400.00', 
    status: 'Completed',
    invoice: 'INV-0940'
  },
  { 
    id: 'ORD-0912', 
    date: '2022-09-18', 
    items: 'Embroidered Jackets (75)', 
    total: '$3,375.00', 
    status: 'Completed',
    invoice: 'INV-0912'
  },
];

export default function OrderHistory() {
  const [dateRange, setDateRange] = useState<DateRangePickerValue>({
    from: undefined,
    to: undefined,
  });

  return (
    <div className="space-y-6">
      <div>
        <Title className="text-white text-2xl">Order History</Title>
        <Text className="text-gray-400">View and manage your past orders</Text>
      </div>

      {/* Filters */}
      <Grid numItems={1} numItemsMd={3} className="gap-4">
        <Card className="bg-black border border-gray-800 rounded-xl">
          <Text className="text-gray-400 mb-2">Search Orders</Text>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by order ID or item name"
              className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-green-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
        </Card>
        
        <Card className="bg-black border border-gray-800 rounded-xl">
          <Text className="text-gray-400 mb-2">Date Range</Text>
          <DateRangePicker
            value={dateRange}
            onValueChange={setDateRange}
            className="max-w-md mx-auto"
          />
        </Card>
        
        <Card className="bg-black border border-gray-800 rounded-xl">
          <Text className="text-gray-400 mb-2">Export</Text>
          <Flex>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2 transition-all">
              <Download size={18} />
              Export to CSV
            </button>
          </Flex>
        </Card>
      </Grid>

      {/* Order History Table */}
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
                <TableHeaderCell className="text-gray-400">Invoice</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderHistory.map((order) => (
                <TableRow key={order.id} className="border-b border-gray-800">
                  <TableCell className="text-white font-medium">{order.id}</TableCell>
                  <TableCell className="text-white">{order.date}</TableCell>
                  <TableCell className="text-white">{order.items}</TableCell>
                  <TableCell className="text-white">{order.total}</TableCell>
                  <TableCell>
                    <Badge color="green" className="bg-green-500/20 text-green-500">
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-white">{order.invoice}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <button className="text-green-500 hover:text-green-400 transition-colors">
                        View
                      </button>
                      <button className="text-blue-500 hover:text-blue-400 transition-colors">
                        Reorder
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