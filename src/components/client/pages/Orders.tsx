import React, { useState } from 'react';
import { Card, Title, Text, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody, Badge, Grid, Flex } from '@tremor/react';
import { Package, Truck, CheckCircle, X, MapPin, Phone, Mail, CreditCard, Box, ExternalLink, Copy, Calendar, ShoppingBag, Building, User, CalendarCheck } from 'lucide-react';

// Enhanced sample data for orders with more details
const orders = [
  { 
    id: 'ORD-1234', 
    date: '2023-03-15', 
    items: 'Custom T-shirts (150)', 
    total: '$1,875.00', 
    status: 'In Production',
    statusColor: 'blue',
    orderDetails: {
      customer: {
        name: 'Acme Corporation',
        contactName: 'John Smith',
        email: 'john.smith@acmecorp.com',
        phone: '+1 (555) 123-4567',
        address: '123 Business Ave, Suite 500, New York, NY 10001'
      },
      products: [
        {
          name: 'Custom T-shirts',
          quantity: 150,
          color: 'Black',
          sizes: 'S (30), M (50), L (40), XL (30)',
          price: '$12.50/unit',
          customization: 'Front logo print, back text'
        }
      ],
      payment: {
        method: 'Credit Card',
        status: 'Paid',
        date: '2023-03-15'
      },
      shipping: {
        method: 'Standard Business Delivery',
        estimatedDelivery: '2023-04-05'
      },
      notes: 'Please ensure all shirts have the same color logo placement.'
    }
  },
  { 
    id: 'ORD-1235', 
    date: '2023-03-10', 
    items: 'Polo Shirts with Logo (75)', 
    total: '$1,125.00', 
    status: 'Shipped',
    statusColor: 'amber',
    orderDetails: {
      customer: {
        name: 'TechStart Inc.',
        contactName: 'Sarah Johnson',
        email: 'sarah@techstart.io',
        phone: '+1 (555) 987-6543',
        address: '456 Innovation Blvd, San Francisco, CA 94107'
      },
      products: [
        {
          name: 'Premium Polo Shirts',
          quantity: 75,
          color: 'Navy Blue',
          sizes: 'M (25), L (30), XL (20)',
          price: '$15.00/unit',
          customization: 'Embroidered logo on left chest'
        }
      ],
      payment: {
        method: 'Company Account',
        status: 'Paid',
        date: '2023-03-10'
      },
      shipping: {
        method: 'Express Business Delivery',
        estimatedDelivery: '2023-03-20'
      },
      tracking: {
        number: 'UPS1234567890',
        carrier: 'UPS',
        url: 'https://www.ups.com/track',
        lastUpdate: '2023-03-17: Package in transit',
        instructions: 'Visit the UPS website and enter your tracking number to get the latest delivery status updates.'
      }
    }
  },
  { 
    id: 'ORD-1236', 
    date: '2023-03-05', 
    items: 'Hoodies with Embroidery (50)', 
    total: '$1,250.00', 
    status: 'Delivered',
    statusColor: 'green',
    orderDetails: {
      customer: {
        name: 'Summit Events LLC',
        contactName: 'Michael Brown',
        email: 'michael@summitevents.com',
        phone: '+1 (555) 234-5678',
        address: '789 Conference Center Road, Chicago, IL 60607'
      },
      products: [
        {
          name: 'Premium Hoodies',
          quantity: 50,
          color: 'Charcoal Gray',
          sizes: 'M (15), L (20), XL (15)',
          price: '$25.00/unit',
          customization: 'Embroidered logo on left chest, event name on back'
        }
      ],
      payment: {
        method: 'Bank Transfer',
        status: 'Paid',
        date: '2023-03-05'
      },
      shipping: {
        method: 'Standard Business Delivery',
        estimatedDelivery: '2023-03-15',
        deliveredDate: '2023-03-14'
      },
      tracking: {
        number: 'FEDEX9876543210',
        carrier: 'FedEx',
        url: 'https://www.fedex.com/en-us/tracking.html',
        lastUpdate: '2023-03-14: Package delivered',
        instructions: 'Visit the FedEx website and enter your tracking number in the tracking section to view delivery confirmation details.'
      }
    }
  },
  { 
    id: 'ORD-1237', 
    date: '2023-02-28', 
    items: 'Baseball Caps (100)', 
    total: '$800.00', 
    status: 'Delivered',
    statusColor: 'green',
    orderDetails: {
      customer: {
        name: 'City Sports League',
        contactName: 'Jennifer Wilson',
        email: 'jennifer@citysports.org',
        phone: '+1 (555) 765-4321',
        address: '321 Athletic Drive, Boston, MA 02108'
      },
      products: [
        {
          name: 'Adjustable Baseball Caps',
          quantity: 100,
          color: 'Red & Blue (50 each)',
          sizes: 'One Size Fits All',
          price: '$8.00/unit',
          customization: 'Embroidered team logo on front, season year on side'
        }
      ],
      payment: {
        method: 'Credit Card',
        status: 'Paid',
        date: '2023-02-28'
      },
      shipping: {
        method: 'Standard Business Delivery',
        estimatedDelivery: '2023-03-10',
        deliveredDate: '2023-03-08'
      },
      tracking: {
        number: 'DHL8765432109',
        carrier: 'DHL',
        url: 'https://www.dhl.com/us-en/home/tracking.html',
        lastUpdate: '2023-03-08: Package delivered',
        instructions: 'Go to the DHL tracking page and enter your tracking number to confirm delivery details and signature confirmation.'
      }
    }
  },
];

export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showTrackingModal, setShowTrackingModal] = useState(false);

  const openOrderDetails = (order: typeof orders[0]) => {
    setSelectedOrder(order);
    setShowDetailsModal(true);
  };

  const openTrackingDetails = (order: typeof orders[0]) => {
    setSelectedOrder(order);
    setShowTrackingModal(true);
  };

  const closeModals = () => {
    setShowDetailsModal(false);
    setShowTrackingModal(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

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
                      <button 
                        className="text-green-500 hover:text-green-400 transition-colors"
                        onClick={() => openOrderDetails(order)}
                      >
                        View
                      </button>
                      {(order.status === 'Shipped' || order.status === 'Delivered') && (
                        <button 
                          className="text-blue-500 hover:text-blue-400 transition-colors"
                          onClick={() => openTrackingDetails(order)}
                        >
                          Track
                        </button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Order Details Modal */}
      {showDetailsModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-green-500/40 via-green-500/30 to-green-500/40 -z-10"></div>
            
            <div className="border-b border-gray-800/60 p-4 flex justify-between items-center sticky top-0 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm z-10 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
                  <ShoppingBag className="text-green-400 h-6 w-6 drop-shadow-md" />
                </div>
                <div>
                  <Text className="text-gray-400 text-sm">Order Details</Text>
                  <Title className="text-white text-xl drop-shadow-md">{selectedOrder.id}</Title>
                </div>
              </div>
              <button 
                onClick={closeModals} 
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8 space-y-8">
              {/* Order Summary */}
              <Card className="bg-black/60 border border-gray-800/60 rounded-xl p-5 shadow-lg transform transition-all hover:scale-[1.01] hover:shadow-green-900/20 hover:border-green-500/30">
                <div className="flex md:flex-row flex-col justify-between md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <Text className="text-gray-400">Date</Text>
                      <Text className="text-white font-medium">{selectedOrder.date}</Text>
                    </div>
                    <div className="flex flex-col">
                      <Text className="text-gray-400">Amount</Text>
                      <Text className="text-white font-medium">{selectedOrder.total}</Text>
                    </div>
                  </div>
                  <Badge
                    size="lg"
                    color={selectedOrder.statusColor as 'green' | 'amber' | 'blue'}
                    className={`${
                      selectedOrder.statusColor === 'blue' 
                      ? 'bg-gradient-to-r from-green-500/30 to-green-600/30 text-green-400 border-green-500/20'
                      : selectedOrder.statusColor === 'amber'
                      ? 'bg-gradient-to-r from-amber-500/30 to-amber-600/30 text-amber-400 border-amber-500/20'
                      : 'bg-gradient-to-r from-green-500/30 to-green-600/30 text-green-400 border-green-500/20'
                    } text-base px-6 py-1.5 shadow-md border`}
                  >
                    {selectedOrder.status}
                  </Badge>
                </div>
              </Card>
              
              {/* Customer Information */}
              <Card className="bg-black/60 border border-gray-800/60 rounded-xl p-5 shadow-lg transform transition-all hover:scale-[1.01] hover:shadow-green-900/20 hover:border-green-500/30">
                <Title className="text-green-400 text-lg mb-4 inline-flex items-center">
                  Customer Information
                </Title>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10 text-green-400 mt-0.5">
                        <Building size={16} />
                      </div>
                      <div>
                        <Text className="text-gray-400">Company</Text>
                        <Text className="text-white font-medium">{selectedOrder.orderDetails.customer.name}</Text>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10 text-green-400">
                        <User size={16} />
                      </div>
                      <div>
                        <Text className="text-gray-400">Contact</Text>
                        <Text className="text-white font-medium">{selectedOrder.orderDetails.customer.contactName}</Text>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10 text-green-400">
                        <Mail size={16} />
                      </div>
                      <div>
                        <Text className="text-gray-400">Email</Text>
                        <Text className="text-white font-medium">{selectedOrder.orderDetails.customer.email}</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Payment & Delivery */}
              <Card className="bg-black/60 border border-gray-800/60 rounded-xl p-5 shadow-lg transform transition-all hover:scale-[1.01] hover:shadow-green-900/20 hover:border-green-500/30">
                <Title className="text-green-400 text-lg mb-4 inline-flex items-center">
                  Payment & Delivery
                </Title>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10 text-green-400 mt-0.5">
                        <CreditCard size={16} />
                      </div>
                      <div>
                        <Text className="text-gray-400">Payment Method</Text>
                        <Text className="text-white font-medium">{selectedOrder.orderDetails.payment.method}</Text>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10 text-green-400 mt-0.5">
                        <Calendar size={16} />
                      </div>
                      <div>
                        <Text className="text-gray-400">Payment Date</Text>
                        <Text className="text-white font-medium">{selectedOrder.orderDetails.payment.date}</Text>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10 text-green-400 mt-0.5">
                        <Truck size={16} />
                      </div>
                      <div>
                        <Text className="text-gray-400">Shipping Method</Text>
                        <Text className="text-white font-medium">{selectedOrder.orderDetails.shipping.method}</Text>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10 text-green-400 mt-0.5">
                        <CalendarCheck size={16} />
                      </div>
                      <div>
                        <Text className="text-gray-400">Expected Delivery</Text>
                        <Text className="text-white font-medium">{selectedOrder.orderDetails.shipping.estimatedDelivery}</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Products */}
              <Card className="bg-black/60 border border-gray-800/60 rounded-xl p-5 shadow-lg transform transition-all hover:scale-[1.01] hover:shadow-green-900/20 hover:border-green-500/30">
                <Title className="text-green-400 text-lg mb-4 inline-flex items-center">
                  Products
                </Title>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHead>
                      <TableRow className="border-b border-gray-800/60">
                        <TableHeaderCell className="text-gray-400">Product</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400">Quantity</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400">Color</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400">Sizes</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400">Customization</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400">Price</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedOrder.orderDetails.products.map((product, index) => (
                        <TableRow key={index} className="border-b border-gray-800/60">
                          <TableCell className="text-white font-medium">{product.name}</TableCell>
                          <TableCell className="text-white">{product.quantity}</TableCell>
                          <TableCell className="text-white">{product.color}</TableCell>
                          <TableCell className="text-white">{product.sizes}</TableCell>
                          <TableCell className="text-white">{product.customization}</TableCell>
                          <TableCell className="text-white">{product.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
              
              <Flex justifyContent="end">
                <button 
                  onClick={closeModals}
                  className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-gray-900/30"
                >
                  Close
                </button>
              </Flex>
            </div>
          </div>
        </div>
      )}
      
      {/* Tracking Information Modal */}
      {showTrackingModal && selectedOrder && selectedOrder.orderDetails.tracking && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-2xl shadow-2xl w-full max-w-lg relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-green-500/40 via-green-500/30 to-green-500/40 -z-10"></div>
            
            <div className="border-b border-gray-800/60 p-4 flex justify-between items-center bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
                  <Truck className="text-green-400 h-6 w-6 drop-shadow-md" />
                </div>
                <div>
                  <Text className="text-gray-400 text-sm">Tracking Information</Text>
                  <Title className="text-white text-xl drop-shadow-md">{selectedOrder.id}</Title>
                </div>
              </div>
              <button 
                onClick={closeModals} 
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <Card className="bg-black/60 border border-gray-800/60 rounded-xl p-5 shadow-lg transform transition-all hover:scale-[1.01] hover:shadow-green-900/20 hover:border-green-500/30">
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    size="lg"
                    color={selectedOrder.statusColor as 'green' | 'amber' | 'blue'}
                    className="bg-gradient-to-r from-green-500/30 to-green-600/30 text-green-400 text-sm px-4 py-1 shadow-md border border-green-500/20"
                  >
                    {selectedOrder.status}
                  </Badge>
                  <Text className="text-white font-medium">{selectedOrder.orderDetails.tracking.carrier}</Text>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Text className="text-gray-400">Tracking Number</Text>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="bg-gray-900/80 px-3 py-1.5 rounded-lg text-white shadow-inner border border-gray-800/60">{selectedOrder.orderDetails.tracking?.number}</code>
                      <button 
                        onClick={() => selectedOrder.orderDetails.tracking?.number && copyToClipboard(selectedOrder.orderDetails.tracking.number)}
                        className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all"
                        title="Copy to clipboard"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <Text className="text-gray-400">Last Update</Text>
                    <Text className="text-white mt-1 bg-gray-900/40 px-3 py-2 rounded-lg">{selectedOrder.orderDetails.tracking?.lastUpdate}</Text>
                  </div>
                  
                  <div className="pt-2">
                    <Text className="text-gray-400">Tracking Instructions</Text>
                    <Text className="text-white mt-1 bg-gray-900/40 px-3 py-2 rounded-lg">{selectedOrder.orderDetails.tracking?.instructions}</Text>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black/60 border border-green-800/30 rounded-xl shadow-lg transform transition-all hover:scale-[1.01] hover:shadow-green-900/20 hover:border-green-500/40">
                <a 
                  href={selectedOrder.orderDetails.tracking?.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-green-400 hover:text-green-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Track on {selectedOrder.orderDetails.tracking?.carrier} Website</span>
                </a>
              </Card>
              
              <Flex justifyContent="end">
                <button 
                  onClick={closeModals}
                  className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-gray-900/30"
                >
                  Close
                </button>
              </Flex>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 