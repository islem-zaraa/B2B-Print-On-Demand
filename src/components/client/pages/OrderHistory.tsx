import React, { useState } from 'react';
import { Card, Title, Text, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody, Badge, Grid, Flex, DateRangePickerValue } from '@tremor/react';
import { Download, Search, Calendar, ChevronDown, CalendarRange, X } from 'lucide-react';

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