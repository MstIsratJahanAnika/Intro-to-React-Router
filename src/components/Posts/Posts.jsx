// import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {

    const posts = useLoaderData(); //data peye gesi
    
    return (
        <div>
            <h2>These are my posts: {posts.length}</h2>
            {
                // kannakati na korar jonno 
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;