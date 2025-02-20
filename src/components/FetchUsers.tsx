import { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../interfaces/User';

/* The FetchUsers hook fetches user data from an API, sorts it alphabetically by name, and manages loading state. It returns the sorted users and loading state for use in components.*/

const FetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setIsLoading(true);
        const sortedUsers = response.data.sort((a: User, b: User) =>
          a.name.localeCompare(b.name)
        );
        setUsers(sortedUsers);
        setIsLoading(false);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return { users, isLoading };
};

export default FetchUsers;