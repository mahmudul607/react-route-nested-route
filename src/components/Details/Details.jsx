import { useLoaderData, useNavigate } from "react-router-dom";


const Details = () => {
    const Navigate = useNavigate();
    const handleNavigation = () =>{
        Navigate(-1);
        
    }
    const user = useLoaderData();
    const {name, email, phone} = user;
    console.log(name);
    return (
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={() => handleNavigation()}>Go Back</button>
            
        </div>
    );
};

export default Details;