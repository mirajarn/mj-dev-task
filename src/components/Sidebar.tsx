import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/styles.css';
import Button from './Button';
import { LABELS } from '../variables/variables';
import Heading from './Heading';

/* Summary: The Sidebar component renders a navigation sidebar with buttons to navigate between the front page and the user list. It uses the useNavigate hook from React Router for routing. Depending on the isOpen prop, it displays icons or titles, and includes an about a section about the developer of the project. */

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navigate = useNavigate();

  const navToFrontPage = () => {
    navigate('/');
  };

  const navToUserList = () => {
    navigate('/userlist');
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'expanded' : ''}`}>
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
        <div className='sidebar-info'>
          {!isOpen ? (
            <i className="bi bi-person-square" />
          ) : (
            <ul className='none-list-type'>
              <li>Mira Järnfors</li>
              <li>🌡️ Fever during project 37.5-39°C</li>
            </ul>
          )}
        </div>
      </div>


    </>
  );
};

export default Sidebar;
