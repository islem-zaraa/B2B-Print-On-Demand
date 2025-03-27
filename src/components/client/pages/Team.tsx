import React, { useState } from 'react';
import { Card, Title, Text, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody, Badge, Button, TextInput, Flex } from '@tremor/react';
import { UserPlus, X, Mail, UserCog, UserMinus, Check, AlertTriangle } from 'lucide-react';

// Sample team members data
const teamMembers = [
  { 
    id: 1, 
    name: 'John Doe', 
    email: 'john.doe@company.com', 
    role: 'Admin', 
    status: 'Active',
    dateAdded: '2022-10-15',
    lastLogin: '2023-03-24'
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    email: 'jane.smith@company.com', 
    role: 'Designer', 
    status: 'Active',
    dateAdded: '2022-11-03',
    lastLogin: '2023-03-23'
  },
  { 
    id: 3, 
    name: 'Robert Johnson', 
    email: 'robert.johnson@company.com', 
    role: 'Approver', 
    status: 'Active',
    dateAdded: '2023-01-18',
    lastLogin: '2023-03-20'
  },
  { 
    id: 4, 
    name: 'Emily Davis', 
    email: 'emily.davis@company.com', 
    role: 'Viewer', 
    status: 'Pending',
    dateAdded: '2023-03-10',
    lastLogin: '-'
  },
  { 
    id: 5, 
    name: 'Michael Wilson', 
    email: 'michael.wilson@company.com', 
    role: 'Approver', 
    status: 'Inactive',
    dateAdded: '2022-06-22',
    lastLogin: '2023-01-15'
  }
];

// Available roles
const roles = ['Admin', 'Designer', 'Approver', 'Viewer'];

export default function Team() {
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('Viewer');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Title className="text-white text-2xl">Team Management</Title>
          <Text className="text-gray-400">Manage your team members and their access</Text>
        </div>
        <Button 
          icon={UserPlus} 
          className="bg-green-500 hover:bg-green-600 text-black transition-colors"
          onClick={() => setShowInviteForm(true)}
        >
          Invite Team Member
        </Button>
      </div>

      {/* Invite Form */}
      {showInviteForm && (
        <Card className="bg-black border border-gray-800 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <Title className="text-white text-xl">Invite New Team Member</Title>
            <Button 
              icon={X} 
              variant="light" 
              color="gray" 
              className="text-gray-400"
              onClick={() => setShowInviteForm(false)}
            />
          </div>
          <div className="space-y-4">
            <div>
              <Text className="text-gray-400 mb-2">Email Address</Text>
              <TextInput 
                icon={Mail}
                placeholder="colleague@company.com" 
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
              />
            </div>
            <div>
              <Text className="text-gray-400 mb-2">Role</Text>
              <select 
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                value={inviteRole}
                onChange={(e) => setInviteRole(e.target.value)}
              >
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
            <div className="pt-2">
              <Card className="bg-gray-900 border-none text-gray-400 text-sm p-3 leading-normal">
                <p className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={16} className="text-amber-500" />
                  <strong className="text-white">Role Permissions:</strong>
                </p>
                <p className="mb-1"><strong className="text-white">Admin:</strong> Full access to all features and team management</p>
                <p className="mb-1"><strong className="text-white">Designer:</strong> Can create, edit, and upload designs</p>
                <p className="mb-1"><strong className="text-white">Approver:</strong> Can review and approve orders and designs</p>
                <p><strong className="text-white">Viewer:</strong> Can view orders and reports only</p>
              </Card>
            </div>
            <Flex justifyContent="end" className="gap-2">
              <Button 
                variant="secondary" 
                className="border-gray-700 text-white hover:bg-gray-800"
                onClick={() => setShowInviteForm(false)}
              >
                Cancel
              </Button>
              <Button 
                className="bg-green-500 hover:bg-green-600 text-black"
              >
                Send Invitation
              </Button>
            </Flex>
          </div>
        </Card>
      )}

      {/* Team Members Table */}
      <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow className="border-b border-gray-800">
                <TableHeaderCell className="text-gray-400">Name</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Email</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Role</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Status</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Date Added</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Last Login</TableHeaderCell>
                <TableHeaderCell className="text-gray-400">Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id} className="border-b border-gray-800">
                  <TableCell className="text-white font-medium">{member.name}</TableCell>
                  <TableCell className="text-white">{member.email}</TableCell>
                  <TableCell>
                    <Badge
                      color={
                        member.role === 'Admin' 
                          ? 'blue' 
                          : member.role === 'Designer' 
                          ? 'indigo' 
                          : member.role === 'Approver' 
                          ? 'amber' 
                          : 'slate'
                      }
                      className={`${
                        member.role === 'Admin' 
                          ? 'bg-blue-500/20 text-blue-500' 
                          : member.role === 'Designer' 
                          ? 'bg-indigo-500/20 text-indigo-500' 
                          : member.role === 'Approver' 
                          ? 'bg-amber-500/20 text-amber-500' 
                          : 'bg-slate-500/20 text-slate-500'
                      }`}
                    >
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      color={
                        member.status === 'Active' 
                          ? 'green' 
                          : member.status === 'Pending' 
                          ? 'amber' 
                          : 'red'
                      }
                      className={`${
                        member.status === 'Active' 
                          ? 'bg-green-500/20 text-green-500' 
                          : member.status === 'Pending' 
                          ? 'bg-amber-500/20 text-amber-500' 
                          : 'bg-red-500/20 text-red-500'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        {member.status === 'Active' && <Check size={14} />}
                        {member.status === 'Pending' && <AlertTriangle size={14} />}
                        {member.status === 'Inactive' && <X size={14} />}
                        <span>{member.status}</span>
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell className="text-white">{member.dateAdded}</TableCell>
                  <TableCell className="text-white">{member.lastLogin}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <button className="text-green-500 hover:text-green-400 transition-colors" title="Edit">
                        <UserCog size={18} />
                      </button>
                      <button className="text-red-500 hover:text-red-400 transition-colors" title="Remove">
                        <UserMinus size={18} />
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