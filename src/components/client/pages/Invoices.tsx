import React from 'react';
import { Card, Title, Text, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody, Badge, Grid, Flex } from '@tremor/react';
import { Download, Search, Filter, Eye, FileText, CreditCard } from 'lucide-react';

// Sample invoices data
const invoices = [
  { 
    id: 'INV-1001', 
    date: '2023-01-20', 
    dueDate: '2023-02-19',
    amount: '$3,000.00', 
    status: 'Paid',
    orderRef: 'ORD-1001',
    paymentMethod: 'Credit Card'
  },
  { 
    id: 'INV-0985', 
    date: '2022-12-15', 
    dueDate: '2023-01-14',
    amount: '$4,250.00', 
    status: 'Paid',
    orderRef: 'ORD-0985',
    paymentMethod: 'Bank Transfer'
  },
  { 
    id: 'INV-1234', 
    date: '2023-03-18', 
    dueDate: '2023-04-17',
    amount: '$1,875.00', 
    status: 'Pending',
    orderRef: 'ORD-1234',
    paymentMethod: 'Credit Card'
  },
  { 
    id: 'INV-1235', 
    date: '2023-03-12', 
    dueDate: '2023-04-11',
    amount: '$1,125.00', 
    status: 'Pending',
    orderRef: 'ORD-1235',
    paymentMethod: 'Credit Card'
  },
  { 
    id: 'INV-0967', 
    date: '2022-11-25', 
    dueDate: '2022-12-25',
    amount: '$1,800.00', 
    status: 'Paid',
    orderRef: 'ORD-0967',
    paymentMethod: 'Bank Transfer'
  },
];

export default function Invoices() {
  return (
    <div className="space-y-6">
      <div>
        <Title className="text-white text-2xl">Invoices</Title>
        <Text className="text-gray-400">View and manage your billing information</Text>
      </div>

      {/* Invoice Stats */}
      <Grid numItems={1} numItemsMd={3} className="gap-4">
        <Card className="bg-black border border-gray-800 rounded-xl">
          <Flex alignItems="center" justifyContent="start" className="space-x-4">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <FileText className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <Text className="text-gray-400">Total Invoices</Text>
              <Title className="text-white">15</Title>
            </div>
          </Flex>
        </Card>
        
        <Card className="bg-black border border-gray-800 rounded-xl">
          <Flex alignItems="center" justifyContent="start" className="space-x-4">
            <div className="p-3 bg-amber-500/10 rounded-lg">
              <CreditCard className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <Text className="text-gray-400">Pending Payments</Text>
              <Title className="text-white">$3,000.00</Title>
            </div>
          </Flex>
        </Card>
        
        <Card className="bg-black border border-gray-800 rounded-xl">
          <Flex alignItems="center" justifyContent="start" className="space-x-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Download className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <Text className="text-gray-400">Download All</Text>
              <button className="text-blue-500 text-sm mt-1 hover:underline">Export as ZIP</button>
            </div>
          </Flex>
        </Card>
      </Grid>

      {/* Invoice Filters */}
      <Card className="bg-black border border-gray-800 rounded-xl p-4">
        <Flex>
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search invoices..."
              className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-green-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all">
            <Filter size={18} />
            Filter
          </button>
        </Flex>
      </Card>

      {/* Invoices Table */}
      <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow className="border-b border-gray-800">
                <TableHeaderCell className="text-gray-400">Invoice ID</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Date</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Due Date</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Amount</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Status</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Order Ref.</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Payment Method</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id} className="border-b border-gray-800">
                  <TableCell className="text-white font-medium">{invoice.id}</TableCell>
                  <TableCell className="text-white">{invoice.date}</TableCell>
                  <TableCell className="text-white">{invoice.dueDate}</TableCell>
                  <TableCell className="text-white">{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge
                      color={invoice.status === 'Paid' ? 'green' : 'amber'}
                      className={`${
                        invoice.status === 'Paid' 
                          ? 'bg-green-500/20 text-green-500' 
                          : 'bg-amber-500/20 text-amber-500'
                      }`}
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-white">{invoice.orderRef}</TableCell>
                  <TableCell className="text-white">{invoice.paymentMethod}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <button 
                        className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1"
                        title="View Invoice"
                      >
                        <Eye size={16} />
                        <span>View</span>
                      </button>
                      <button 
                        className="text-green-500 hover:text-green-400 transition-colors flex items-center gap-1"
                        title="Download Invoice"
                      >
                        <Download size={16} />
                        <span>Download</span>
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