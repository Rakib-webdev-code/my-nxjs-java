import React from 'react';

const UsersPage = async() => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await responce.json()

    return (
        <div>
            <h2>Users Page</h2>
            
            
        </div>
    );
};

export default UsersPage;  