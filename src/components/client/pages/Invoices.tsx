import React, { useState } from 'react';
import { Card, Title, Text, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody, Badge, Grid, Flex } from '@tremor/react';
import { Download, Search, Filter, Eye, FileText, CreditCard, X, Users, Calendar, CalendarClock, Building, Receipt, CheckCircle } from 'lucide-react';

// Enhanced sample invoices data with details for the modal
const invoices = [
  { 
    id: 'INV-1001', 
    date: '2023-01-20', 
    dueDate: '2023-02-19',
    amount: '$3,000.00', 
    status: 'Paid',
    orderRef: 'ORD-1001',
    paymentMethod: 'Credit Card',
    details: {
      billingAddress: {
        company: 'TechCorp International',
        contact: 'James Wilson',
        address: '100 Technology Plaza, Suite 500',
        city: 'San Francisco, CA 94103',
        country: 'United States',
        email: 'james@techcorp.com',
        phone: '+1 (555) 987-6543'
      },
      items: [
        {
          description: 'Corporate Polos',
          quantity: 200,
          unitPrice: '$15.00',
          amount: '$3,000.00'
        }
      ],
      subtotal: '$3,000.00',
      tax: '$0.00',
      discount: '$0.00',
      total: '$3,000.00',
      notes: 'Payment received on 2023-01-20 via Credit Card ending in 4567.',
      paidDate: '2023-01-20'
    }
  },
  { 
    id: 'INV-0985', 
    date: '2022-12-15', 
    dueDate: '2023-01-14',
    amount: '$4,250.00', 
    status: 'Paid',
    orderRef: 'ORD-0985',
    paymentMethod: 'Bank Transfer',
    details: {
      billingAddress: {
        company: 'Global Tech Conference',
        contact: 'Sarah Miller',
        address: '200 Convention Center Way',
        city: 'Las Vegas, NV 89109',
        country: 'United States',
        email: 'sarah@gtconf.org',
        phone: '+1 (555) 123-7890'
      },
      items: [
        {
          description: 'Event T-shirts',
          quantity: 500,
          unitPrice: '$8.50',
          amount: '$4,250.00'
        }
      ],
      subtotal: '$4,250.00',
      tax: '$0.00',
      discount: '$0.00',
      total: '$4,250.00',
      notes: 'Payment received on 2022-12-20 via Bank Transfer ref #BT89012345.',
      paidDate: '2022-12-20'
    }
  },
  { 
    id: 'INV-1234', 
    date: '2023-03-18', 
    dueDate: '2023-04-17',
    amount: '$1,875.00', 
    status: 'Pending',
    orderRef: 'ORD-1234',
    paymentMethod: 'Credit Card',
    details: {
      billingAddress: {
        company: 'Acme Corporation',
        contact: 'John Smith',
        address: '123 Business Ave, Suite 500',
        city: 'New York, NY 10001',
        country: 'United States',
        email: 'john.smith@acmecorp.com',
        phone: '+1 (555) 123-4567'
      },
      items: [
        {
          description: 'Custom T-shirts',
          quantity: 150,
          unitPrice: '$12.50',
          amount: '$1,875.00'
        }
      ],
      subtotal: '$1,875.00',
      tax: '$0.00',
      discount: '$0.00',
      total: '$1,875.00',
      notes: 'Payment due by April 17, 2023.',
      paidDate: ''
    }
  },
  { 
    id: 'INV-1235', 
    date: '2023-03-12', 
    dueDate: '2023-04-11',
    amount: '$1,125.00', 
    status: 'Pending',
    orderRef: 'ORD-1235',
    paymentMethod: 'Credit Card',
    details: {
      billingAddress: {
        company: 'TechStart Inc.',
        contact: 'Sarah Johnson',
        address: '456 Innovation Blvd',
        city: 'San Francisco, CA 94107',
        country: 'United States',
        email: 'sarah@techstart.io',
        phone: '+1 (555) 987-6543'
      },
      items: [
        {
          description: 'Premium Polo Shirts',
          quantity: 75,
          unitPrice: '$15.00',
          amount: '$1,125.00'
        }
      ],
      subtotal: '$1,125.00',
      tax: '$0.00',
      discount: '$0.00',
      total: '$1,125.00',
      notes: 'Payment due by April 11, 2023.',
      paidDate: ''
    }
  },
  { 
    id: 'INV-0967', 
    date: '2022-11-25', 
    dueDate: '2022-12-25',
    amount: '$1,800.00', 
    status: 'Paid',
    orderRef: 'ORD-0967',
    paymentMethod: 'Bank Transfer',
    details: {
      billingAddress: {
        company: 'Riverside Hotel Group',
        contact: 'Michael Johnson',
        address: '300 Waterfront Drive',
        city: 'Miami, FL 33101',
        country: 'United States',
        email: 'michael@riversidehotels.com',
        phone: '+1 (555) 789-4561'
      },
      items: [
        {
          description: 'Staff Polo Shirts',
          quantity: 75,
          unitPrice: '$12.00',
          amount: '$900.00'
        },
        {
          description: 'Manager Blazers',
          quantity: 25,
          unitPrice: '$36.00',
          amount: '$900.00'
        }
      ],
      subtotal: '$1,800.00',
      tax: '$0.00',
      discount: '$0.00',
      total: '$1,800.00',
      notes: 'Payment received on 2022-12-20 via Bank Transfer ref #BT78901234.',
      paidDate: '2022-12-20'
    }
  },
];

export default function Invoices() {
  const [selectedInvoice, setSelectedInvoice] = useState<typeof invoices[0] | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const openInvoiceDetails = (invoice: typeof invoices[0]) => {
    setSelectedInvoice(invoice);
    setShowDetailsModal(true);
  };

  const closeModal = () => {
    setShowDetailsModal(false);
  };

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
                        onClick={() => openInvoiceDetails(invoice)}
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

      {/* Invoice Details Modal */}
      {showDetailsModal && selectedInvoice && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-gray-800 rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="border-b border-gray-800 p-4 flex justify-between items-center sticky top-0 bg-black">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Receipt className="text-blue-500 h-6 w-6" />
                </div>
                <div>
                  <Text className="text-gray-400 text-sm">Invoice Details</Text>
                  <Title className="text-white">{selectedInvoice.id}</Title>
                </div>
              </div>
              <button 
                onClick={closeModal} 
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Invoice Header */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Title className="text-white text-2xl mb-2">INVOICE</Title>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-gray-400 h-4 w-4" />
                      <Text className="text-gray-400">Date: <span className="text-white">{selectedInvoice.date}</span></Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarClock className="text-gray-400 h-4 w-4" />
                      <Text className="text-gray-400">Due Date: <span className="text-white">{selectedInvoice.dueDate}</span></Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="text-gray-400 h-4 w-4" />
                      <Text className="text-gray-400">Order Reference: <span className="text-white">{selectedInvoice.orderRef}</span></Text>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end justify-center">
                  <div className="mb-4">
                    <Badge
                      size="lg"
                      color={selectedInvoice.status === 'Paid' ? 'green' : 'amber'}
                      className={`${
                        selectedInvoice.status === 'Paid' 
                          ? 'bg-green-500/20 text-green-500 text-base px-6 py-1' 
                          : 'bg-amber-500/20 text-amber-500 text-base px-6 py-1'
                      }`}
                    >
                      {selectedInvoice.status}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-right">
                    <Text className="text-gray-400">Payment Method</Text>
                    <Text className="text-white">{selectedInvoice.paymentMethod}</Text>
                  </div>
                </div>
              </div>
              
              {/* Billing Information */}
              <Card className="bg-black border border-gray-800 rounded-xl p-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="text-gray-400 h-5 w-5" />
                      <Title className="text-white text-base">From</Title>
                    </div>
                    <div className="space-y-1">
                      <Text className="text-white font-medium">PrintFlow B2B</Text>
                      <Text className="text-gray-400">123 Print Avenue</Text>
                      <Text className="text-gray-400">Suite 500</Text>
                      <Text className="text-gray-400">Chicago, IL 60601</Text>
                      <Text className="text-gray-400">United States</Text>
                      <Text className="text-gray-400 mt-2">billing@printflow.com</Text>
                      <Text className="text-gray-400">+1 (555) 123-4567</Text>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="text-gray-400 h-5 w-5" />
                      <Title className="text-white text-base">Bill To</Title>
                    </div>
                    <div className="space-y-1">
                      <Text className="text-white font-medium">{selectedInvoice.details.billingAddress.company}</Text>
                      <Text className="text-gray-400">Attn: {selectedInvoice.details.billingAddress.contact}</Text>
                      <Text className="text-gray-400">{selectedInvoice.details.billingAddress.address}</Text>
                      <Text className="text-gray-400">{selectedInvoice.details.billingAddress.city}</Text>
                      <Text className="text-gray-400">{selectedInvoice.details.billingAddress.country}</Text>
                      <Text className="text-gray-400 mt-2">{selectedInvoice.details.billingAddress.email}</Text>
                      <Text className="text-gray-400">{selectedInvoice.details.billingAddress.phone}</Text>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Invoice Items */}
              <Card className="bg-black border border-gray-800 rounded-xl p-4">
                <Title className="text-white text-lg mb-4">Invoice Items</Title>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHead>
                      <TableRow className="border-b border-gray-800">
                        <TableHeaderCell className="text-gray-400">Description</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400 text-right">Quantity</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400 text-right">Unit Price</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400 text-right">Amount</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedInvoice.details.items.map((item, i) => (
                        <TableRow key={i} className="border-b border-gray-800">
                          <TableCell className="text-white">{item.description}</TableCell>
                          <TableCell className="text-white text-right">{item.quantity}</TableCell>
                          <TableCell className="text-white text-right">{item.unitPrice}</TableCell>
                          <TableCell className="text-white text-right">{item.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                {/* Invoice Totals */}
                <div className="mt-6 flex justify-end">
                  <div className="w-full md:w-64 space-y-2">
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <Text className="text-gray-400">Subtotal</Text>
                      <Text className="text-white">{selectedInvoice.details.subtotal}</Text>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <Text className="text-gray-400">Tax</Text>
                      <Text className="text-white">{selectedInvoice.details.tax}</Text>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <Text className="text-gray-400">Discount</Text>
                      <Text className="text-white">{selectedInvoice.details.discount}</Text>
                    </div>
                    <div className="flex justify-between pt-2">
                      <Text className="text-white font-medium">Total</Text>
                      <Text className="text-white font-bold text-lg">{selectedInvoice.details.total}</Text>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Notes & Payment Status */}
              <Card className="bg-black border border-gray-800 rounded-xl p-4">
                <Title className="text-white text-lg mb-2">Notes</Title>
                <Text className="text-gray-400">{selectedInvoice.details.notes}</Text>
                
                {selectedInvoice.status === 'Paid' && (
                  <div className="mt-4 border-t border-gray-800 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-full bg-green-500/20">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <Text className="text-green-500">
                        Payment received on {selectedInvoice.details.paidDate}
                      </Text>
                    </div>
                  </div>
                )}
              </Card>
              
              <Flex justifyContent="end" className="gap-3">
                <button 
                  onClick={closeModal}
                  className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all"
                >
                  Close
                </button>
                <button 
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all flex items-center gap-2"
                >
                  <Download size={18} />
                  Download PDF
                </button>
              </Flex>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 