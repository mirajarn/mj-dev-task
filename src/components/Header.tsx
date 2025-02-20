import React from 'react';
import '../css/styles.css';
import Button from './Button';
import Heading from './Heading';
import { LABELS } from '../variables/variables';

/* Summary: The Header component renders a button to toggle the sidebar and a heading with the project title. It receives props to manage the sidebar's state and handles the toggle functionality with the onClick event. */

interface HeaderProps {
  isSidebarOpen: boolean;
  handleToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, handleToggleSidebar }) => {

  return (
    <header className="header">
      <Button onClick={handleToggleSidebar} className="header-button">
        {isSidebarOpen ? <i className="bi bi-x" /> : <i className="bi bi-list" />}
      </Button>
      <Heading className="header-title" title={LABELS.DEV_CHALLENGE} />
    </header>
  );
};

export default Header;