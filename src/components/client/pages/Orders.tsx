import React, { useState } from 'react';
import { Card, Title, Text, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody, Badge, Grid, Flex } from '@tremor/react';
import { Package, Truck, CheckCircle, X, MapPin, Phone, Mail, CreditCard, Box, ExternalLink, Copy, Calendar } from 'lucide-react';

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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-gray-800 rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-black border-b border-gray-800 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Box className="text-green-500 h-6 w-6" />
                </div>
                <div>
                  <Text className="text-gray-400 text-sm">Order Details</Text>
                  <Title className="text-white">{selectedOrder.id}</Title>
                </div>
              </div>
              <button 
                onClick={closeModals} 
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Order Status */}
              <div className="flex items-center gap-4">
                <Badge
                  color={selectedOrder.statusColor as 'green' | 'amber' | 'blue'}
                  className={`px-3 py-1 ${
                    selectedOrder.status === 'In Production'
                      ? 'bg-blue-500/20 text-blue-500'
                      : selectedOrder.status === 'Shipped'
                      ? 'bg-amber-500/20 text-amber-500' 
                      : 'bg-green-500/20 text-green-500'
                  }`}
                  size="lg"
                >
                  <div className="flex items-center gap-2">
                    {selectedOrder.status === 'In Production' && <Package size={16} />}
                    {selectedOrder.status === 'Shipped' && <Truck size={16} />}
                    {selectedOrder.status === 'Delivered' && <CheckCircle size={16} />}
                    <span className="font-medium">{selectedOrder.status}</span>
                  </div>
                </Badge>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span>Ordered on {selectedOrder.date}</span>
                </div>
              </div>
              
              <Grid numItems={1} numItemsMd={2} className="gap-6">
                {/* Customer Information */}
                <Card className="bg-black border border-gray-800 rounded-xl p-4">
                  <Title className="text-white text-lg mb-4">Customer Information</Title>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gray-800 text-gray-400 mt-0.5">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <Text className="text-white font-medium">{selectedOrder.orderDetails.customer.name}</Text>
                        <Text className="text-gray-400">{selectedOrder.orderDetails.customer.contactName}</Text>
                        <Text className="text-gray-400 text-sm mt-1">{selectedOrder.orderDetails.customer.address}</Text>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-800 text-gray-400">
                        <Phone size={16} />
                      </div>
                      <Text className="text-gray-400">{selectedOrder.orderDetails.customer.phone}</Text>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-800 text-gray-400">
                        <Mail size={16} />
                      </div>
                      <Text className="text-gray-400">{selectedOrder.orderDetails.customer.email}</Text>
                    </div>
                  </div>
                </Card>
                
                {/* Payment & Shipping */}
                <Card className="bg-black border border-gray-800 rounded-xl p-4">
                  <Title className="text-white text-lg mb-4">Payment & Delivery</Title>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gray-800 text-gray-400 mt-0.5">
                        <CreditCard size={16} />
                      </div>
                      <div>
                        <Text className="text-white font-medium">Payment</Text>
                        <div className="flex items-center gap-2 mt-1">
                          <Text className="text-gray-400 text-sm">{selectedOrder.orderDetails.payment.method}</Text>
                          <Badge color="green" className="bg-green-500/20 text-green-500">
                            {selectedOrder.orderDetails.payment.status}
                          </Badge>
                        </div>
                        <Text className="text-gray-400 text-sm mt-1">Paid on {selectedOrder.orderDetails.payment.date}</Text>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gray-800 text-gray-400 mt-0.5">
                        <Truck size={16} />
                      </div>
                      <div>
                        <Text className="text-white font-medium">Shipping</Text>
                        <Text className="text-gray-400 text-sm mt-1">{selectedOrder.orderDetails.shipping.method}</Text>
                        {selectedOrder.status === 'Delivered' && selectedOrder.orderDetails.shipping.deliveredDate && (
                          <Text className="text-green-500 text-sm mt-1">Delivered on {selectedOrder.orderDetails.shipping.deliveredDate}</Text>
                        )}
                        {selectedOrder.status !== 'Delivered' && (
                          <Text className="text-gray-400 text-sm mt-1">Estimated delivery: {selectedOrder.orderDetails.shipping.estimatedDelivery}</Text>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </Grid>
              
              {/* Products */}
              <Card className="bg-black border border-gray-800 rounded-xl p-4">
                <Title className="text-white text-lg mb-4">Products</Title>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHead>
                      <TableRow className="border-b border-gray-800">
                        <TableHeaderCell className="text-gray-400">Product</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400">Quantity</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400">Color</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400">Sizes</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400">Customization</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400">Price</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedOrder.orderDetails.products.map((product, i) => (
                        <TableRow key={i} className="border-b border-gray-800">
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
                {selectedOrder.orderDetails.notes && (
                  <div className="mt-4">
                    <Text className="text-white font-medium">Order Notes:</Text>
                    <Text className="text-gray-400 mt-1">{selectedOrder.orderDetails.notes}</Text>
                  </div>
                )}
              </Card>
              
              <Flex justifyContent="end">
                <button 
                  onClick={closeModals}
                  className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all"
                >
                  Close
                </button>
              </Flex>
            </div>
          </div>
        </div>
      )}
      
      {/* Tracking Modal */}
      {showTrackingModal && selectedOrder && selectedOrder.orderDetails.tracking && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-gray-800 rounded-xl shadow-lg w-full max-w-lg">
            <div className="border-b border-gray-800 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Truck className="text-blue-500 h-6 w-6" />
                </div>
                <div>
                  <Text className="text-gray-400 text-sm">Tracking Information</Text>
                  <Title className="text-white">{selectedOrder.id}</Title>
                </div>
              </div>
              <button 
                onClick={closeModals} 
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {selectedOrder.orderDetails.tracking && (
              <div className="p-6 space-y-6">
                <Card className="bg-black border border-gray-800 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Text className="text-gray-400">Carrier</Text>
                      <Title className="text-white text-xl">{selectedOrder.orderDetails.tracking.carrier}</Title>
                    </div>
                    <Badge
                      color={selectedOrder.statusColor as 'green' | 'amber' | 'blue'}
                      className={`${
                        selectedOrder.status === 'Shipped'
                          ? 'bg-amber-500/20 text-amber-500' 
                          : 'bg-green-500/20 text-green-500'
                      }`}
                    >
                      {selectedOrder.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Text className="text-gray-400">Tracking Number</Text>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="bg-gray-900 px-3 py-1 rounded text-white">{selectedOrder.orderDetails.tracking.number}</code>
                        <button 
                          onClick={() => copyToClipboard(selectedOrder.orderDetails.tracking.number)}
                          className="p-1 text-gray-400 hover:text-white transition-colors"
                          title="Copy to clipboard"
                        >
                          <Copy size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <Text className="text-gray-400">Last Update</Text>
                      <Text className="text-white mt-1">{selectedOrder.orderDetails.tracking.lastUpdate}</Text>
                    </div>
                    
                    <div className="pt-2">
                      <Text className="text-gray-400">Tracking Instructions</Text>
                      <Text className="text-white mt-1">{selectedOrder.orderDetails.tracking.instructions}</Text>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-gray-900 border-none">
                  <a 
                    href={selectedOrder.orderDetails.tracking.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Track on {selectedOrder.orderDetails.tracking.carrier} Website</span>
                  </a>
                </Card>
                
                <Flex justifyContent="end">
                  <button 
                    onClick={closeModals}
                    className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all"
                  >
                    Close
                  </button>
                </Flex>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 