import React from 'react';
import Heading from './Heading';
import { LABELS } from '../variables/variables';
import ShowUsers from './ShowUsers';
import FetchUsers from './FetchUsers'; 

const ViewUsers = () => {
  const { users, isLoading } = FetchUsers(); 

  return (
    <>  
      <Heading className='viewusers-heading' title={LABELS.USERS} />  

      <ShowUsers users={users} isLoading={isLoading} /> 
    </>
  );
};

export default ViewUsers;
