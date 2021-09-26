import React, {useState} from 'react';
import axios from "axios";

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    }

    return (
        <div className="row">
            <h1>Create Post</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input className="form-control" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default PostCreate;