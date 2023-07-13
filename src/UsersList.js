import { useEffect, useState } from 'react';
import './UsersList.css'
import ButtonsPanel from './ButtonsPanel';



const UsersList = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        usertype: 'Admin'
    });

    const [users, setUsers] = useState([]);

    const [filteredUsers, setFilteredUsers] = useState([]);

    const [filter, setFilter] = useState('all');

    useEffect(()=> {
        filteringUsersByType(filter);
    }, [filter, users])

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        setFormData((prevDataForm) => {
            return { ...prevDataForm, [name]: target.value };
        });
    };

    const setUser = (e) => {
        e.preventDefault();
        setUsers(users.concat({ ...formData, id: Date.now() }));
    }

    const removeUser = (id) => {
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers);
    }

    const filteringUsersByType = (usertype) => {

        let filteredUsersByType = [];

        if (usertype === 'admins') {
            filteredUsersByType = users.filter(user => user.usertype === 'Admin');
            console.log('przefiltrowani admini: ', filteredUsersByType);


        } else if (usertype === 'users') {
            filteredUsersByType = users.filter(user => user.usertype === 'User');
            console.log('przefiltrowani userzy: ', filteredUsersByType);

        } else {

            filteredUsersByType = users;
            console.log('wszyscy: ', filteredUsersByType);
        }

        console.log('przefiltrowana tablica: ', filteredUsersByType);
        console.log('co jest w tablicy oryginalnej :', users);

        setFilteredUsers(filteredUsersByType);
    }

    return (
        <div className="usersList">

            <form onSubmit={setUser}>
                <label htmlFor="username">User name</label>
                <input type="text" name="username" placeholder="User name" onChange={handleInputChange} value={formData.username} />
                <label htmlFor="email">User email</label>
                <input type="email" name="email" placeholder="User email" onChange={handleInputChange} value={formData.email} />
                <label htmlFor="usertype">User type</label>
                <select id='usertype' name='usertype' onChange={handleInputChange}>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
                <button>Save</button>
            </form>

            <ButtonsPanel setFilter={setFilter} filter={filter} />

            <div className="list">
                {filteredUsers.map((user) => {
                    return <div className="userItem" key={user.id} onClick={() => removeUser(user.id)}>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.usertype}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default UsersList;