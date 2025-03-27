import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Card, Title, Text, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody, Badge, Grid, Flex, DateRangePicker, DateRangePickerValue, Button, Select, SelectItem } from '@tremor/react';
import { Download, Search, Filter, Eye, FileText, CreditCard, X, Users, Calendar, CalendarClock, Building, Receipt, CheckCircle, ChevronDown, CalendarRange, Clock } from 'lucide-react';

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

// Add predefined date ranges before the component function
// Predefined date ranges
const datePresets = [
  { label: 'Last 30 days', value: '30days' },
  { label: 'Last 90 days', value: '90days' },
  { label: 'This year', value: 'year' },
  { label: 'All time', value: 'all' }
];

export default function Invoices() {
  const [selectedInvoice, setSelectedInvoice] = useState<typeof invoices[0] | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [paymentMethodFilter, setPaymentMethodFilter] = useState<string>('All');
  const [dateRange, setDateRange] = useState<DateRangePickerValue>();
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);
  const [statusDropdownRect, setStatusDropdownRect] = useState<DOMRect | null>(null);
  const [paymentDropdownRect, setPaymentDropdownRect] = useState<DOMRect | null>(null);
  const [dateDropdownRect, setDateDropdownRect] = useState<DOMRect | null>(null);
  const statusButtonRef = useRef<HTMLButtonElement | null>(null);
  const paymentButtonRef = useRef<HTMLButtonElement | null>(null);
  const dateButtonRef = useRef<HTMLButtonElement | null>(null);

  // Apply filters when any filter changes
  useEffect(() => {
    let results = [...invoices];
    
    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(invoice => 
        invoice.id.toLowerCase().includes(query) ||
        invoice.orderRef.toLowerCase().includes(query) ||
        invoice.amount.toLowerCase().includes(query) ||
        invoice.paymentMethod.toLowerCase().includes(query)
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'All') {
      results = results.filter(invoice => invoice.status === statusFilter);
    }
    
    // Apply payment method filter
    if (paymentMethodFilter !== 'All') {
      results = results.filter(invoice => invoice.paymentMethod === paymentMethodFilter);
    }
    
    // Apply date range filter
    if (dateRange?.from && dateRange?.to) {
      const fromDate = new Date(dateRange.from);
      const toDate = new Date(dateRange.to);
      
      results = results.filter(invoice => {
        const invoiceDate = new Date(invoice.date);
        return invoiceDate >= fromDate && invoiceDate <= toDate;
      });
    }
    
    setFilteredInvoices(results);
  }, [searchQuery, statusFilter, paymentMethodFilter, dateRange]);

  const openInvoiceDetails = (invoice: typeof invoices[0]) => {
    setSelectedInvoice(invoice);
    setShowDetailsModal(true);
  };

  const closeModal = () => {
    setShowDetailsModal(false);
  };

  const toggleFilterPanel = () => {
    setShowFilterPanel(!showFilterPanel);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setStatusFilter('All');
    setPaymentMethodFilter('All');
    setDateRange(undefined);
  };

  // Extract unique payment methods for filter options
  const paymentMethods = ['All', ...Array.from(new Set(invoices.map(invoice => invoice.paymentMethod)))];

  // Add these new functions for date handling
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
              <Title className="text-white">{invoices.length}</Title>
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
              <Title className="text-white">
                {invoices
                  .filter(inv => inv.status === 'Pending')
                  .reduce((total, inv) => {
                    const amount = parseFloat(inv.amount.replace('$', '').replace(',', ''));
                    return total + amount;
                  }, 0)
                  .toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </Title>
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900/80 border border-gray-800 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-green-500/50 focus:bg-gray-900 focus:ring-1 focus:ring-green-500/30 transition-all shadow-inner"
            />
            <Search className="absolute left-3 top-3 text-green-500/70" size={18} />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-gray-500 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button 
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all shadow-md ml-3 ${
              showFilterPanel 
                ? 'bg-gradient-to-r from-green-600/90 to-green-500/90 text-white border border-green-500/30' 
                : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 border border-gray-700/50'
            }`}
            onClick={toggleFilterPanel}
          >
            <Filter size={16} className={showFilterPanel ? 'text-green-200' : 'text-gray-300'} />
            <span>Filter</span>
            <ChevronDown 
              size={14} 
              className={`transform transition-transform duration-300 ${showFilterPanel ? 'rotate-180 text-green-200' : 'text-gray-300'}`} 
            />
          </button>
        </Flex>
        
        {/* Enhanced Filter Panel */}
        {showFilterPanel && (
          <div className="mt-5 pt-4 animate-in fade-in-50 slide-in-from-top-5 duration-300">
            <div className="relative overflow-hidden rounded-xl border border-gray-800/60 bg-gradient-to-b from-gray-900/90 to-black/95 shadow-xl z-30">
              {/* Background patterns */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-blue-500/20"></div>
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] pointer-events-none"></div>
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-gradient-to-r from-blue-500/20 to-green-500/20">
                      <Filter size={18} className="text-blue-400" />
                    </div>
                    <Title className="text-white text-xl">Filter Invoices</Title>
                  </div>
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1 bg-gray-800/60 px-2 py-1 rounded-md"
                  >
                    <X size={12} />
                    Reset
                  </button>
                </div>
            
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="backdrop-blur-sm bg-black/30 p-5 rounded-lg border border-gray-800/60 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
                    <div className="absolute -bottom-14 -right-14 w-28 h-28 bg-green-500/10 rounded-full blur-xl opacity-60 pointer-events-none"></div>
                    
                    <Text className="text-gray-300 mb-3 flex items-center gap-2 relative">
                      <span className="p-1.5 rounded-md bg-gradient-to-br from-green-500/20 to-green-600/5 shadow-sm">
                        <CheckCircle size={14} className="text-green-400 drop-shadow-md" />
                      </span>
                      <span className="font-medium">Invoice Status</span>
                    </Text>
                    
                    <div className="relative mt-2">
                      <button
                        ref={statusButtonRef}
                        onClick={() => {
                          setShowStatusDropdown(!showStatusDropdown);
                          setShowPaymentDropdown(false);
                          setShowDatePicker(false);
                        }}
                        className="w-full bg-gray-900/80 border border-gray-800/60 hover:border-green-500/50 text-white rounded-lg py-2.5 px-4 flex items-center justify-between transition-colors focus:outline-none focus:border-green-500/50 shadow-inner"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-400" />
                          <span>{statusFilter === 'All' ? 'All Statuses' : statusFilter}</span>
                        </div>
                        <ChevronDown size={16} className={`text-green-400/70 transition-transform ${showStatusDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Status dropdown */}
                      {showStatusDropdown && (
                        <div className="absolute z-50 mt-2 w-full bg-black/95 border border-gray-800/80 rounded-xl shadow-xl overflow-hidden backdrop-blur-xl" style={{ filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.2))' }}>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-4">
                              <Text className="text-white font-medium">Select Status</Text>
                              <button 
                                onClick={() => setShowStatusDropdown(false)}
                                className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800/80"
                              >
                                <X size={16} />
                              </button>
                            </div>
                            
                            <div className="space-y-2">
                              {['All', 'Paid', 'Pending'].map(status => (
                                <button
                                  key={status}
                                  onClick={() => {
                                    setStatusFilter(status);
                                    setShowStatusDropdown(false);
                                  }}
                                  className={`w-full py-2 px-3 rounded-lg text-sm transition-all flex items-center ${
                                    statusFilter === status
                                      ? 'bg-gradient-to-r from-green-500/90 to-green-600/90 text-white border border-green-500/30'
                                      : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-700/50'
                                  }`}
                                >
                                  {status === 'Paid' && <CheckCircle size={14} className="mr-2 text-green-300" />}
                                  {status === 'Pending' && <Clock size={14} className="mr-2 text-amber-300" />}
                                  {status === 'All' && <CheckCircle size={14} className="mr-2 text-blue-300" />}
                                  {status}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {statusFilter !== 'All' && (
                      <div className="mt-3 flex items-center">
                        <Badge className={`${
                          statusFilter === 'Paid' 
                            ? 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 border border-green-500/30 shadow-sm' 
                            : 'bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 border border-amber-500/30 shadow-sm'
                        } py-1 px-3 rounded-full flex items-center gap-1.5`}
                        >
                          {statusFilter === 'Paid' ? 
                            <CheckCircle size={12} className="text-green-400" /> : 
                            <Clock size={12} className="text-amber-400" />
                          }
                          <span>{statusFilter}</span>
                        </Badge>
                        <button 
                          onClick={() => setStatusFilter('All')} 
                          className="ml-2 p-1 bg-gray-800/50 text-gray-500 hover:text-gray-300 rounded-full hover:bg-gray-800/80 transition-colors"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="backdrop-blur-sm bg-black/30 p-5 rounded-lg border border-gray-800/60 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                    <div className="absolute -bottom-14 -right-14 w-28 h-28 bg-blue-500/10 rounded-full blur-xl opacity-60 pointer-events-none"></div>
                    
                    <Text className="text-gray-300 mb-3 flex items-center gap-2 relative">
                      <span className="p-1.5 rounded-md bg-gradient-to-br from-blue-500/20 to-blue-600/5 shadow-sm">
                        <CreditCard size={14} className="text-blue-400 drop-shadow-md" />
                      </span>
                      <span className="font-medium">Payment Method</span>
                    </Text>
                    
                    <div className="relative mt-2">
                      <button
                        ref={paymentButtonRef}
                        onClick={() => {
                          setShowPaymentDropdown(!showPaymentDropdown);
                          setShowStatusDropdown(false);
                          setShowDatePicker(false);
                        }}
                        className="w-full bg-gray-900/80 border border-gray-800/60 hover:border-blue-500/50 text-white rounded-lg py-2.5 px-4 flex items-center justify-between transition-colors focus:outline-none focus:border-blue-500/50 shadow-inner"
                      >
                        <div className="flex items-center gap-2">
                          <CreditCard size={16} className="text-blue-400" />
                          <span>{paymentMethodFilter}</span>
                        </div>
                        <ChevronDown size={16} className={`text-blue-400/70 transition-transform ${showPaymentDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Payment method dropdown */}
                      {showPaymentDropdown && (
                        <div className="absolute z-50 mt-2 w-full bg-black/95 border border-gray-800/80 rounded-xl shadow-xl overflow-hidden backdrop-blur-xl" style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))' }}>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-4">
                              <Text className="text-white font-medium">Select Payment Method</Text>
                              <button 
                                onClick={() => setShowPaymentDropdown(false)}
                                className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800/80"
                              >
                                <X size={16} />
                              </button>
                            </div>
                            
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                              {paymentMethods.map(method => (
                                <button
                                  key={method}
                                  onClick={() => {
                                    setPaymentMethodFilter(method);
                                    setShowPaymentDropdown(false);
                                  }}
                                  className={`w-full py-2 px-3 rounded-lg text-sm transition-all flex items-center ${
                                    paymentMethodFilter === method
                                      ? 'bg-gradient-to-r from-blue-500/90 to-blue-600/90 text-white border border-blue-500/30'
                                      : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-700/50'
                                  }`}
                                >
                                  {method === 'Credit Card' && <CreditCard size={14} className="mr-2 text-blue-300" />}
                                  {method === 'Bank Transfer' && <Building size={14} className="mr-2 text-blue-300" />}
                                  {method === 'All' && <CreditCard size={14} className="mr-2 text-blue-300" />}
                                  {method}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {paymentMethodFilter !== 'All' && (
                      <div className="mt-3 flex items-center">
                        <Badge className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 border border-blue-500/30 shadow-sm py-1 px-3 rounded-full flex items-center gap-1.5">
                          <CreditCard size={12} className="text-blue-400" />
                          <span>{paymentMethodFilter}</span>
                        </Badge>
                        <button 
                          onClick={() => setPaymentMethodFilter('All')} 
                          className="ml-2 p-1 bg-gray-800/50 text-gray-500 hover:text-gray-300 rounded-full hover:bg-gray-800/80 transition-colors"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="backdrop-blur-sm bg-black/30 p-5 rounded-lg border border-gray-800/60 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
                    <div className="absolute -bottom-14 -right-14 w-28 h-28 bg-amber-500/10 rounded-full blur-xl opacity-60 pointer-events-none"></div>
                    
                    <Text className="text-gray-300 mb-3 flex items-center gap-2 relative">
                      <span className="p-1.5 rounded-md bg-gradient-to-br from-amber-500/20 to-amber-600/5 shadow-sm">
                        <CalendarRange size={14} className="text-amber-400 drop-shadow-md" />
                      </span>
                      <span className="font-medium">Invoice Date Range</span>
                    </Text>
                    
                    <div className="relative mt-2">
                      <button
                        ref={dateButtonRef}
                        onClick={() => {
                          setShowDatePicker(!showDatePicker);
                          setShowStatusDropdown(false);
                          setShowPaymentDropdown(false);
                        }}
                        className="w-full bg-gray-900/80 border border-gray-800/60 hover:border-amber-500/50 text-white rounded-lg py-2.5 px-4 flex items-center justify-between transition-colors focus:outline-none focus:border-amber-500/50 shadow-inner"
                      >
                        <div className="flex items-center gap-2">
                          <CalendarRange size={16} className="text-amber-400" />
                          <span>
                            {dateRange?.from || dateRange?.to ? (
                              <>
                                {formatDate(dateRange.from)} {dateRange.from && dateRange.to && '–'} {formatDate(dateRange.to)}
                              </>
                            ) : (
                              'Select date range'
                            )}
                          </span>
                        </div>
                        <ChevronDown size={16} className={`text-amber-400/70 transition-transform ${showDatePicker ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Date picker dropdown */}
                      {showDatePicker && (
                        <div className="absolute z-50 mt-2 w-full bg-black/95 border border-gray-800/80 rounded-xl shadow-xl overflow-hidden backdrop-blur-xl" style={{ filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.2))' }}>
                          <div className="p-4 border-b border-gray-800/60">
                            <div className="flex items-center justify-between mb-4">
                              <Text className="text-white font-medium">Select Date Range</Text>
                              <button 
                                onClick={() => setShowDatePicker(false)}
                                className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800/80"
                              >
                                <X size={16} />
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
                                      ? 'bg-gradient-to-r from-amber-500/90 to-amber-600/90 text-white border border-amber-500/30'
                                      : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-700/50'
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
                                  className="w-full bg-gray-900/80 border border-gray-800/60 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500/50 shadow-inner"
                                  onChange={(e) => handleCustomDateSelect({ ...dateRange, from: e.target.value ? new Date(e.target.value) : undefined })}
                                  value={dateRange?.from ? dateRange.from.toISOString().split('T')[0] : ''}
                                />
                              </div>
                              <div className="w-1/2">
                                <Text className="text-gray-400 text-xs mb-1">End Date</Text>
                                <input 
                                  type="date" 
                                  className="w-full bg-gray-900/80 border border-gray-800/60 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500/50 shadow-inner"
                                  onChange={(e) => handleCustomDateSelect({ ...dateRange, to: e.target.value ? new Date(e.target.value) : undefined })}
                                  value={dateRange?.to ? dateRange.to.toISOString().split('T')[0] : ''}
                                />
                              </div>
                            </div>
                            
                            <div className="mt-4 flex justify-between">
                              <button
                                onClick={() => setDateRange(undefined)}
                                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                              >
                                <X size={12} />
                                Clear
                              </button>
                              <button
                                onClick={() => setShowDatePicker(false)}
                                className="bg-gradient-to-r from-amber-500/90 to-amber-600/90 hover:from-amber-500 hover:to-amber-500 text-white px-4 py-1.5 rounded-lg text-sm transition-colors shadow-md border border-amber-500/30 flex items-center gap-1"
                              >
                                <CheckCircle size={12} />
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {dateRange?.from && dateRange?.to && (
                      <div className="mt-3 flex items-center">
                        <Badge className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 border border-amber-500/30 shadow-sm py-1 px-3 rounded-full flex items-center gap-1.5">
                          <Calendar size={12} className="text-amber-400" />
                          <span className="truncate max-w-[160px]">
                            {formatDate(dateRange.from)} – {formatDate(dateRange.to)}
                          </span>
                        </Badge>
                        <button 
                          onClick={() => setDateRange(undefined)} 
                          className="ml-2 p-1 bg-gray-800/50 text-gray-500 hover:text-gray-300 rounded-full hover:bg-gray-800/80 transition-colors flex-shrink-0"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Active Filters Summary */}
                {(statusFilter !== 'All' || paymentMethodFilter !== 'All' || dateRange?.from || searchQuery) && (
                  <div className="mt-6 pt-4 border-t border-gray-800/40">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="flex items-center">
                        <div className="p-1 rounded-md bg-blue-500/10 mr-2">
                          <CheckCircle size={14} className="text-blue-400" />
                        </div>
                        <Text className="text-gray-300 text-sm">
                          Showing {filteredInvoices.length} of {invoices.length} invoices
                        </Text>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                        {searchQuery && (
                          <Badge className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 border border-gray-700/60 py-1 pl-2 pr-1 flex items-center gap-1">
                            <Search size={10} className="text-green-400 mr-1" />
                            <span className="truncate max-w-[100px]">"{searchQuery}"</span>
                            <button onClick={() => setSearchQuery('')} className="ml-1 p-0.5 rounded-full bg-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-600/50">
                              <X size={10} />
                            </button>
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 flex justify-end gap-3">
                  <button 
                    onClick={clearFilters}
                    className="px-4 py-2 bg-gray-800/80 text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/80 transition-all text-sm shadow-md"
                  >
                    Clear All
                  </button>
                  <button 
                    onClick={toggleFilterPanel}
                    className="px-4 py-2 bg-gradient-to-r from-green-600/90 to-green-500/90 text-white rounded-lg border border-green-500/30 hover:from-green-500/90 hover:to-green-400/90 transition-all text-sm shadow-md flex items-center gap-2"
                  >
                    <CheckCircle size={14} />
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
              {filteredInvoices.length > 0 ? (
                filteredInvoices.map((invoice) => (
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
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-6">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <FileText size={36} className="mb-2" />
                      <Text>No invoices match your search criteria</Text>
                      <button onClick={clearFilters} className="text-blue-500 hover:underline mt-2">
                        Clear all filters
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Invoice Details Modal */}
      {showDetailsModal && selectedInvoice && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/40 via-green-500/40 to-blue-500/40 -z-10"></div>
            
            <div className="border-b border-gray-800/60 p-4 flex justify-between items-center sticky top-0 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm z-10 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/10">
                  <Receipt className="text-blue-400 h-6 w-6 drop-shadow-md" />
                </div>
                <div>
                  <Text className="text-gray-400 text-sm">Invoice Details</Text>
                  <Title className="text-white text-xl drop-shadow-md">{selectedInvoice.id}</Title>
                </div>
              </div>
              <button 
                onClick={closeModal} 
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8 space-y-8">
              {/* Invoice Header */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Title className="text-white text-3xl mb-4 font-bold">
                    <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">INVOICE</span>
                  </Title>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-blue-400 h-4 w-4" />
                      <Text className="text-gray-400">Date: <span className="text-white">{selectedInvoice.date}</span></Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarClock className="text-blue-400 h-4 w-4" />
                      <Text className="text-gray-400">Due Date: <span className="text-white">{selectedInvoice.dueDate}</span></Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="text-blue-400 h-4 w-4" />
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
                          ? 'bg-gradient-to-r from-green-500/30 to-green-600/30 text-green-400 text-base px-6 py-1.5 shadow-md border border-green-500/20' 
                          : 'bg-gradient-to-r from-amber-500/30 to-amber-600/30 text-amber-400 text-base px-6 py-1.5 shadow-md border border-amber-500/20'
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
              <Card className="bg-black/60 border border-gray-800/60 rounded-xl p-5 shadow-lg transform transition-all hover:scale-[1.01] hover:shadow-blue-900/20 hover:border-blue-500/30">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="text-blue-400 h-5 w-5" />
                      <Title className="text-white text-base">From</Title>
                    </div>
                    <div className="space-y-1">
                      <Text className="text-white font-medium">PrintFlow B2B</Text>
                      <Text className="text-gray-400">123 Print Avenue</Text>
                      <Text className="text-gray-400">Suite 500</Text>
                      <Text className="text-gray-400">Chicago, IL 60601</Text>
                      <Text className="text-gray-400 mt-2">billing@printflow.com</Text>
                      <Text className="text-gray-400">+1 (555) 123-4567</Text>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="text-blue-400 h-5 w-5" />
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
              <Card className="bg-black/60 border border-gray-800/60 rounded-xl p-5 shadow-lg transform transition-all hover:scale-[1.01] hover:shadow-blue-900/20 hover:border-blue-500/30">
                <Title className="text-white text-lg mb-4 inline-flex items-center">
                  <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Invoice Items</span>
                </Title>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHead>
                      <TableRow className="border-b border-gray-800/60">
                        <TableHeaderCell className="text-gray-400">Description</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400 text-right">Quantity</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400 text-right">Unit Price</TableHeaderCell>
                        <TableHeaderCell className="text-gray-400 text-right">Amount</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedInvoice.details.items.map((item, i) => (
                        <TableRow key={i} className="border-b border-gray-800/60 hover:bg-gray-900/40 transition-colors">
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
                  <div className="w-full md:w-64 space-y-2 bg-gray-900/40 rounded-lg p-4 shadow-inner">
                    <div className="flex justify-between border-b border-gray-800/60 pb-2">
                      <Text className="text-gray-400">Subtotal</Text>
                      <Text className="text-white">{selectedInvoice.details.subtotal}</Text>
                    </div>
                    <div className="flex justify-between border-b border-gray-800/60 pb-2">
                      <Text className="text-gray-400">Tax</Text>
                      <Text className="text-white">{selectedInvoice.details.tax}</Text>
                    </div>
                    <div className="flex justify-between border-b border-gray-800/60 pb-2">
                      <Text className="text-gray-400">Discount</Text>
                      <Text className="text-white">{selectedInvoice.details.discount}</Text>
                    </div>
                    <div className="flex justify-between pt-2">
                      <Text className="text-white font-medium">Total</Text>
                      <Text className="text-white font-bold text-lg bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                        {selectedInvoice.details.total}
                      </Text>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Notes & Payment Status */}
              <Card className="bg-black/60 border border-gray-800/60 rounded-xl p-5 shadow-lg transform transition-all hover:scale-[1.01] hover:shadow-blue-900/20 hover:border-blue-500/30">
                <Title className="text-white text-lg mb-2">Notes</Title>
                <Text className="text-gray-400">{selectedInvoice.details.notes}</Text>
                
                {selectedInvoice.status === 'Paid' && (
                  <div className="mt-4 border-t border-gray-800/60 pt-4">
                    <div className="flex items-center gap-2 bg-green-500/10 p-2 rounded-lg">
                      <div className="p-1 rounded-full bg-gradient-to-br from-green-500/30 to-green-500/20">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <Text className="text-green-400">
                        Payment received on {selectedInvoice.details.paidDate}
                      </Text>
                    </div>
                  </div>
                )}
              </Card>
              
              <Flex justifyContent="end" className="gap-3">
                <button 
                  onClick={closeModal}
                  className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-gray-900/30"
                >
                  Close
                </button>
                <button 
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-blue-900/30 flex items-center gap-2"
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