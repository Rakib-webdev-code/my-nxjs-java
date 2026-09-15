import React from 'react';

const UserDatailPage = async ({params}) => {
    const {userId} = await params 
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    const user = await res.json()
    
    return (
        <div>
            <h2>User Deatial Page: {userId}</h2>
            <div>
              <h2>{user.name}</h2>  
              <p>{user.email}</p>
              <p>{user.address.city}</p>
            </div>

        </div>
    );
};

export default  UserDatailPage;