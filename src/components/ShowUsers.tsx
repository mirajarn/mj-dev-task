import React, { useState } from 'react';
import { Spin, Input } from 'antd';
import Heading from './Heading';
import UserModal from './UserModal';
import { User } from '../interfaces/User';

/* Summary: The ShowUsers component displays a list of users with a search bar to filter by company name. It handles showing a modal with detailed user information when a user is clicked. The component also shows a loading spinner while fetching data and displays a message if no users match the search.*/

interface ShowUsersProps {
  users: User[];
  isLoading: boolean;
}

const ShowUsers: React.FC<ShowUsersProps> = ({ users, isLoading }) => {
  const [showModal, setShowModal] = useState(false); 
  const [selectedUser, setSelectedUser] = useState<User | null>(null); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleShowModal = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null); 
  };


  const filteredUsers = users.filter(user =>
    user.company.name.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive match

  );

  return (
    <div>
      <Input 
        className="input-search"
        placeholder="Search by company name..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      {isLoading ? (
        <Spin />
      ) : filteredUsers.length > 0 ? (
        <div className="user-grid">
          {filteredUsers.map(user => (
            <div 
              key={user.id} 
              className="user-box" 
              onClick={() => handleShowModal(user)}
            >
              <div className="hover-text">Click for more information</div>
              <Heading className="user-heading" title={user.name} />
              Company: {user.company.name}
            </div>
          ))}
        </div>
      ) : (
        <div>No users found matching the search</div>
      )}
      <UserModal show={showModal} onClose={handleCloseModal} user={selectedUser} />
    </div>
  );
}

export default ShowUsers;
