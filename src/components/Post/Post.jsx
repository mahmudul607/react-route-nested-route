
import PropTypes from 'prop-types';
import './Post.css'
const Post = ({post}) => {
 
    const {title, body} = post;
    console.log(title)
    return (
        <div className='post-container'>
            <h3 className='post-title'>Title:{title}</h3>
            <div className='post-body'>
                <p>{body}</p>
            </div>
            
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;