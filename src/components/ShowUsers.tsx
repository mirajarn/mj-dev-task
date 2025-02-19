import React, { useState } from 'react';
import { Button, Spin, Input } from 'antd';
import Heading from './Heading';
import UserModal from './UserModal';
import { User } from '../interfaces/User';

interface ShowUsersProps {
  users: User[];  // Accept an array of User objects
  isLoading: boolean; // Accept isLoading as a prop
}

const ShowUsers: React.FC<ShowUsersProps> = ({ users, isLoading }) => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // Selected user data
  const [searchTerm, setSearchTerm] = useState(''); // Track search input

  const handleShowModal = (user: User) => {
    setSelectedUser(user); // Set the selected user for the modal
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
    setSelectedUser(null); // Reset the selected user
  };

  // Filter users based on the search term
  const filteredUsers = users.filter(user =>
    user.company.name.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive match
  );

  return (
    <div>
      {isLoading && <Spin />}

      <Input 
      className='input-search'
        placeholder="Search by company name..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update state on each letter 
      />

      <div className="user-grid">
        {filteredUsers.map(user => (
          <div 
            key={user.id} 
            className="user-box" 
            onClick={() => handleShowModal(user)}
          >
            <Heading className='user-heading' title={user.name} />
            Company: {user.company.name}
          </div>
        ))}
      </div>

      <UserModal show={showModal} onClose={handleCloseModal} user={selectedUser} />
</div>
  );
}

export default ShowUsers;
