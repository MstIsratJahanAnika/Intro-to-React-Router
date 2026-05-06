// import React, { use } from 'react';

import { use } from "react";

const UserDetails2 = ({userPromise}) => {
    const {name, username} = use(userPromise); //info receive kora, response receive hobe 
    // console.log(user);
    return (
        <div>
            <p><small>User Name: {username}</small></p>
            <p>User: {name}</p>
        </div>
    );
};

export default UserDetails2;