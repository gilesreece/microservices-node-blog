import React, {useEffect, useState} from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');

        setPosts(res.data);
    };

    const renderedPosts = Object.values(posts).map((post) => {
        return (
            <div className="col-4 mb-4" key={post.id}>
                <div className="card">
                    <div className="card-header">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="card-body">
                        <CommentList comments={post.comments}/>
                        <CommentCreate postId={post.id}/>
                    </div>
                </div>
            </div>
        );
    });

    useEffect(() => {
        fetchPosts().then();
    }, []);

    return (
        <div className="row">
            {renderedPosts}
        </div>
    );
};

export default PostList;