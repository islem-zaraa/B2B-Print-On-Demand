import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientLayout from './layout/ClientLayout';
import Overview from './pages/Overview';
import Templates from './pages/Templates';
import TemplateDetails from './pages/TemplateDetails';
import Settings from './pages/Settings';

export default function Dashboard() {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route index element={<Overview />} />
        <Route path="templates" element={<Templates />} />
        <Route path="templates/:id" element={<TemplateDetails />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}