import React from 'react';
import { Outlet } from 'react-router-dom';
import ClientSidebar from './ClientSidebar';
import ClientHeader from './ClientHeader';

export default function ClientLayout() {
  return (
    <div className="flex h-screen bg-black">
      <ClientSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ClientHeader />
        <main className="flex-1 overflow-y-auto bg-black p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}