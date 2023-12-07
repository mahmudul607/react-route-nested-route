import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
   
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
        <h2>This is Users page</h2>
        <h3>Welcome to Users page</h3>
        <div className="users">
            {
                users.map((person) => <User person={person} key={person.id}></User>)
            }
        </div>
        
    </div>
    );
};

export default Users;