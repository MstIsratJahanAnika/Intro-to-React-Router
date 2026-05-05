// import React from 'react';

import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);

    const{name, website} = user;

    // const params = useParams();
    // console.log(params.userId);
    const {userId} = useParams();
    console.log(userId);

    return (
        <div>
            <h3>This is User Details</h3>
            <h2>Name: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;