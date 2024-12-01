import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientLayout from './layout/ClientLayout';
import Overview from './pages/Overview';
import Designs from './pages/Designs';
import Templates from './pages/Templates';
import DesignStudio from './pages/DesignStudio';

export default function Dashboard() {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route index element={<Overview />} />
        <Route path="designs" element={<Designs />} />
        <Route path="design-studio" element={<DesignStudio />} />
        <Route path="templates" element={<Templates />} />
      </Route>
    </Routes>
  );
}