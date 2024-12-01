import React from 'react';
import DemoSidebar from './DemoSidebar';
import DemoHeader from './DemoHeader';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-black">
      <DemoSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DemoHeader />
        <main className="flex-1 overflow-y-auto bg-black p-6">
          {children}
        </main>
      </div>
    </div>
  );
}