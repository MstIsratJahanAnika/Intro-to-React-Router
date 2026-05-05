// import React from 'react';

import { Link } from "react-router";

const User = ({user}) => {

    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '20px',
        margin: '10px'
    }
    // destructuring 
    const {id, name, email, phone} = user;
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Mobile: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;