import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
       <nav>
        <ul style={{display:'flex', gap:'20px', justifyContent:'center'}}>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
        </ul>
       </nav>
    );
};

export default Header;