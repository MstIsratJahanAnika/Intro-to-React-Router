// import React from 'react';

import { useLoaderData, useNavigate } from "react-router";

const PostDetail = () => {

    const postDetail = useLoaderData();
    const navigate = useNavigate();

    return (
        <div>
            <h2>{postDetail.title}</h2>
            <p>{postDetail.body}</p>
            <button onClick={()=> navigate(-1) }>Go Back</button>
        </div>
    );
};

export default PostDetail;