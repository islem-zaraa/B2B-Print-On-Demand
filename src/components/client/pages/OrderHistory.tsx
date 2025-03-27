import React, { useState } from 'react';
import { Card, Title, Text, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody, Badge, Grid, Flex, DateRangePickerValue } from '@tremor/react';
import { Download, Search, Calendar, ChevronDown, CalendarRange, X, ShoppingBag, Package, MapPin, Phone, Mail, CreditCard, Copy } from 'lucide-react';

// Enhanced sample data for order history with details for modal view
const orderHistory = [
  { 
    id: 'ORD-1001', 
    date: '2023-01-15', 
    items: 'Corporate Polos (200)', 
    total: '$3,000.00', 
    status: 'Completed',
    invoice: 'INV-1001',
    orderDetails: {
      customer: {
        name: 'TechCorp International',
        contactName: 'James Wilson',
        email: 'james@techcorp.com',
        phone: '+1 (555) 987-6543',
        address: '100 Technology Plaza, Suite 500, San Francisco, CA 94103'
      },
      products: [
        {
          name: 'Corporate Polos',
          quantity: 200,
          color: 'Navy Blue',
          sizes: 'S (40), M (60), L (60), XL (40)',
          price: '$15.00/unit',
          customization: 'Embroidered company logo on left chest'
        }
      ],
      payment: {
        method: 'Corporate Account',
        status: 'Paid',
        date: '2023-01-15'
      },
      shipping: {
        method: 'Standard Business Delivery',
        deliveredDate: '2023-01-25'
      },
      notes: 'Annual company polos for staff members.'
    }
  },
  { 
    id: 'ORD-0985', 
    date: '2022-12-10', 
    items: 'Event T-shirts (500)', 
    total: '$4,250.00', 
    status: 'Completed',
    invoice: 'INV-0985',
    orderDetails: {
      customer: {
        name: 'Global Tech Conference',
        contactName: 'Sarah Miller',
        email: 'sarah@gtconf.org',
        phone: '+1 (555) 123-7890',
        address: '200 Convention Center Way, Las Vegas, NV 89109'
      },
      products: [
        {
          name: 'Event T-shirts',
          quantity: 500,
          color: 'Black',
          sizes: 'S (100), M (150), L (150), XL (100)',
          price: '$8.50/unit',
          customization: 'Full color print with event logo on front, sponsor logos on back'
        }
      ],
      payment: {
        method: 'Credit Card',
        status: 'Paid',
        date: '2022-12-10'
      },
      shipping: {
        method: 'Express Business Delivery',
        deliveredDate: '2022-12-20'
      },
      notes: 'T-shirts needed one week before event start on Dec 27th.'
    }
  },
  { 
    id: 'ORD-0967', 
    date: '2022-11-22', 
    items: 'Staff Uniforms (100)', 
    total: '$1,800.00', 
    status: 'Completed',
    invoice: 'INV-0967',
    orderDetails: {
      customer: {
        name: 'Riverside Hotel Group',
        contactName: 'Michael Johnson',
        email: 'michael@riversidehotels.com',
        phone: '+1 (555) 789-4561',
        address: '300 Waterfront Drive, Miami, FL 33101'
      },
      products: [
        {
          name: 'Staff Polo Shirts',
          quantity: 75,
          color: 'White',
          sizes: 'S (15), M (30), L (20), XL (10)',
          price: '$12.00/unit',
          customization: 'Embroidered hotel logo on left chest'
        },
        {
          name: 'Manager Blazers',
          quantity: 25,
          color: 'Black',
          sizes: 'S (5), M (8), L (7), XL (5)',
          price: '$48.00/unit',
          customization: 'Embroidered hotel logo on breast pocket'
        }
      ],
      payment: {
        method: 'Invoice Net 30',
        status: 'Paid',
        date: '2022-12-20'
      },
      shipping: {
        method: 'Standard Business Delivery',
        deliveredDate: '2022-12-05'
      },
      notes: 'Seasonal staff uniform refresh for winter season.'
    }
  },
  { 
    id: 'ORD-0940', 
    date: '2022-10-05', 
    items: 'Conference Merch Bundle (300)', 
    total: '$5,400.00', 
    status: 'Completed',
    invoice: 'INV-0940',
    orderDetails: {
      customer: {
        name: 'Annual Developer Summit',
        contactName: 'David Chen',
        email: 'david@devsummit.com',
        phone: '+1 (555) 234-5678',
        address: '400 Tech Boulevard, Austin, TX 78701'
      },
      products: [
        {
          name: 'Conference T-shirts',
          quantity: 300,
          color: 'Heather Gray',
          sizes: 'S (60), M (90), L (90), XL (60)',
          price: '$10.00/unit',
          customization: 'Full color print with conference logo'
        },
        {
          name: 'Branded Notebooks',
          quantity: 300,
          color: 'Black',
          sizes: 'One Size',
          price: '$5.00/unit',
          customization: 'Debossed logo on cover'
        },
        {
          name: 'Sticker Packs',
          quantity: 300,
          color: 'Assorted',
          sizes: 'One Size',
          price: '$3.00/unit',
          customization: 'Die-cut logo stickers'
        }
      ],
      payment: {
        method: 'Bank Transfer',
        status: 'Paid',
        date: '2022-10-05'
      },
      shipping: {
        method: 'Express Business Delivery',
        deliveredDate: '2022-10-20'
      },
      notes: 'Complete conference swag bundle for attendee welcome bags.'
    }
  },
  { 
    id: 'ORD-0912', 
    date: '2022-09-18', 
    items: 'Embroidered Jackets (75)', 
    total: '$3,375.00', 
    status: 'Completed',
    invoice: 'INV-0912',
    orderDetails: {
      customer: {
        name: 'Mountain View Sports Club',
        contactName: 'Jennifer Roberts',
        email: 'jennifer@mvsports.org',
        phone: '+1 (555) 345-6789',
        address: '500 Highland Road, Denver, CO 80202'
      },
      products: [
        {
          name: 'Team Jackets',
          quantity: 75,
          color: 'Blue/Gold',
          sizes: 'S (15), M (20), L (25), XL (15)',
          price: '$45.00/unit',
          customization: 'Embroidered team logo on front, player names on back'
        }
      ],
      payment: {
        method: 'Credit Card',
        status: 'Paid',
        date: '2022-09-18'
      },
      shipping: {
        method: 'Standard Business Delivery',
        deliveredDate: '2022-10-03'
      },
      notes: 'Season team jackets for championship squad.'
    }
  }
];

// Predefined date ranges
const datePresets = [
  { label: 'Last 30 days', value: '30days' },
  { label: 'Last 90 days', value: '90days' },
  { label: 'This year', value: 'year' },
  { label: 'All time', value: 'all' }
];

export default function OrderHistory() {
  const [dateRange, setDateRange] = useState<DateRangePickerValue>({
    from: undefined,
    to: undefined,
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<typeof orderHistory[0] | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handlePresetSelect = (preset: string) => {
    const now = new Date();
    let from: Date | undefined;
    
    switch (preset) {
      case '30days':
        from = new Date(now);
        from.setDate(now.getDate() - 30);
        break;
      case '90days':
        from = new Date(now);
        from.setDate(now.getDate() - 90);
        break;
      case 'year':
        from = new Date(now.getFullYear(), 0, 1); // Jan 1 of current year
        break;
      case 'all':
        from = undefined;
        break;
      default:
        from = undefined;
    }
    
    setDateRange({ from, to: preset === 'all' ? undefined : now });
    setSelectedPreset(preset);
    setShowDatePicker(false);
  };

  const handleCustomDateSelect = (value: DateRangePickerValue) => {
    setDateRange(value);
    setSelectedPreset(null);
  };

  const clearDateFilter = () => {
    setDateRange({ from: undefined, to: undefined });
    setSelectedPreset(null);
  };

  const openOrderDetails = (order: typeof orderHistory[0]) => {
    setSelectedOrder(order);
    setShowDetailsModal(true);
  };

  const closeModal = () => {
    setShowDetailsModal(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

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
        
        {/* Enhanced Date Range Filter */}
        <Card className="bg-black border border-gray-800 rounded-xl">
          <Text className="text-gray-400 mb-2">Date Range</Text>
          <div className="relative">
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="w-full bg-gray-900 border border-gray-700 hover:border-green-500 text-white rounded-lg py-2 px-4 flex items-center justify-between transition-colors focus:outline-none focus:border-green-500"
            >
              <div className="flex items-center gap-2">
                <CalendarRange size={18} className="text-green-500" />
                <span>
                  {dateRange.from || dateRange.to ? (
                    <>
                      {formatDate(dateRange.from)} {dateRange.from && dateRange.to && '–'} {formatDate(dateRange.to)}
                    </>
                  ) : (
                    'Select date range'
                  )}
                </span>
              </div>
              <ChevronDown size={18} className={`text-gray-400 transition-transform ${showDatePicker ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Date picker dropdown */}
            {showDatePicker && (
              <div className="absolute z-10 mt-2 w-full bg-black border border-gray-800 rounded-xl shadow-lg overflow-hidden backdrop-blur-xl bg-black/90">
                <div className="p-4 border-b border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <Text className="text-white font-medium">Select Date Range</Text>
                    <button 
                      onClick={() => setShowDatePicker(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  
                  {/* Presets */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {datePresets.map(preset => (
                      <button
                        key={preset.value}
                        onClick={() => handlePresetSelect(preset.value)}
                        className={`py-2 px-3 rounded-lg text-sm transition-all ${
                          selectedPreset === preset.value
                            ? 'bg-green-500 text-black'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                  
                  {/* Custom date selection */}
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <Text className="text-gray-400 text-xs mb-1">Start Date</Text>
                      <input 
                        type="date" 
                        className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                        onChange={(e) => handleCustomDateSelect({ ...dateRange, from: e.target.value ? new Date(e.target.value) : undefined })}
                        value={dateRange.from ? dateRange.from.toISOString().split('T')[0] : ''}
                      />
                    </div>
                    <div className="w-1/2">
                      <Text className="text-gray-400 text-xs mb-1">End Date</Text>
                      <input 
                        type="date" 
                        className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                        onChange={(e) => handleCustomDateSelect({ ...dateRange, to: e.target.value ? new Date(e.target.value) : undefined })}
                        value={dateRange.to ? dateRange.to.toISOString().split('T')[0] : ''}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={clearDateFilter}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Clear filter
                    </button>
                    <button
                      onClick={() => setShowDatePicker(false)}
                      className="bg-green-500 hover:bg-green-600 text-black px-4 py-1.5 rounded-lg text-sm transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
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
                      <button 
                        className="text-green-500 hover:text-green-400 transition-colors"
                        onClick={() => openOrderDetails(order)}
                      >
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

      {/* Order Details Modal */}
      {showDetailsModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-gray-800 rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="border-b border-gray-800 p-4 flex justify-between items-center sticky top-0 bg-black">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Package className="text-green-500 h-6 w-6" />
                </div>
                <div>
                  <Text className="text-gray-400 text-sm">Order Details</Text>
                  <Title className="text-white">{selectedOrder.id}</Title>
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
              {/* Order Summary */}
              <Card className="bg-black border border-gray-800 rounded-xl p-4">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <Text className="text-gray-400">Order Date</Text>
                    <Text className="text-white font-medium">{selectedOrder.date}</Text>
                  </div>
                  <div>
                    <Text className="text-gray-400">Total Amount</Text>
                    <Text className="text-white font-medium">{selectedOrder.total}</Text>
                  </div>
                  <div>
                    <Text className="text-gray-400">Status</Text>
                    <Badge color="green" className="bg-green-500/20 text-green-500">
                      {selectedOrder.status}
                    </Badge>
                  </div>
                  <div>
                    <Text className="text-gray-400">Invoice Number</Text>
                    <Text className="text-white font-medium">{selectedOrder.invoice}</Text>
                  </div>
                </div>
              </Card>
              
              {/* Customer Details */}
              <Card className="bg-black border border-gray-800 rounded-xl p-4">
                <Title className="text-white text-lg mb-4">Customer Information</Title>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                    <div className="flex-1">
                      <Text className="text-gray-400">Company Name</Text>
                      <Title className="text-white text-base">{selectedOrder.orderDetails.customer.name}</Title>
                    </div>
                    <div className="flex-1">
                      <Text className="text-gray-400">Contact Person</Text>
                      <Title className="text-white text-base">{selectedOrder.orderDetails.customer.contactName}</Title>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <Mail className="text-gray-400 h-5 w-5 mt-0.5" />
                      <div>
                        <Text className="text-gray-400">Email</Text>
                        <Text className="text-white">{selectedOrder.orderDetails.customer.email}</Text>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="text-gray-400 h-5 w-5 mt-0.5" />
                      <div>
                        <Text className="text-gray-400">Phone</Text>
                        <Text className="text-white">{selectedOrder.orderDetails.customer.phone}</Text>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="text-gray-400 h-5 w-5 mt-0.5" />
                      <div>
                        <Text className="text-gray-400">Address</Text>
                        <Text className="text-white">{selectedOrder.orderDetails.customer.address}</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Order Items */}
              <Card className="bg-black border border-gray-800 rounded-xl p-4">
                <Title className="text-white text-lg mb-4">Order Items</Title>
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
              
              {/* Payment and Shipping Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-black border border-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-green-500/10">
                      <CreditCard className="text-green-500 h-5 w-5" />
                    </div>
                    <Title className="text-white text-lg">Payment Details</Title>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <Text className="text-gray-400">Payment Method</Text>
                      <Text className="text-white">{selectedOrder.orderDetails.payment.method}</Text>
                    </div>
                    <div>
                      <Text className="text-gray-400">Payment Status</Text>
                      <Badge color="green" className="bg-green-500/20 text-green-500">
                        {selectedOrder.orderDetails.payment.status}
                      </Badge>
                    </div>
                    <div>
                      <Text className="text-gray-400">Payment Date</Text>
                      <Text className="text-white">{selectedOrder.orderDetails.payment.date}</Text>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-black border border-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-blue-500/10">
                      <ShoppingBag className="text-blue-500 h-5 w-5" />
                    </div>
                    <Title className="text-white text-lg">Shipping Details</Title>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <Text className="text-gray-400">Shipping Method</Text>
                      <Text className="text-white">{selectedOrder.orderDetails.shipping.method}</Text>
                    </div>
                    <div>
                      <Text className="text-gray-400">Delivery Date</Text>
                      <Text className="text-white">{selectedOrder.orderDetails.shipping.deliveredDate}</Text>
                    </div>
                  </div>
                </Card>
              </div>
              
              <Flex justifyContent="end">
                <button 
                  onClick={closeModal}
                  className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all"
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