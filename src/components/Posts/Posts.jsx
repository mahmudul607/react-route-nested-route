import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();

    return (
        <div className="posts">
            <h2>This is posts page</h2>
            <h3>Welcome to posts page</h3>
            <div className="posts-area">
                {
                    posts.map((post) => <Post post={post} key={post.id}></Post>)
                }
            </div>
            
        </div>
    );
};

export default Posts;