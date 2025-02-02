import { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css';

interface User {
  firstName: string;
  lastName: string;
  address: string;
  dateOfBirth: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User>({
    firstName: '',
    lastName: '',
    address: '',
    dateOfBirth: '',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get<User[]>('/src/user.json');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ firstName: '', lastName: '', address: '', dateOfBirth: '' });
  };

  const handleDeleteUser = (index: number) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="users">
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} - {user.address} - {user.dateOfBirth}
            <button onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Add New User</h3>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={newUser.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={newUser.lastName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={newUser.address}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="dateOfBirth"
        placeholder="Date of Birth"
        value={newUser.dateOfBirth}
        onChange={handleInputChange}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default Users;