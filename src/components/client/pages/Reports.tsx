import React, { useState } from 'react';
import { Card, Title, Text, BarChart, DonutChart, Grid, Flex, Tab, TabGroup, TabList, TabPanel, TabPanels, DateRangePicker, DateRangePickerValue, AreaChart } from '@tremor/react';
import { Calendar, Download, Printer, ChevronDown } from 'lucide-react';

// Sample data for reports
const monthlySales = [
  { month: 'Jan', sales: 4200 },
  { month: 'Feb', sales: 5800 },
  { month: 'Mar', sales: 7500 },
  { month: 'Apr', sales: 6800 },
  { month: 'May', sales: 9200 },
  { month: 'Jun', sales: 8100 },
];

const categorySales = [
  { category: 'T-Shirts', sales: 42500 },
  { category: 'Polos', sales: 28750 },
  { category: 'Hoodies', sales: 19800 },
  { category: 'Caps', sales: 15300 },
  { category: 'Jackets', sales: 12500 },
];

const prodColorData = [
  { name: 'Black', value: 35 },
  { name: 'Navy', value: 25 },
  { name: 'White', value: 20 },
  { name: 'Grey', value: 10 },
  { name: 'Other', value: 10 },
];

const quarterlyTrends = [
  {
    date: 'Q1 2022',
    'This Year': 15800,
    'Last Year': 12400,
  },
  {
    date: 'Q2 2022',
    'This Year': 18200,
    'Last Year': 14800,
  },
  {
    date: 'Q3 2022',
    'This Year': 16500,
    'Last Year': 15100,
  },
  {
    date: 'Q4 2022',
    'This Year': 22000,
    'Last Year': 18700,
  },
  {
    date: 'Q1 2023',
    'This Year': 19500,
    'Last Year': 15800,
  },
];

export default function Reports() {
  const [dateRange, setDateRange] = useState<DateRangePickerValue>({
    from: new Date(2023, 0, 1),
    to: new Date(),
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Title className="text-white text-2xl">Sales Reports</Title>
          <Text className="text-gray-400">Analyze your business performance</Text>
        </div>
        <Flex className="gap-2">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2 transition-all">
            <Download size={18} />
            Export
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2 transition-all">
            <Printer size={18} />
            Print
          </button>
        </Flex>
      </div>

      {/* Date Range Filter */}
      <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
        <Flex>
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-gray-400" />
            <Text className="text-gray-400">Date Range:</Text>
          </div>
          <DateRangePicker
            value={dateRange}
            onValueChange={setDateRange}
            className="max-w-md"
          />
        </Flex>
      </Card>

      {/* Reports Tabs */}
      <TabGroup>
        <TabList className="border-b border-gray-800">
          <Tab className="text-gray-400 data-[state=active]:text-green-500">Overview</Tab>
          <Tab className="text-gray-400 data-[state=active]:text-green-500">Sales by Product</Tab>
          <Tab className="text-gray-400 data-[state=active]:text-green-500">Trends</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* Overview Charts */}
            <Grid numItems={1} numItemsMd={2} className="gap-6 mt-6">
              <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
                <Title className="text-white mb-4">Monthly Sales</Title>
                <BarChart
                  data={monthlySales}
                  index="month"
                  categories={["sales"]}
                  colors={["green"]}
                  valueFormatter={(number) => `$${number.toLocaleString()}`}
                  showLegend={false}
                  yAxisWidth={70}
                  className="h-64"
                />
              </Card>
              <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
                <div className="mb-4">
                  <Title className="text-white">Sales by Category</Title>
                  <Text className="text-gray-400">Distribution of sales across product categories</Text>
                </div>
                <DonutChart
                  data={categorySales}
                  category="sales"
                  index="category"
                  valueFormatter={(number) => `$${number.toLocaleString()}`}
                  colors={["green", "emerald", "teal", "cyan", "blue"]}
                  className="h-56"
                />
              </Card>
            </Grid>

            {/* Summary Cards */}
            <Grid numItems={1} numItemsMd={3} className="gap-4 mt-6">
              <Card className="bg-black border border-gray-800 rounded-xl">
                <Text className="text-gray-400">Total Sales (YTD)</Text>
                <Title className="text-white text-2xl mt-2">$118,950</Title>
                <Text className="text-green-500 mt-1">↑ 12.5% vs last year</Text>
              </Card>
              <Card className="bg-black border border-gray-800 rounded-xl">
                <Text className="text-gray-400">Average Order Value</Text>
                <Title className="text-white text-2xl mt-2">$2,378</Title>
                <Text className="text-green-500 mt-1">↑ 4.2% vs last year</Text>
              </Card>
              <Card className="bg-black border border-gray-800 rounded-xl">
                <Text className="text-gray-400">Total Orders (YTD)</Text>
                <Title className="text-white text-2xl mt-2">50</Title>
                <Text className="text-green-500 mt-1">↑ 8.3% vs last year</Text>
              </Card>
            </Grid>
          </TabPanel>

          <TabPanel>
            {/* Product-specific charts */}
            <Grid numItems={1} numItemsMd={2} className="gap-6 mt-6">
              <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
                <Title className="text-white mb-4">Top Selling Products</Title>
                <BarChart
                  data={categorySales}
                  index="category"
                  categories={["sales"]}
                  colors={["green"]}
                  valueFormatter={(number) => `$${number.toLocaleString()}`}
                  showLegend={false}
                  yAxisWidth={70}
                  layout="vertical"
                  className="h-64"
                />
              </Card>
              <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
                <div className="mb-4">
                  <Title className="text-white">Product Colors</Title>
                  <Text className="text-gray-400">Distribution of orders by color</Text>
                </div>
                <DonutChart
                  data={prodColorData}
                  category="value"
                  index="name"
                  valueFormatter={(number) => `${number}%`}
                  colors={["slate", "blue", "cyan", "gray", "indigo"]}
                  className="h-56"
                />
              </Card>
            </Grid>
          </TabPanel>

          <TabPanel>
            {/* Trends over time */}
            <Grid numItems={1} className="gap-6 mt-6">
              <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
                <Title className="text-white mb-4">Quarterly Sales Comparison</Title>
                <AreaChart
                  data={quarterlyTrends}
                  index="date"
                  categories={["This Year", "Last Year"]}
                  colors={["green", "gray"]}
                  valueFormatter={(number) => `$${number.toLocaleString()}`}
                  yAxisWidth={70}
                  className="h-72"
                />
              </Card>
            </Grid>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
} 