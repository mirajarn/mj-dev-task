import { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../interfaces/User';

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