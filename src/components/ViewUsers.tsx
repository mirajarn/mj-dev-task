import Heading from './Heading';
import { LABELS } from '../variables/variables';
import ShowUsers from './ShowUsers';
import FetchUsers from './FetchUsers';

/* Summary: The ViewUsers component fetches user data using the FetchUsers hook, then displays it with the ShowUsers component. */
const ViewUsers = () => {
  const { users, isLoading } = FetchUsers();

  return (
    <>
      <div className="users-container">
        <Heading className='viewusers-heading' title={LABELS.USERS} />
        <ShowUsers users={users} isLoading={isLoading} />
      </div>
    </>
  );
};

export default ViewUsers;
