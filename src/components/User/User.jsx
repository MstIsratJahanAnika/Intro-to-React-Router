// import React from 'react';

import { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({user}) => {

    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '20px',
        margin: '10px'
    }

    const [showInfo, setShowInfo] = useState(false); //datail info button er jonno 

    const[visitHome, setVisitHome] = useState(false);

    const location = useLocation();
    console.log(location);

    if(visitHome){
        return <Navigate to='/'></Navigate>
        // homepage a chole jao 
    }

    // destructuring 
    const {id, name, email, phone} = user;

    // ei component UserDetails2 er kase promise pathabe 
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Mobile: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>

            <button onClick={()=> setShowInfo(!showInfo)}>{showInfo? 'Hide':'Show'} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }

            <button onClick={()=> setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;