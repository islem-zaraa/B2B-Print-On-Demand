import React, { useState } from 'react';
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Metric } from '@tremor/react';
import { Settings, Users, Package, Bell, BarChart3, CheckCircle, Shield, Server, Activity, Database } from 'lucide-react';
import NotificationDemo from '../../shared/NotificationDemo';

export default function AdminPanel() {
  const [selectedView, setSelectedView] = useState(0);

  const stats = [
    { name: 'Total Users', value: '1,298', icon: Users, color: 'green' },
    { name: 'Active Products', value: '342', icon: Package, color: 'green' },
    { name: 'Pending Orders', value: '87', icon: Bell, color: 'green' },
    { name: 'Monthly Revenue', value: '$48,273', icon: BarChart3, color: 'green' },
  ];

  return (
    <div className="space-y-6 text-white">
      <div className="mb-8">
        <Title className="text-white text-3xl font-bold mb-1">Admin Control Panel</Title>
        <div className="flex items-center">
          <div className="w-10 h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full mr-2"></div>
          <Text className="text-gray-400">Manage your platform in one place</Text>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card 
              key={stat.name} 
              className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-xl overflow-hidden relative group transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30 -z-10"></div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Text className="text-gray-400 mb-1">{stat.name}</Text>
                  <Metric className="text-white">{stat.value}</Metric>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/5 group-hover:from-green-500/40 group-hover:to-green-500/10 transition-all duration-300">
                  <Icon className="w-7 h-7 text-green-400" />
                </div>
              </div>
              
              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
            </Card>
          );
        })}
      </div>

      {/* Action Tabs */}
      <Card className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-xl overflow-hidden relative">
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30 -z-10"></div>
        
        <TabGroup index={selectedView} onIndexChange={setSelectedView}>
          <TabList className="mt-2 border-b border-gray-800/60">
            <Tab className="text-gray-400 data-[state=active]:text-green-500 transition-colors">Platform Controls</Tab>
            <Tab className="text-gray-400 data-[state=active]:text-green-500 transition-colors">User Management</Tab>
            <Tab className="text-gray-400 data-[state=active]:text-green-500 transition-colors">Content Moderation</Tab>
            <Tab className="text-gray-400 data-[state=active]:text-green-500 transition-colors">System Logs</Tab>
            <Tab className="text-gray-400 data-[state=active]:text-green-500 transition-colors">Notifications</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-xl overflow-hidden relative">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30 -z-10"></div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
                        <Settings className="text-green-400 h-5 w-5" />
                      </div>
                      <div>
                        <Title className="text-white text-lg">Platform Settings</Title>
                      </div>
                    </div>
                    <Text className="text-gray-400 mt-1">Configure global platform behavior</Text>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-gray-800/40 pb-4">
                        <div>
                          <Text className="text-white font-medium">Maintenance Mode</Text>
                          <Text className="text-gray-500 text-sm">Temporarily disable user access</Text>
                        </div>
                        <div className="relative inline-block w-12 h-6 rounded-full bg-gray-700">
                          <input type="checkbox" className="sr-only peer" />
                          <span className="absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all peer-checked:left-7 peer-checked:bg-green-400"></span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <Text className="text-white font-medium">Public Registration</Text>
                          <Text className="text-gray-500 text-sm">Allow new user sign-ups</Text>
                        </div>
                        <div className="relative inline-block w-12 h-6 rounded-full bg-green-600">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <span className="absolute left-7 top-1 block h-4 w-4 rounded-full bg-white transition-all peer-checked:left-7"></span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-xl overflow-hidden relative">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30 -z-10"></div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
                        <Activity className="text-green-400 h-5 w-5" />
                      </div>
                      <div>
                        <Title className="text-white text-lg">System Health</Title>
                      </div>
                    </div>
                    <Text className="text-gray-400 mt-1">Monitor system performance</Text>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center p-3 bg-green-500/10 rounded-lg">
                        <Server className="w-5 h-5 text-green-500 mr-3" />
                        <div>
                          <Text className="text-white">API Services</Text>
                          <div className="flex items-center mt-1">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                            <Text className="text-green-500 text-xs font-medium">Operational</Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-green-500/10 rounded-lg">
                        <Database className="w-5 h-5 text-green-500 mr-3" />
                        <div>
                          <Text className="text-white">Database</Text>
                          <div className="flex items-center mt-1">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                            <Text className="text-green-500 text-xs font-medium">Healthy</Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-green-500/10 rounded-lg">
                        <Shield className="w-5 h-5 text-green-500 mr-3" />
                        <div>
                          <Text className="text-white">Storage Services</Text>
                          <div className="flex items-center mt-1">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                            <Text className="text-green-500 text-xs font-medium">Online</Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-xl overflow-hidden relative">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30 -z-10"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
                      <Users className="text-green-400 h-5 w-5" />
                    </div>
                    <div>
                      <Title className="text-white text-lg">User Management</Title>
                    </div>
                  </div>
                  <Text className="text-gray-400 mt-1 mb-4">Create, edit and manage user accounts</Text>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left py-3 text-gray-400 font-medium">User</th>
                          <th className="text-left py-3 text-gray-400 font-medium">Role</th>
                          <th className="text-left py-3 text-gray-400 font-medium">Status</th>
                          <th className="text-left py-3 text-gray-400 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Alice Cooper', email: 'alice@example.com', role: 'Admin', status: 'Active' },
                          { name: 'Bob Smith', email: 'bob@example.com', role: 'Customer', status: 'Active' },
                          { name: 'Carol Jones', email: 'carol@example.com', role: 'Business', status: 'Suspended' },
                        ].map((user, i) => (
                          <tr key={i} className="border-b border-gray-800/30 hover:bg-green-500/5 transition-colors">
                            <td className="py-3">
                              <div>
                                <Text className="text-white">{user.name}</Text>
                                <Text className="text-gray-500 text-sm">{user.email}</Text>
                              </div>
                            </td>
                            <td className="py-3">
                              <span className="px-3 py-1 rounded-full text-xs bg-gray-800 text-white">
                                {user.role}
                              </span>
                            </td>
                            <td className="py-3">
                              <span className={`px-3 py-1 rounded-full text-xs ${
                                user.status === 'Active' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="py-3">
                              <div className="flex space-x-2">
                                <button className="px-3 py-1 bg-green-500/10 hover:bg-green-500/20 text-green-500 rounded-md transition-colors">Edit</button>
                                <button className="px-3 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-md transition-colors">Suspend</button>
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
              <div className="mt-6">
                <Card className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-xl overflow-hidden relative p-6">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30 -z-10"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
                      <Shield className="text-green-400 h-5 w-5" />
                    </div>
                    <div>
                      <Title className="text-white text-lg">Content Moderation</Title>
                    </div>
                  </div>
                  <Text className="text-gray-400 mt-1">Manage and moderate platform content</Text>
                  <div className="flex items-center justify-center h-40 mt-6 border border-dashed border-green-500/20 rounded-lg bg-black/30 backdrop-blur-sm">
                    <div className="text-center">
                      <Text className="text-gray-400 mb-3">Content moderation tools will be available soon</Text>
                      <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 text-black font-medium rounded-lg transition-all shadow-lg shadow-green-500/20">Request Access</button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-xl overflow-hidden relative p-6">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30 -z-10"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
                      <Activity className="text-green-400 h-5 w-5" />
                    </div>
                    <div>
                      <Title className="text-white text-lg">System Logs</Title>
                    </div>
                  </div>
                  <Text className="text-gray-400 mt-1 mb-4">View system logs and audit trails</Text>
                  <div className="mt-4 overflow-y-auto h-48 bg-black p-4 rounded-lg font-mono text-xs border border-green-500/10">
                    <div className="text-green-500">[2023-04-12 08:15:32] INFO: System initialized</div>
                    <div className="text-gray-400">[2023-04-12 08:16:03] INFO: User authentication successful (user_id: 12345)</div>
                    <div className="text-gray-400">[2023-04-12 08:18:47] INFO: Product catalog updated</div>
                    <div className="text-yellow-500">[2023-04-12 09:22:15] WARNING: High server load detected</div>
                    <div className="text-gray-400">[2023-04-12 09:25:33] INFO: Load balancing activated</div>
                    <div className="text-gray-400">[2023-04-12 10:01:22] INFO: Database backup completed</div>
                    <div className="text-red-500">[2023-04-12 10:45:08] ERROR: Failed login attempt (IP: 192.168.1.105)</div>
                    <div className="text-gray-400">[2023-04-12 11:02:55] INFO: Security protocols updated</div>
                    <div className="text-green-500">[2023-04-12 12:30:11] INFO: New package deployed</div>
                    <div className="text-gray-400">[2023-04-12 13:05:47] INFO: Admin settings updated</div>
                  </div>
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card className="bg-gradient-to-b from-gray-900 to-black border-0 rounded-xl overflow-hidden relative p-6">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30 -z-10"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
                      <Bell className="text-green-400 h-5 w-5" />
                    </div>
                    <div>
                      <Title className="text-white text-lg">Notification System</Title>
                    </div>
                  </div>
                  <Text className="text-gray-400 mt-1 mb-4">Test and manage platform notifications</Text>
                  <div className="mt-4">
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