import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'New', value: 45 },
  { name: 'Returning', value: 32 },
  { name: 'VIP', value: 18 },
  { name: 'Enterprise', value: 5 }
];

export default function CustomerMetrics() {
  return (
    <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Customer Segments</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#000',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: '0.5rem'
              }}
            />
            <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}