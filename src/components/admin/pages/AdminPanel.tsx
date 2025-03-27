import React, { useState } from 'react';
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Metric } from '@tremor/react';
import { Settings, Users, Package, Bell, BarChart3, CheckCircle } from 'lucide-react';
import NotificationDemo from '../../shared/NotificationDemo';

export default function AdminPanel() {
  const [selectedView, setSelectedView] = useState(0);

  const stats = [
    { name: 'Total Users', value: '1,298', icon: Users, color: 'blue' },
    { name: 'Active Products', value: '342', icon: Package, color: 'emerald' },
    { name: 'Pending Orders', value: '87', icon: Bell, color: 'amber' },
    { name: 'Monthly Revenue', value: '$48,273', icon: BarChart3, color: 'rose' },
  ];

  return (
    <div className="space-y-6 text-white">
      {/* Debug Element */}
      <div className="p-4 bg-green-500 text-white rounded-lg mb-4">
        Admin Panel Debug - If you can see this, component is rendering
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <Title className="text-white text-2xl font-bold">Admin Control Panel</Title>
          <Text className="text-gray-400">Manage your platform in one place</Text>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Settings className="w-4 h-4 mr-2" />
          Global Settings
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="bg-black border border-gray-800 hover:border-green-600 transition-all rounded-xl overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <Text className="text-gray-500">{stat.name}</Text>
                  <Metric className="text-white">{stat.value}</Metric>
                </div>
                <div className="p-2 rounded-full bg-opacity-10" style={{ backgroundColor: `rgba(${stat.color === 'blue' ? '59, 130, 246' : stat.color === 'emerald' ? '16, 185, 129' : stat.color === 'amber' ? '245, 158, 11' : '225, 29, 72'}, 0.1)` }}>
                  <Icon className="w-6 h-6" style={{ color: `${stat.color === 'blue' ? 'rgb(59, 130, 246)' : stat.color === 'emerald' ? 'rgb(16, 185, 129)' : stat.color === 'amber' ? 'rgb(245, 158, 11)' : 'rgb(225, 29, 72)'}` }} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Action Tabs */}
      <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
        <TabGroup index={selectedView} onIndexChange={setSelectedView}>
          <TabList className="mt-2">
            <Tab className="text-gray-400 data-[state=active]:text-green-500">Platform Controls</Tab>
            <Tab className="text-gray-400 data-[state=active]:text-green-500">User Management</Tab>
            <Tab className="text-gray-400 data-[state=active]:text-green-500">Content Moderation</Tab>
            <Tab className="text-gray-400 data-[state=active]:text-green-500">System Logs</Tab>
            <Tab className="text-gray-400 data-[state=active]:text-green-500">Notifications</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                    <Title className="text-white text-lg">Platform Settings</Title>
                    <Text className="text-gray-400 mt-1">Configure global platform behavior</Text>
                    <div className="mt-4">
                      <div className="flex items-center justify-between py-2">
                        <Text className="text-white">Maintenance Mode</Text>
                        <div className="relative inline-block w-12 h-6 rounded-full bg-gray-700">
                          <input type="checkbox" className="sr-only peer" />
                          <span className="absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all peer-checked:left-7 peer-checked:bg-green-400"></span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <Text className="text-white">Public Registration</Text>
                        <div className="relative inline-block w-12 h-6 rounded-full bg-green-600">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <span className="absolute left-7 top-1 block h-4 w-4 rounded-full bg-white transition-all peer-checked:left-7"></span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                    <Title className="text-white text-lg">System Health</Title>
                    <Text className="text-gray-400 mt-1">Monitor system performance</Text>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <Text className="text-white">API Services: Operational</Text>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <Text className="text-white">Database: Healthy</Text>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <Text className="text-white">Storage Services: Online</Text>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-4">
                <Card className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                  <Title className="text-white text-lg">User Management</Title>
                  <Text className="text-gray-400 mt-1">Create, edit and manage user accounts</Text>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left py-3 text-gray-400">User</th>
                          <th className="text-left py-3 text-gray-400">Role</th>
                          <th className="text-left py-3 text-gray-400">Status</th>
                          <th className="text-left py-3 text-gray-400">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Alice Cooper', email: 'alice@example.com', role: 'Admin', status: 'Active' },
                          { name: 'Bob Smith', email: 'bob@example.com', role: 'Customer', status: 'Active' },
                          { name: 'Carol Jones', email: 'carol@example.com', role: 'Business', status: 'Suspended' },
                        ].map((user, i) => (
                          <tr key={i} className="border-b border-gray-800">
                            <td className="py-3">
                              <div>
                                <Text className="text-white">{user.name}</Text>
                                <Text className="text-gray-500 text-sm">{user.email}</Text>
                              </div>
                            </td>
                            <td className="py-3">
                              <Text className="text-white">{user.role}</Text>
                            </td>
                            <td className="py-3">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                user.status === 'Active' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="py-3">
                              <div className="flex space-x-2">
                                <button className="text-green-500 hover:text-green-400">Edit</button>
                                <button className="text-red-500 hover:text-red-400">Suspend</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-4">
                <Card className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden p-6">
                  <Title className="text-white text-lg">Content Moderation</Title>
                  <Text className="text-gray-400 mt-1">Manage and moderate platform content</Text>
                  <div className="flex items-center justify-center h-40 mt-4 border border-dashed border-gray-700 rounded-lg">
                    <div className="text-center">
                      <Text className="text-gray-400">Content moderation tools will be available soon</Text>
                      <button className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">Request Access</button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-4">
                <Card className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden p-6">
                  <Title className="text-white text-lg">System Logs</Title>
                  <Text className="text-gray-400 mt-1">View system logs and audit trails</Text>
                  <div className="mt-4 overflow-y-auto h-40 bg-black p-4 rounded-lg font-mono text-xs">
                    <div className="text-green-500">[2023-04-12 08:15:32] INFO: System initialized</div>
                    <div className="text-gray-400">[2023-04-12 08:16:03] INFO: User authentication successful (user_id: 12345)</div>
                    <div className="text-gray-400">[2023-04-12 08:18:47] INFO: Product catalog updated</div>
                    <div className="text-yellow-500">[2023-04-12 09:22:15] WARNING: High server load detected</div>
                    <div className="text-gray-400">[2023-04-12 09:25:33] INFO: Load balancing activated</div>
                    <div className="text-gray-400">[2023-04-12 10:01:22] INFO: Database backup completed</div>
                    <div className="text-red-500">[2023-04-12 10:45:08] ERROR: Failed login attempt (IP: 192.168.1.105)</div>
                    <div className="text-gray-400">[2023-04-12 11:02:55] INFO: Security protocols updated</div>
                  </div>
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-4">
                <Card className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden p-6">
                  <Title className="text-white text-lg">Notification System</Title>
                  <Text className="text-gray-400 mt-1">Test and manage platform notifications</Text>
                  <div className="mt-6">
                    <NotificationDemo />
                  </div>
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
} 