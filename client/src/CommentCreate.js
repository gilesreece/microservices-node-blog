import React, {useState} from "react";
import axios from "axios";

const CommentCreate = ({postId}) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });

        setContent('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Comments:</label>
                    <input className="form-control" value={content} onChange={event => setContent(event.target.value)}/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CommentCreate;