import React, { useState, useEffect } from "react";
import PostLists from "../component/PostLists";
import postStore from "../stores/postStores";
import { getPosts } from "../actions/postAction";

function PostPage() {
    const [posts, setPosts] = useState(postStore.getPosts());

    useEffect(() => {
        postStore.addChangeListener(onChange);
        if (postStore.getPosts().length === 0) getPosts();
        return () => postStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setPosts(postStore.getPosts());
    }

    return (
        <div>
            <PostLists posts={posts} />
        </div>
    );
}

export default PostPage;