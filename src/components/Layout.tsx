import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../css/styles.css';
import Header from './Header';
import Frontpage from './Frontpage';
import Sidebar from './Sidebar';
import ViewUsers from './ViewUsers';

interface LayoutProps {
  children?: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <Header toggleSidebar={toggleSidebar} />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;