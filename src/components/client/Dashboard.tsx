import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientLayout from './layout/ClientLayout';
import Overview from './pages/Overview';
import TemplateDetails from './pages/TemplateDetails';
import Settings from './pages/Settings';
import Orders from './pages/Orders';
import OrderHistory from './pages/OrderHistory';
import Products from './pages/Products';
import Invoices from './pages/Invoices';

export default function Dashboard() {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route index element={<Overview />} />
        <Route path="templates/:id" element={<TemplateDetails />} />
        <Route path="orders" element={<Orders />} />
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="products" element={<Products />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}