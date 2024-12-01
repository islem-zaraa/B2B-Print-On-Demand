import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DemoLayout from './DemoLayout';
import MockupEditor from './MockupEditor';

export default function DemoDashboard() {
  return (
    <Routes>
      <Route element={<DemoLayout />}>
        <Route index element={<MockupEditor />} />
        <Route path="mockups" element={<MockupEditor />} />
        {/* Add other routes as needed */}
      </Route>
    </Routes>
  );
}