import React from 'react';
import '../css/styles.css';
import Button from './Button';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <Button onClick={toggleSidebar} className="header-button">
        <i className="bi bi-list"></i>
      </Button>
    </header>
  );
};

export default Header;