// import React, { use } from 'react';

import { use } from "react";

const Users2 = ({users2Promise}) => {

    const users2 = use(users2Promise);
    console.log('users2 suspense data load', users2);
    return (
        <div>
            <h2>This is User2</h2>
        </div>
    );
};

export default Users2;