import React from 'react';

const PostPage = async () => {

    const res= await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()


    return (
        <div>
            <h2>Hello Posts: {posts.length}</h2>
        </div>
    );
};

export default PostPage;