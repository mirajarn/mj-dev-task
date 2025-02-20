import React, { useState } from 'react';
import '../css/styles.css';
import Header from './Header';
import Sidebar from './Sidebar';

/* Summary: The Layout component provides a wrapper for the app's header, sidebar, and dynamic content. It manages the sidebar's open/closed state and passes the necessary props to Header and Sidebar components, while rendering the children passed to the Layout. */

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Header handleToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
        {children}
    </div>
  );
};

export default Layout;