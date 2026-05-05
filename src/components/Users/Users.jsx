// import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    // jekhane load diye data fetch kora hoyeche shekhan theke call kora hoyeche 
    const users = useLoaderData();
    console.log(users);
    
    return (
        <div>
            <h2>This is users page</h2>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;