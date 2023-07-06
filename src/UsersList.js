import { useState } from 'react';
import './UsersList.css'
import ButtonsPanel from './ButtonsPanel';



const UsersList = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        usertype: 'Admin'
    });

    const [users, setUsers] = useState([]);

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

    // const [filteredUsersByType, setFilteredUsersByType] = useState([]);

    const filteringUsersByType = (usertype) => {

    const filteredUsersByType = { ...users };

        if (usertype === 'Admins') {
            const filteredUsers = filteredUsersByType.filter(user => user.usertype === 'Admin');
            console.log('przefiltrowani admini: ', filteredUsersByType);
            

        } else if (usertype === 'Users') {
            filteredUsersByType = users.filter(user => user.usertype === 'User');
            console.log('przefiltrowani userzy: ', filteredUsersByType);

        } else if (usertype === 'All') {
            filteredUsersByType = users;
            console.log('wszyscy: ', filteredUsersByType);
        }
        
        console.log('przefiltrowana tablica: ', filteredUsersByType);
        console.log('co jest w tablicy oryginalnej :', users);
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

            <ButtonsPanel filteringUsersByType={filteringUsersByType} />

            <div className="list">
                {users.map((user) => {
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