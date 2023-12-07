
import PropTypes from 'prop-types';
import './User.css'
import { Link, useNavigate } from 'react-router-dom';
const User = ({person}) => {
    const Navigate = useNavigate();
    
    const {id, name, email, phone} = person;
    const handleNavigate =(id) => {
        Navigate(`/users/${id}`);
    }
    return (
        <div className='person'>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <Link to={`/users/${id}`}>Details</Link>
            <button onClick={()=> handleNavigate(id)}>Show Details</button>
            
        </div>
    );
};

User.propTypes = {
    person: PropTypes.object.isRequired
};

export default User;