import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/styles.css';
import Button from './Button';
import { LABELS } from '../variables/variables';
import Heading from './Heading';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navigate = useNavigate();

  const navToFrontPage = () => {
    navigate('/frontpage');
  };

  const navToUserList = () => {
    navigate('/userlist');
  };

  return (
    <div className={`l-navbar ${isOpen ? 'expanded' : ''}`}>
      <Button onClick={navToFrontPage} className="btn sidebar-btn">
        {!isOpen ? (
          <i className="bi bi-grid-fill" />
        ) : (
          <Heading title={LABELS.FRONT_PAGE} />
        )}
      </Button>
      <Button onClick={navToUserList} className="btn sidebar-btn">
        {!isOpen ? (
          <i className="bi bi-people-fill" />
        ) : (
          <Heading title={LABELS.USERS} />
        )}
      </Button>
    </div>
  );
};

export default Sidebar;
